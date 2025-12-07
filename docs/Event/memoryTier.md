---
title: "memoryTier"
last_update:
  date: 2025-12-07
  author: Nano191225
---

## 説明
プレイヤーのクライアントのメモリティア（メモリ性能レベル）を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:memory_tier` | プレイヤーのデバイスのメモリティアです。 |

:::info
取得された数値の意味は [MemoryTier Enumeration](https://learn.microsoft.com/ja-jp/minecraft/creator/scriptapi/minecraft/server/memorytier) を参照してください。
:::

## 使用例
メモリティアに基づいて処理を最適化する例：

```mcfunction
/execute as @a[scores={capi:memory_tier=..1}] run say 低メモリデバイスです
```