---
title: インタラクションイベント
last_update:
  date: 2024-07-21
  author: Nano
---
**ブロック**または**エンティティ**に右クリックするとこのイベントがトリガーされます。

## タグ
タグ | 説明
--- | ---
`interact:<id>` | 右クリックしたブロックまたはエンティティのIDが入ります。

+++ プレイヤー
以下のタグが追加されます。<br />
#### `interact:minecraft:player`
+++ ゾンビ
以下のタグが追加されます。<br />
#### `interact:minecraft:zombie`
+++ 草ブロック
以下のタグが追加されます。<br />
#### `interact:minecraft:grass`
+++ ダイヤモンドブロック
以下のタグが追加されます。<br />
#### `interact:minecraft:diamond_block`
+++

## スコア
オブジェクト | 説明
--- | ---
`Capi:interactX` | 右クリックしたブロックまたはエンティティのX座標が入ります。
`Capi:interactY` | 右クリックしたブロックまたはエンティティのY座標が入ります。
`Capi:interactZ` | 右クリックしたブロックまたはエンティティのZ座標が入ります。

## 使用例
### 右クリックしたブロック(またはエンティティ)の座標を出力
```
/tag @s add "run:[\"say {score:Capi:interactX}, {score:Capi:interactY}, {score:Capi:interactZ}\"]"
```

!!!danger 今後移行予定のメソッドです！
  このtellメソッドは将来的にscripteventに移行されます。
!!!