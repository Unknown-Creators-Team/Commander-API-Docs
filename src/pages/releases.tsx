import type {ReactNode} from 'react';
import {useState, useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

import styles from './releases.module.css';

interface GitHubRelease {
  id: number;
  name: string;
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
  assets: {
    name: string;
    size: number;
    download_count: number;
    browser_download_url: string;
  }[];
}

interface RepoReleases {
  repo: string;
  displayName: string;
  releases: GitHubRelease[];
  loading: boolean;
  error: string | null;
}

function ReleaseCard({ release, repoName }: { release: GitHubRelease; repoName: string }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className={styles.releaseCard}>
      <div className={styles.releaseHeader}>
        <div>
          <h3 className={styles.releaseName}>{release.name || release.tag_name}</h3>
          <div className={styles.releaseMeta}>
            <span className={styles.releaseTag}>{release.tag_name}</span>
            <span className={styles.releaseDate}>{formatDate(release.published_at)}</span>
          </div>
        </div>
        <a
          href={release.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          GitHub で見る
        </a>
      </div>

      {release.body && (
        <div className={styles.releaseBody}>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {release.body}
          </ReactMarkdown>
        </div>
      )}

      {release.assets.length > 0 && (
        <div className={styles.assetsSection}>
          <h4 className={styles.assetsTitle}>ダウンロード</h4>
          <div className={styles.assetsList}>
            {release.assets.map((asset) => (
              <a
                key={asset.name}
                href={asset.browser_download_url}
                className={styles.assetCard}
                download
              >
                <div className={styles.assetInfo}>
                  <span className={styles.assetName}>{asset.name}</span>
                  <span className={styles.assetMeta}>
                    {formatSize(asset.size)} • {asset.download_count} ダウンロード
                  </span>
                </div>
                <svg className={styles.downloadIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function RepoSection({ repoData }: { repoData: RepoReleases }) {
  return (
    <section className={styles.repoSection}>
      <div className="container">
        <Heading as="h2" className={styles.repoTitle}>
          {repoData.displayName}
        </Heading>

        {repoData.loading && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>読み込み中...</p>
          </div>
        )}

        {repoData.error && (
          <div className={styles.error}>
            <p>エラー: {repoData.error}</p>
          </div>
        )}

        {!repoData.loading && !repoData.error && repoData.releases.length === 0 && (
          <div className={styles.noReleases}>
            <p>リリースが見つかりませんでした。</p>
          </div>
        )}

        {!repoData.loading && !repoData.error && repoData.releases.length > 0 && (
          <div className={styles.releasesList}>
            {repoData.releases.map((release) => (
              <ReleaseCard key={release.id} release={release} repoName={repoData.repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Releases(): ReactNode {
  const repos = [
    {
      repo: 'Commander-API',
      displayName: 'Commander API',
      owner: 'Unknown-Creators-Team'
    },
    {
      repo: 'Commander-API-Extension',
      displayName: 'Commander API Extension',
      owner: 'Unknown-Creators-Team'
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [reposData, setReposData] = useState<RepoReleases[]>(
    repos.map(r => ({
      repo: r.repo,
      displayName: r.displayName,
      releases: [],
      loading: true,
      error: null
    }))
  );

  useEffect(() => {
    const fetchReleases = async () => {
      const updatedData = await Promise.all(
        repos.map(async (repo) => {
          try {
            const response = await fetch(
              `https://api.github.com/repos/${repo.owner}/${repo.repo}/releases`
            );
            
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            return {
              repo: repo.repo,
              displayName: repo.displayName,
              releases: data,
              loading: false,
              error: null
            };
          } catch (error) {
            return {
              repo: repo.repo,
              displayName: repo.displayName,
              releases: [],
              loading: false,
              error: error.message
            };
          }
        })
      );

      setReposData(updatedData);
    };

    fetchReleases();
  }, []);

  return (
    <Layout
      title="リリース"
      description="Commander API と Commander API Extension のリリース一覧とダウンロード">
      <main className={styles.releasesPage}>
        <div className={styles.pageHeader}>
          <div className="container">
            <Heading as="h1" className={styles.pageTitle}>
              リリース
            </Heading>
            <p className={styles.pageDescription}>
              最新バージョンをダウンロードして、Commander API を今すぐ使い始めましょう。
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.tabsContainer}>
            {repos.map((repo, index) => (
              <button
                key={repo.repo}
                className={clsx(styles.tabButton, activeTab === index && styles.tabButtonActive)}
                onClick={() => setActiveTab(index)}
              >
                {repo.displayName}
              </button>
            ))}
          </div>

          <RepoSection repoData={reposData[activeTab]} />
        </div>
      </main>
    </Layout>
  );
}
