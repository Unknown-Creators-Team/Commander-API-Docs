---
title: ボタンプッシュイベント
last_update:
  date: 2024-07-21
  author: arutaka1220
---

ボタンをクリックするとこのイベントがトリガーされます。

## タグ
タグ | 説明
--- | ---
`Capi:pushed` | このイベントがトリガーされるとプレイヤーに追加されます。

## スコア
オブジェクト | 説明
--- | ---
`Capi:buttonXPos` | クリックしたボタンのX座標が入ります。
`Capi:buttonYPos` | クリックしたボタンのY座標が入ります。
`Capi:buttonZPos` | クリックしたボタンのZ座標が入ります。

## 使用例
### 0, 0, 0のボタンをクリックしたらdiamondをgiveする(反復実行)
```
/give @a[tag="Capi:pushed", scores={Capi:buttonXPos=0, Capi:buttonYPos=0, Capi:buttonZPos=0}] diamond
/tag @a[tag="Capi:pushed"] remove "Capi:pushed"
```