---
authors:
  - name: arutaka1220
    link: https://twitter.com/arutaka1220
    avatar: /images/arutaka-icon.png
date: 2024-07-21T22:04
description: ブロック破壊イベントについて
---

プレイヤーがブロックを破壊したときにトリガーされます。

## タグ
タグ | 説明
--- | ---
`Capi:blockBreak` | このイベントがトリガーされるとプレイヤーに追加されます。
`blockBreak` | 破壊したブロックのIDが含まれた状態でプレイヤーに追加されます。<br />例: `blockBreak:minecraft:grass`

## スコア
オブジェクト | 説明
--- | ---
`Capi:blockBreakX` | 破壊したブロックのX座標が代入されます。
`Capi:blockBreakY` | 破壊したブロックのY座標が代入されます。
`Capi:blockBreakZ` | 破壊したブロックのZ座標が代入されます。

## 使用例
### 破壊したブロックを復元する
```
/tag @a[tag=Capi:blockBreak] add "run:['setblock {score:Capi:blockBreakX} {score:Capi:blockBreakY} {score:Capi:blockBreakZ} {tag:blockBreak}']"
/tag @a remove Capi:blockBreak
```

[!ref score変数](../Variable/score.md)
[!ref runメソッド](../ScriptEvent/run.md)