---
title: "timestamp（タイムスタンプ）"
---

## 説明
現在のタイムスタンプ（Unix時間/秒）を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:timestamp` | 現在のタイムスタンプ（Unix時間/秒）です。 |

## 使用例
このスコアを使用して、時間に基づいた処理を実行できます。

```mcfunction
# タイムスタンプを利用した時間管理の例
scoreboard players operation @a time_diff = @a capi:timestamp
```
