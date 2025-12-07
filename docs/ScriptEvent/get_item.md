---
title: "get_item"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**get_item** は、プレイヤーのインベントリからアイテム情報を取得する ScriptEvent です。  
取得した情報はタグとして保存され、他のスクリプトで利用できます。

## 構文

```mcfunction
/scriptevent capi:get_item <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{slot=スロット番号,minimize=true}
```
+++ JSON
```json
{
    "slot": スロット番号,
    "minimize": true/false
}
```
+++

| パラメータ | 説明 | デフォルト |
|---|---|---|
| `slot` | 取得するスロット番号（0-35） | 選択中のスロット |
| `minimize` | JSONを最小化するか | true |

## タグの説明

アイテム情報は以下の形式でプレイヤーにタグとして保存されます：

```
capi:get_item.<プロパティ名>:<値>
```

### 保存されるタグの例

取得したアイテム情報は複数のタグとして保存されます：

| タグ | 説明 | 例 |
|---|---|---|
| `capi:get_item.id:<アイテムID>` | アイテムのID | `capi:get_item.id:diamond_sword` |
| `capi:get_item.amount:<個数>` | アイテムの個数 | `capi:get_item.amount:5` |
| `capi:get_item.data:<データ値>` | アイテムのデータ値 | `capi:get_item.data:0` |
| `capi:get_item.nameTag:<名前>` | アイテムの名前（カスタム名） | `capi:get_item.nameTag:§l最強の剣` |

これらのタグは、[Tag マクロ](../Macro/Tag.md) を使用して他のコマンドで参照できます：

```mcfunction
/execute as @a run scriptevent capi:tell あなたは <!tag=capi:get_item.id> を持っています
```

::: !ref ../Macro/Tag.md

## 使用例

### 選択中のアイテムを取得

現在選択しているアイテムの情報を取得します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:get_item {}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:get_item {}
```
+++

### 特定のスロットのアイテムを取得

スロット0（ホットバー左端）のアイテムを取得します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:get_item {slot=0}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:get_item {"slot": 0}
```
+++

### 完全な情報を取得

最小化せずに完全なアイテム情報を取得します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:get_item {slot=0,minimize=false}
```
+++ JSON
```mcfunction
/execute as @a[tag=capi:get_item] run scriptevent capi:tell あなたは <!tag=get_item.type_id> を持っています
```
+++

### 取得した情報を使用

スロット0にあるアイテムを取得し、アイテム情報をタグから読み取ります。

+++ ESON
```mcfunction
# アイテム情報を取得
/execute as @a run scriptevent capi:get_item {slot=0}

# 遅延3tick

# タグが付いているかチェック
/execute as @a[tag=capi:get_item] run scriptevent capi:tell あなたは <!tag=get_item.type_id> を持っています
```
+++ JSON
```mcfunction
# アイテム情報を取得
/execute as @a run scriptevent capi:get_item {"slot": 0}

# 遅延3tick

# タグが付いているかチェック
/execute as @a[tag=capi:get_item] run scriptevent capi:tell あなたは <!tag=get_item.type_id> を持っています
```
+++

### スロット番号の参考

| スロット | 場所 |
|---|---|
| 0-8 | ホットバー |
| 9-35 | メインインベントリ |

## 注意事項

- プレイヤーのみが実行できます
- 指定したスロットにアイテムがない場合、エラーが発生します
- 取得した情報は `capi:get_item` で始まるタグとして保存されます
- 前回取得した情報のタグは自動的に削除されます
- `minimize` を true にすると、不要な情報が省略されます

## 関連項目

- [set_item](./set_item.md) - アイテムを設定
- [set_slot](./set_slot.md) - スロットを設定
