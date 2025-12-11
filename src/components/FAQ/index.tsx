import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import styles from './styles.module.css';

const FAQList = [
  {
    question: 'Commander APIとは何ですか？',
    answer: 'Commander APIは、マイクラのScript APIを拡張し、コマンド開発をより簡単かつ強力にするためのラッパーライブラリです。複雑なスクリプト記述を簡略化し、直感的なイベント処理やカスタム機能の追加を可能にします。',
  },
  {
    question: '他のアドオンと競合しますか？',
    answer: '基本的には競合しませんが、Script APIを使用する他のアドオンと同時に使用する場合、リソースパックの優先順位やスクリプトの読み込み順序に注意が必要な場合があります。',
  },
  {
    question: 'バグを見つけた場合はどうすればいいですか？',
    answer: 'GitHubのIssueトラッカー、または公式Discordサーバーにて報告をお願いします。再現手順や環境情報を添えていただけると、迅速な対応が可能になります。',
  },
  {
    question: '既存のワールドに導入できますか？',
    answer: 'はい、可能です。ただし、Script APIを有効にする必要があるため、ワールドの設定で「ベータAPI」などの実験的機能をオンにする必要がある場合があります。バックアップを取ってからの導入を推奨します。',
  },
];

function FAQItem({question, answer}: {question: string, answer: string}) {
  return (
    <div className={styles.faqItem}>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <div className={styles.questionContent}>
            <FaQuestionCircle className={styles.questionIcon} />
            <span className={styles.questionText}>{question}</span>
          </div>
          <FaChevronDown className={styles.chevron} />
        </summary>
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      </details>
    </div>
  );
}

export default function FAQ(): ReactNode {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>よくある質問</p>
        </div>
        <div className={styles.faqContainer}>
          {FAQList.map((props, idx) => (
            <FAQItem {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
