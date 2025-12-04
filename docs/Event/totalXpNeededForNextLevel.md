---
title: "totalXpNeededForNextLevel（次のレベルまでの必要経験値）"
---

## 説明
プレイヤーが次のレベルに到達するために必要な経験値を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:xp_needed_for_next_level` | 次のレベルに到達するために必要な経験値です。 |

## 使用例
レベルアップ直前のプレイヤーを検出する例：

```mcfunction
/execute as @a[scores={capi:xp_needed_for_next_level=..10}] run say もう少しでレベルアップ！
```
