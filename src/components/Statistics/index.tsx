import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { FaDownload, FaStar, FaDiscord, FaCode } from 'react-icons/fa';
import styles from './styles.module.css';
import { useGitHubStats } from './useGitHubStats';

const DEFAULT_OWNER = 'Unknown-Creators-Team';
const DEFAULT_REPO = 'Commander-API';

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k+';
  return num.toString();
}

function StatItem({icon: Icon, value, label, color, loading}: {icon: React.ElementType, value: string, label: string, color: string, loading?: boolean}) {
  return (
    <div className={styles.statItem}>
      <div className={styles.iconWrapper} style={{backgroundColor: `${color}20`, color: color}}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.value} style={{textShadow: `0 0 20px ${color}60`}}>
          {loading ? '...' : value}
        </h3>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
}

export default function Statistics({owner = DEFAULT_OWNER, repo = DEFAULT_REPO}: {owner?: string, repo?: string}): ReactNode {
  const { stars, downloads, loading } = useGitHubStats(owner, repo);

  const statsList = [
    {
      icon: FaDownload,
      value: formatNumber(downloads),
      label: 'Total Downloads',
      color: '#60a5fa', // Blue
      loading
    },
    {
      icon: FaStar,
      value: formatNumber(stars),
      label: 'GitHub Stars',
      color: '#fbbf24', // Amber/Yellow
      loading
    },
    {
      icon: FaDiscord,
      value: '3+',
      label: 'Community Members',
      color: '#5865F2', // Discord Blurple
    },
    {
      icon: FaCode,
      value: '100+',
      label: 'Custom Features',
      color: '#f472b6', // Pink
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {statsList.map((props, idx) => (
            <StatItem {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
