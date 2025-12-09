import { useState, useEffect } from 'react';

interface GitHubStats {
  stars: number;
  downloads: number;
  forks: number;
  loading: boolean;
  error: string | null;
}

export function useGitHubStats(owner: string, repo: string): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 0,
    downloads: 0,
    forks: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchStats() {
      try {
        const [repoRes, releasesRes] = await Promise.all([
          fetch(`https://api.github.com/repos/${owner}/${repo}`),
          fetch(`https://api.github.com/repos/${owner}/${repo}/releases`)
        ]);

        if (!repoRes.ok) throw new Error('Failed to fetch repo data');
        
        const repoData = await repoRes.json();
        const releasesData = releasesRes.ok ? await releasesRes.json() : [];

        const stars = repoData.stargazers_count || 0;
        const forks = repoData.forks_count || 0;
        
        let downloads = 0;
        if (Array.isArray(releasesData)) {
          downloads = releasesData.reduce((acc: number, release: any) => {
            return acc + release.assets.reduce((a: number, asset: any) => a + asset.download_count, 0);
          }, 0);
        }

        if (isMounted) {
          setStats({ stars, downloads, forks, loading: false, error: null });
        }
      } catch (err) {
        if (isMounted) {
          setStats(prev => ({ ...prev, loading: false, error: 'Failed to load stats' }));
        }
      }
    }

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, [owner, repo]);

  return stats;
}
