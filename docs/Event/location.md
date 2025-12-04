---
title: "location"
last_update:
  date: 2025-12-04
  author: Copilot
---

## 説明
プレイヤーの現在座標を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:location_x` | プレイヤーの現在のX座標です。 |
| `capi:location_y` | プレイヤーの現在のY座標です。 |
| `capi:location_z` | プレイヤーの現在のZ座標です。 |

## 使用例
特定の高さにいるプレイヤーを検出する例：

```mcfunction
/execute as @a[scores={capi:location_y=100..}] run say 高いところにいます！
```
