---
title: "attack"
last_update:
  date: 2025-12-23
  author: FMmikankun5009
---

## 概要

**attack** は、プレイヤーの攻撃力を設定する ScriptEvent です。  
数値を指定することで、プレイヤーの攻撃力を変更できます。

:::warning
この機能を使用するには、Commander API Extension が必要です。

::: !ref ../Extension/Commander-API-Extension.md

:::

## 構文

```mcfunction
/scriptevent capi:attack <パラメータ>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `攻撃力` | 設定するサイズ（数値） |

:::info 数値は正規化されます
サイズは任意の数を指定できます。
内部で0以上200以下までに正規化されます。
:::


## 使用例

### 攻撃力を10に設定

プレイヤーの攻撃力を10に設定します。

```mcfunction
/execute as @a run scriptevent capi:attack 10
```

### 元の攻撃力に設定

プレイヤーの攻撃力を1にし、元の攻撃力に設定します。

```mcfunction
/execute as @a run scriptevent capi:attack 1
```

### スコアをもとにサイズ設定

スコアの値に応じて攻撃力を設定します。

```mcfunction
/execute as @a run scriptevent capi:attack <!score=player_attack>
```

## 使用例

飛んでいるプレイヤーの攻撃力を最大にする。
```mcfunction
/execute as @a[tag=capi:fly] run scriptevent capi:attack 200
/execute as @a[tag=!capi:fly] run scriptevent capi:attack 1
```