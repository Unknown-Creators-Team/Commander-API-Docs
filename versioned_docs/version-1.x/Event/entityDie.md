---
title: エンティティ死亡イベント
last_update:
  date: 2024-07-21
  author: arutaka1220
---

以下が発生したときにトリガーされます。
* プレイヤーがプレイヤーを倒す
* プレイヤーがエンティティを倒す
* エンティティがプレイヤーを倒す

## タグ
タグ | 説明
--- | ---
`Capi:kill` | プレイヤーを除くエンティティを倒したときに追加されます。
`Capi:killPlayer` | プレイヤーを倒したときに追加されます。
`Capi:death` | プレイヤー以外が原因で死んだときに追加されます。
`Capi:deathPlayer` | プレイヤーに倒されたときに追加されます。

## スコア
オブジェクト | 説明
--- | ---
`Capi:kill` | プレイヤーを除くエンティティを倒したときに1加算されます。
`Capi:killPlayer` | 破壊したブロックのY座標が代入されます。
`Capi:deathPlayer` | プレイヤーに倒されたときに1加算されます。

## 使用例
### K/Dをtellする。
```
/tag @s add "tell:{calc:{score:Capi:kill} / {score:Capi:death}}"
```
