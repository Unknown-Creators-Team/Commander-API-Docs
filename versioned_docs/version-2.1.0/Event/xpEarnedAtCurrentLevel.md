---
title: "xpEarnedAtCurrentLevel"
last_update:
  date: 2025-12-04
  author: Copilot
---

## 説明
プレイヤーが現在のレベルで獲得した経験値を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:xp_earned_at_current_level` | 現在のレベルで獲得した経験値です。 |

## 使用例
現在レベルで多くの経験値を獲得したプレイヤーを検出する例：

```mcfunction
/execute as @a[scores={capi:xp_earned_at_current_level=50..}] run say 現在レベルで多くの経験値を獲得しました！
```
