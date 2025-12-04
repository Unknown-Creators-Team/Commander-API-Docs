---
title: "dimension（ディメンション）"
---

## 説明
プレイヤーが現在いるディメンション（次元）を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:dimension` | 現在のディメンションです。（-2: ネザー、-1: オーバーワールド、0: エンド） |

## ディメンション値
- `-2`: ネザー（minecraft:nether）
- `-1`: オーバーワールド（minecraft:overworld）
- `0`: エンド（minecraft:the_end）

## 使用例
ネザーにいるプレイヤーを検出する例：

```mcfunction
execute as @a[scores={capi:dimension=-2}] run say ネザーにいます！
```
