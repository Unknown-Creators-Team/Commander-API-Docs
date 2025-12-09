import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Showcase from '@site/src/components/Showcase';
import UserReviews from '@site/src/components/UserReviews';
import Statistics from '@site/src/components/Statistics';
import FAQ from '@site/src/components/FAQ';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            Minecraft の限界を突破する。<br />
            Script API の力で、コマンド開発に革命を。
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs">
                ドキュメントを読む
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/Nano191225/Commander-API-Docs">
                GitHub
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroGlow}></div>
          <img 
            src={useBaseUrl('/img/capi.png')} 
            className={styles.heroLogo} 
            alt="Commander API Logo" 
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Home`}
      description="Commander API - Minecraft Bedrock Edition Script API Wrapper">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Statistics owner="Unknown-Creators-Team" repo="Commander-API" />
        <Showcase />
        <UserReviews />
        <FAQ />
      </main>
    </Layout>
  );
}
