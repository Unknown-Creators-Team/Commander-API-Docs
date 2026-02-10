---
title: "size"
last_update:
  date: 2025-12-23
  author: FMmikankun5009
---

## 概要

**size** は、プレイヤーの体の大きさを設定する ScriptEvent です。  
数値を指定することで、プレイヤーのサイズを変更できます。

:::warning
この機能を使用するには、Commander API Extension が必要です。

::: !ref ../Extension/Commander-API-Extension.md

:::

:::warning
Commander API Extension バージョン 1.1.0 以降が必要です。
:::

## 構文

```mcfunction
/scriptevent capi:size <パラメータ>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `サイズ` | 設定するサイズ（数値） |

:::info 数値は正規化されます
サイズは任意の数を指定できます。
内部で0以上10以下かつ小数点第2位までに正規化されます。
:::


## 使用例

### サイズを3に設定

プレイヤーの大きさを3に設定します。

```mcfunction
/execute as @a run scriptevent capi:size 3
```

### サイズ0.5に設定

プレイヤーの大きさを0.5に設定します。

```mcfunction
/execute as @a run scriptevent capi:size 0.5
```

### 元のサイズに設定

プレイヤーの大きさを1にし、元の大きさに設定します。

```mcfunction
/execute as @a run scriptevent capi:size 1
```

### スコアをもとにサイズ設定

スコアの値に応じて大きさを設定します。

```mcfunction
/execute as @a run scriptevent capi:size <!score=player_size>
```

## 使用例

スニーク中プレイヤーの大きさを小さくする。
```mcfunction
/execute as @a[tag=capi:sneak] run scriptevent capi:size 0.3
/execute as @a[tag=!capi:sneak] run scriptevent capi:size 1
```