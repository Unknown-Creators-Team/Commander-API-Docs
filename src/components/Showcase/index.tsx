import React, { useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { FaCode, FaGamepad, FaBolt } from 'react-icons/fa';

const ShowcaseList = [
  {
    title: 'Script Event',
    icon: FaCode,
    description: '複雑なスクリプト処理を、シンプルなイベントとして呼び出し可能。',
    items: [
      {
        label: 'Explosion',
        desc: '指定した座標で爆発を起こす',
        code: '/scriptevent commander:explosion 0 0 0 5',
        media: '/img/showcase/sample.png'
      },
      {
        label: 'Actionbar',
        desc: 'アクションバーにメッセージを表示',
        code: '/scriptevent commander:actionbar "Hello World!"',
        media: '/img/showcase/sample.png'
      },
      {
        label: 'Form',
        desc: 'プレイヤーにモーダルフォームを表示',
        code: '/scriptevent commander:form {"title":"Menu","content":"Select option"}',
        media: '/img/showcase/sample.png'
      },
      {
        label: 'Spawn Entity',
        desc: '指定したエンティティを召喚',
        code: '/scriptevent commander:spawn_entity creeper 0 0 0',
        media: '/img/showcase/sample.png'
      }
    ]
  },
  {
    title: 'Event Detection',
    icon: FaBolt,
    description: 'プレイヤーの行動やワールドの変化をリアルタイムに検知。',
    items: [
      {
        label: 'Block Break',
        desc: 'ブロック破壊を検知してコマンド実行',
        code: 'event:playerBreakBlock -> run command',
        media: '/img/showcase/sample.png'
      },
      {
        label: 'Projectile',
        desc: '発射物が何かに当たった瞬間を検知',
        code: 'event:projectileHit -> explode',
        media: '/img/showcase/sample.png'
      },
      {
        label: 'Item Use',
        desc: 'アイテムを使用した瞬間を検知',
        code: 'event:itemUse -> give effect',
        media: '/img/showcase/sample.png'
      },
      {
        label: 'Entity Die',
        desc: 'エンティティが死亡した瞬間を検知',
        code: 'event:entityDie -> spawn loot',
        media: '/img/showcase/sample.png'
      }
    ]
  }
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className={styles.showcaseSection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className={styles.sectionTitle}>
            <FaGamepad className={styles.titleIcon} />
            Unlimited Possibilities
          </Heading>
          <p className={styles.sectionSubtitle}>
            Commander API が提供する強力な機能の一部をご覧ください。
          </p>
        </div>

        <div className={styles.showcaseContainer}>
          {/* Left: Navigation */}
          <div className={styles.navColumn}>
            {ShowcaseList.map((category, idx) => (
              <div key={idx} className={styles.categoryGroup}>
                <h3 className={styles.categoryTitle}>
                  <category.icon className={styles.categoryIcon} />
                  {category.title}
                </h3>
                <div className={styles.buttonGroup}>
                  {category.items.map((item, itemIdx) => {
                    const isSelected = activeTab === idx && activeItem === itemIdx;
                    return (
                      <button
                        key={itemIdx}
                        className={clsx(styles.navButton, isSelected && styles.navButtonActive)}
                        onClick={() => { setActiveTab(idx); setActiveItem(itemIdx); }}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Preview */}
          <div className={styles.previewColumn}>
            <div className={styles.previewCard}>
              <div className={styles.previewHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.controlRed}></span>
                  <span className={styles.controlYellow}></span>
                  <span className={styles.controlGreen}></span>
                </div>
                <span className={styles.previewTitle}>
                  {ShowcaseList[activeTab].items[activeItem].label} Preview
                </span>
              </div>
              
              <div className={styles.previewContent}>
                <div className={styles.mediaContainer}>
                  <img 
                    src={useBaseUrl(ShowcaseList[activeTab].items[activeItem].media)} 
                    alt={ShowcaseList[activeTab].items[activeItem].label}
                    className={styles.previewMedia}
                  />
                </div>
                
                <div className={styles.codeBlock}>
                  <div className={styles.codeLabel}>Command Input:</div>
                  <code>{ShowcaseList[activeTab].items[activeItem].code}</code>
                </div>
                
                <p className={styles.itemDescription}>
                  {ShowcaseList[activeTab].items[activeItem].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
