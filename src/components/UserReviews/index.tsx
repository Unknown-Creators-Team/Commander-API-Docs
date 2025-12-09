import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { FaStar, FaUserCircle, FaQuoteLeft } from 'react-icons/fa';
import styles from './styles.module.css';

const Reviews = [
  {
    name: 'Steve_Dev',
    role: 'Add-on Developer',
    content: 'Commander APIのおかげで、複雑なイベント処理が驚くほど簡単になりました。以前は数日かかっていた作業が数時間で終わります！',
    rating: 5,
  },
  {
    name: 'RedstoneMaster',
    role: 'Technical Player',
    content: 'Script APIの学習コストが大幅に下がりました。ドキュメントも非常に分かりやすく、初心者にもおすすめです。',
    rating: 5,
  },
  {
    name: 'MapMaker_Pro',
    role: 'World Creator',
    content: 'カスタムイベントの作成機能が革命的です。RPGマップの制作において、これなしでは考えられません。',
    rating: 5,
  },
];

function ReviewCard({name, role, content, rating}: {name: string, role: string, content: string, rating: number}) {
  return (
    <div className={clsx('card', styles.reviewCard)}>
      <div className="card__header">
        <div className={styles.avatarContainer}>
          <FaUserCircle className={styles.avatarIcon} />
          <div className={styles.userInfo}>
            <h3 className={styles.userName}>{name}</h3>
            <span className={styles.userRole}>{role}</span>
          </div>
        </div>
        <div className={styles.rating}>
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className={styles.starIcon} />
          ))}
        </div>
      </div>
      <div className="card__body">
        <FaQuoteLeft className={styles.quoteIcon} />
        <p className={styles.reviewContent}>{content}</p>
      </div>
    </div>
  );
}

export default function UserReviews(): ReactNode {
  return (
    <section className={styles.reviewsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>User Reviews</h2>
          <p className={styles.sectionSubtitle}>コミュニティからの声</p>
        </div>
        <div className={styles.reviewsGrid}>
          {Reviews.map((props, idx) => (
            <ReviewCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
