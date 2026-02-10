---
title: "totalXp"
last_update:
  date: 2025-12-04
  author: Copilot
---

## 説明
プレイヤーが獲得した総経験値を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:total_xp` | プレイヤーが獲得した総経験値です。 |

## 使用例
総経験値が多いプレイヤーを検出する例：

```mcfunction
/execute as @a[scores={capi:total_xp=1000..}] run say 総経験値1000以上です！
```
