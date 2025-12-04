---
title: "イベント一覧（EventTemp）"
---

# Commander-API イベント一覧

このドキュメントは、Commander-APIのalphaブランチの`/src/events/`にあるすべてのイベントのドキュメントです。

## イベントの種類

Commander-APIのイベントは、大きく以下の3つのカテゴリに分類されます：

1. **トリガーイベント** - 特定のアクションが発生したときに一度だけトリガーされるイベント
2. **ティックイベント（スコアベース）** - 毎ティック情報を更新するイベント（スコアボードで管理）
3. **ティックイベント（タグベース）** - 毎ティック状態を監視してタグを付与/削除するイベント

---

## トリガーイベント

### プレイヤーアクション
- [buttonPush](./buttonPush.md) - ボタンを押したとき
- [chatSend](./chatSend.md) - チャットメッセージを送信したとき
- [playerSpawn](./playerSpawn.md) - プレイヤーがスポーン/リスポーンしたとき
- [playerLeave](./playerLeave.md) - プレイヤーがサーバーから退出したとき

### ブロック操作
- [playerBreakBlock](./playerBreakBlock.md) - ブロックを破壊したとき
- [playerPlaceBlock](./playerPlaceBlock.md) - ブロックを設置したとき
- [playerInteractWithBlock](./playerInteractWithBlock.md) - ブロックをインタラクトしたとき

### アイテム使用
- [itemUse](./itemUse.md) - アイテムを使用したとき
- [itemUseOn](./itemUseOn.md) - ブロックに対してアイテムを使用したとき

### エンティティインタラクション
- [playerInteractWithEntity](./playerInteractWithEntity.md) - エンティティをインタラクトしたとき
- [entityHitBlock](./entityHitBlock.md) - ブロックを攻撃したとき
- [entityHitEntity](./entityHitEntity.md) - エンティティを攻撃したとき
- [entityHurt](./entityHurt.md) - エンティティがダメージを受けたとき
- [entityDie](./entityDie.md) - エンティティが死亡したとき

### 飛び道具
- [projectileShoot](./projectileShoot.md) - 飛び道具を発射したとき
- [projectileHitBlock](./projectileHitBlock.md) - 飛び道具がブロックに当たったとき
- [projectileHitEntity](./projectileHitEntity.md) - 飛び道具がエンティティに当たったとき

### 環境トリガー
- [pressurePlatePush](./pressurePlatePush.md) - 感圧板を踏んだとき
- [pressurePlatePop](./pressurePlatePop.md) - 感圧板から降りたとき
- [tripWireTrip](./tripWireTrip.md) - トリップワイヤーを踏んだとき

---

## ティックイベント（スコアベース）

### プレイヤーの動き
- [velocity](./velocity.md) - プレイヤーの速度
- [location](./location.md) - プレイヤーの座標
- [rotation](./rotation.md) - プレイヤーの回転角度
- [viewDirection](./viewDirection.md) - プレイヤーの視線方向
- [movementVector](./movementVector.md) - プレイヤーの移動入力

### プレイヤーの状態
- [health](./health.md) - プレイヤーの体力
- [selectedSlotIndex](./selectedSlotIndex.md) - 選択中のホットバースロット

### 経験値
- [level](./level.md) - プレイヤーのレベル
- [totalXp](./totalXp.md) - 総経験値
- [totalXpNeededForNextLevel](./totalXpNeededForNextLevel.md) - 次のレベルまでの必要経験値
- [xpEarnedAtCurrentLevel](./xpEarnedAtCurrentLevel.md) - 現在レベルで獲得した経験値

### 視線先の情報
- [blockFromViewDirection](./blockFromViewDirection.md) - 視線先のブロック
- [entityFromViewDirection](./entityFromViewDirection.md) - 視線先のエンティティ

### システム情報
- [dimension](./dimension.md) - 現在のディメンション
- [timestamp](./timestamp.md) - タイムスタンプ
- [maxRenderDistance](./maxRenderDistance.md) - 最大描画距離
- [memoryTier](./memoryTier.md) - メモリティア

---

## ティックイベント（タグベース）

- [プレイヤー状態タグ](./playerStateTags.md) - プレイヤーの様々な状態を監視してタグを付与/削除

  - 権限: isOp
  - 移動: isFlying, isGliding, isJumping, isClimbing, isFalling, isInWater, isOnGround, isSneaking, isSprinting, isSwimming, isSleeping, isEmoting, isRiding
  - プラットフォーム: isDesktop, isMobile, isConsole
  - グラフィック: isGraphicsSimple, isGraphicsFancy, isGraphicsDeferred, isGraphicsRayTraced

---

## タグとスコアの命名規則

### タグ
- トリガータグ: `capi:{イベント名}` - イベントがトリガーされたときに付与
- 詳細タグ: `{イベント名}:{詳細情報}` - イベントの詳細情報を含むタグ
- 状態タグ: `capi:is_{状態名}` - 状態が真の間付与され続けるタグ

### スコアボード
- 基本スコア: `capi:{イベント名}` - イベントのメイン情報
- 座標スコア: `capi:{イベント名}_x/y/z` - 座標情報
- その他スコア: `capi:{イベント名}_{詳細}` - その他の詳細情報

---

## 注意事項

1. **タグの自動削除**: イベントタグの多くは`addTagWillRemove`メソッドで付与されており、一定時間後に自動的に削除されます。
2. **スコアの倍率**: 一部のスコア（velocity、viewDirectionなど）は精度のために値が倍率で保存されています。
3. **設定による有効化**: 一部のイベントは設定ファイルで有効/無効を切り替えることができます。
4. **プレイヤー検出**: 多くのイベントはプレイヤーのアクションのみを検出し、他のエンティティのアクションは無視されます。

---

## 使用例

複数のイベントを組み合わせた例：

```mcfunction
# 飛行中のプレイヤーが高い場所にいる場合
/execute as @a[tag=capi:fly,scores={capi:location_y=200..}] run say 空高く飛んでいます！

# スニーク中で移動していないプレイヤー
/execute as @a[tag=capi:sneak,scores={capi:velocity_xz=..10}] run say こっそり隠れています

# モバイルでプレイしているプレイヤーがブロックを破壊
/execute as @a[tag=capi:mobile,tag=capi:break] run say モバイルでブロックを破壊しました！
```
