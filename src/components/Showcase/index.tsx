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
        code: '/scriptevent capi:explosion {location=[~,~,~-10], radius=5}',
        media: '/img/showcase/scriptevent/explosion.mp4'
      },
      {
        label: 'Actionbar',
        desc: 'アクションバーに名前を表示',
        code: '/scriptevent capi:actionbar Hello <!name>',
        media: '/img/showcase/scriptevent/actionbar.mp4'
      },
      {
        label: 'Form',
        desc: 'プレイヤーにモーダルフォームを表示',
        code: "/scriptevent capi:form {typ=message,ttl=Form,bdy='Commander API is',bt1={txt=Awesome!,act={typ=run,val='say Awesome!'}},bt2={txt=Nice!,act={typ=run,val='say Nice!'}}}",
        media: '/img/showcase/scriptevent/form.mp4'
      },
      {
        label: 'Spawn Entity',
        desc: '指定したエンティティを炎上させながら召喚',
        code: '/scriptevent capi:spawn_entity {id=creeper, location=[~, ~, ~-3], fire=3}',
        media: '/img/showcase/scriptevent/spawn_entity.mp4'
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
        desc: 'ブロック破壊を検知してアクションバーに表示',
        code: '/execute as @a[tag=capi:break] at @s run scriptevent capi:actionbar <!tag=break>',
        media: '/img/showcase/event/break_block.mp4'
      },
      {
        label: 'Projectile',
        desc: '発射物が何かに当たった瞬間を検知',
        code: '/execute as @a[tag=capi:hit] at @s run scriptevent capi:explosion {location=[<!score=capi:hit_x>, <!score=capi:hit_y>, <!score=capi:hit_z>], radius=1}',
        media: '/img/showcase/event/projectile_hit.mp4'
      },
      {
        label: 'Item Use',
        desc: 'アイテムを使用した瞬間を検知',
        code: "/execute as @a[tag=capi:item_use] at @s run scriptevent capi:set_item {id=diamond_sword, name='§bMy Diamond Sword!', slot=0, enchants=[{name=sharpness,level=3}]}",
        media: '/img/showcase/event/item_use.mp4'
      },
      {
        label: 'Entity Die',
        desc: 'エンティティが死亡した瞬間を検知',
        code: '/execute as @a[tag=capi:kill] at @s run scriptevent capi:actionbar Killed entity!',
        media: '/img/showcase/event/entity_die.mp4'
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
                  {/* <img 
                    src={useBaseUrl(ShowcaseList[activeTab].items[activeItem].media)} 
                    alt={ShowcaseList[activeTab].items[activeItem].label}
                    className={styles.previewMedia}
                  /> */}
                  <video
                    src={useBaseUrl(ShowcaseList[activeTab].items[activeItem].media)}
                    className={styles.previewMedia}
                    autoPlay 
                    loop 
                    muted 
                  />
                </div>
                
                <div className={styles.codeBlock}>
                  <div className={styles.codeLabel}>Command Input:</div>
                  {/* <code>{ShowcaseList[activeTab].items[activeItem].code}</code> */}
                  {/* mdの```のようにコードブロックにする */}
                  {/* はみ出す場合は、横スクロールさせる */}
                  <pre className={styles.codeContent}>
                      {ShowcaseList[activeTab].items[activeItem].code}
                  </pre>
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
