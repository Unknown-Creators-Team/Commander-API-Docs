import React from 'react';
import type { ReactElement } from 'react';
import styles from './styles.module.css';

interface LinkCardProps {
  url: string;
  title?: string;
  description?: string;
  image?: string;
}

export default function LinkCard({ url, title, description, image }: LinkCardProps): ReactElement {
  // URLからドメイン名を取得
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return '';
    }
  };

  // faviconのURLを生成
  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).origin;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    } catch {
      return '';
    }
  };

  return (
    <a href={url} className={styles.linkCard} target="_blank" rel="noopener noreferrer">
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.header}>
            {getFaviconUrl(url) && (
              <img src={getFaviconUrl(url)} alt="" className={styles.favicon} />
            )}
            <span className={styles.domain}>{getDomain(url)}</span>
          </div>
          {title && <div className={styles.title}>{title}</div>}
          {description && <div className={styles.description}>{description}</div>}
        </div>
        {image && (
          <div className={styles.imageWrapper}>
            <img src={image} alt={title || ''} className={styles.image} />
          </div>
        )}
      </div>
    </a>
  );
}
