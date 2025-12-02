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

+++ JSON
```json
{
    "slot": スロット番号,
    "minimize": true/false
}
```
+++ ESON
```plaintext
{slot=スロット番号,minimize=true}
```
+++

| パラメータ | 説明 | デフォルト |
|---|---|---|
| `slot` | 取得するスロット番号（0-35） | 選択中のスロット |
| `minimize` | JSONを最小化するか | true |

アイテム情報がタグとして保存されます。  
タグ名: `capi:get_item.<プロパティ名>:<値>`

## 使用例

### 選択中のアイテムを取得

現在選択しているアイテムの情報を取得します。

```mcfunction
/execute as @a run scriptevent capi:get_item {}
```

### 特定のスロットのアイテムを取得

スロット0（ホットバー左端）のアイテムを取得します。

```mcfunction
/execute as @a run scriptevent capi:get_item {"slot": 0}
```

### 完全な情報を取得

最小化せずに完全なアイテム情報を取得します。

```mcfunction
/execute as @a run scriptevent capi:get_item {"slot": 0, "minimize": false}
```

### 取得した情報を使用

取得したアイテム情報をタグから読み取ります。

```mcfunction
# アイテム情報を取得
/execute as @a run scriptevent capi:get_item {}

# タグが付いているかチェック
/execute as @a[tag=capi:get_item] run say アイテム情報を取得しました
```

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
