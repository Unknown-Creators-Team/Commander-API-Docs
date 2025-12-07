---
title: "timestamp"
last_update:
  date: 2025-12-07
  author: Nano191225
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

### タイムスタンプの取得

このスコアを使用して、時間に基づいた処理を実行できます。

```mcfunction
# タイムスタンプを利用した時間管理の例
scoreboard players operation @a time_diff = @a capi:timestamp
```

### TPSの計測

1秒間に何ティック処理が行われたかを計測します。

```mcfunction
/execute if score time tps < @r capi:timestamp run scoreboard players operation tps tps = cnt tps
/execute if score time tps < @r capi:timestamp run scoreboard players set cnt tps 0
/scoreboard players add cnt tps 1
/scoreboard players operation time tps = @r capi:timestamp
```

### CPSの計測

```mcfunction
/execute if score time cps < @r capi:timestamp as @a at @s run /scoreboard players operation @s cps = @s capi:attack
/execute if score time cps < @r capi:timestamp as @a at @s run /scoreboard players set @s capi:attack 0
/scoreboard players operation time cps = @r capi:timestamp

# CPSの表示
/execute as @a run scriptevent capi:actionbar CPS: <!score=cps>
```