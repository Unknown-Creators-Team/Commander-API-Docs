---
title: "health"
last_update:
  date: 2025-12-23
  author: FMmikankun5009
---

## 概要

**health** は、プレイヤーの最大体力を設定する ScriptEvent です。  
数値を指定することで、プレイヤーの最大体力を変更できます。

:::warning
この機能を使用するには、Commander API Extension が必要です。

::: !ref ../Extension/Commander-API-Extension.md

:::

## 構文

```mcfunction
/scriptevent capi:health <パラメータ>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `最大体力` | 設定するサイズ（数値） |

:::info 数値は正規化されます
サイズは任意の数を指定できます。
内部で1以上200以下までに正規化されます。
:::


## 使用例

### 最大体力を2倍に設定に設定

プレイヤーの最大体力を40に設定します。

```mcfunction
/execute as @a run scriptevent capi:health 40
```

### 元の最大体力に設定

プレイヤーの最大体力を20にし、元の最大体力に設定します。

```mcfunction
/execute as @a run scriptevent capi:health 20
```

### スコアをもとにサイズ設定

スコアの値に応じて最大体力を設定します。

```mcfunction
/execute as @a run scriptevent capi:health <!score=player_health>
```