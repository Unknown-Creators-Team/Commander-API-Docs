---
title: "dimension"
last_update:
  date: 2025-12-04
  author: Copilot
---

## 説明
プレイヤーが現在いるディメンション（次元）を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:dimension` | 現在のディメンションです。（-1: ネザー、0: オーバーワールド、1: エンド） |

## ディメンション値
- `-1`: ネザー（minecraft:nether）
- `0`: オーバーワールド（minecraft:overworld）
- `1`: エンド（minecraft:the_end）

## 使用例
ネザーにいるプレイヤーを検出する例：

```mcfunction
/execute as @a[scores={capi:dimension=-1}] run say ネザーにいます！
```
