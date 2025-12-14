---
authors:
  - name: arutaka1220
    link: https://twitter.com/arutaka1220
    avatar: /images/arutaka-icon.png
date: 2024-07-21T22:04
description: ブロック設置イベントについて
---

プレイヤーがブロックを設置したときにトリガーされます。

## タグ
タグ | 説明
--- | ---
`Capi:blockPlace` | このイベントがトリガーされるとプレイヤーに追加されます。
`blockPlace` | 設置したブロックのIDが含まれた状態でプレイヤーに追加されます。<br />例: `blockPlace:minecraft:grass`

## スコア
オブジェクト | 説明
--- | ---
`Capi:blockPlaceX` | 設置したブロックのX座標が代入されます。
`Capi:blockPlaceY` | 設置したブロックのY座標が代入されます。
`Capi:blockPlaceZ` | 設置したブロックのZ座標が代入されます。

## 使用例
### 設置したブロックを消去する
```
/tag @a[tag=Capi:blockPlace] add "run:['setblock {score:Capi:blockPlaceX} {score:Capi:blockPlaceY} {score:Capi:blockPlaceZ} air']"
/tag @a remove Capi:blockPlace
```

[!ref score変数](../Variable/score.md)
[!ref runメソッド](../ScriptEvent/run.md)