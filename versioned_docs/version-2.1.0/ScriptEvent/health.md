---
title: "health"
last_update:
  date: 2026-02-11
  author: Nano191225
---

## 概要

**health** は、プレイヤーの体力を制御する ScriptEvent です。  
正の値で回復、負の値でダメージを与えることができます。

## 構文

```mcfunction
/scriptevent capi:health <パラメータ>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `体力` | 設定する体力値（数値）。正の値で回復、負の値でダメージ |

:::info 体力の単位
体力は半ハート単位で指定します。
- 1 = ハート半分
- 2 = ハート1個分
- -1 = ハート半分のダメージ
:::


## 使用例

### ダメージを与える

プレイヤーにハート5個分のダメージを与えます。

```mcfunction
/scriptevent capi:health -10
```

### プレイヤーを回復する

プレイヤーをハート半分回復します。

```mcfunction
/scriptevent capi:health 1
```

### ハート1個分のダメージ

プレイヤーにハート1個分のダメージを与えます。

```mcfunction
/scriptevent capi:health -2
```

### スコアをもとに体力を制御

スコアの値に応じて体力を制御します。

```mcfunction
/scriptevent capi:health <!score=player_health_change>
```

### 特定の条件下で回復

ネザースターを持つプレイヤーを回復します。

```mcfunction
/execute as @a[hasitem={item=nether_star}] run scriptevent capi:health 5
```

## 使用例

ゲームルール「naturalRegeneration」が無効の場合、自動回復を実装できます。

```mcfunction
# 10ティックごとにプレイヤーを1ハート回復させる
/execute as @a run scoreboard players add @s capi:regen_timer 1
/execute as @a[scores={capi:regen_timer=10}] run scriptevent capi:health 2
/execute as @a[scores={capi:regen_timer=10}] run scoreboard players reset @s capi:regen_timer
```

## 注意事項

- プレイヤーが実行できます
- 体力は0以下にはなりません
- 体力は最大体力を超えません
