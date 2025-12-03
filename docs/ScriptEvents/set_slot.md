---
title: "set_slot"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**set_slot** は、プレイヤーの選択中のホットバースロットを変更する ScriptEvent です。  
プレイヤーが持っているアイテムを切り替えます。

## 構文

```mcfunction
/scriptevent capi:set_slot <スロット番号>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `スロット番号` | 選択するスロット（0-8） |

### スロット番号

| スロット | 位置 |
|---|---|
| 0 | ホットバー左端 |
| 1 | 左から2番目 |
| 2 | 左から3番目 |
| 3 | 左から4番目 |
| 4 | 中央 |
| 5 | 右から4番目 |
| 6 | 右から3番目 |
| 7 | 右から2番目 |
| 8 | ホットバー右端 |


## 使用例

### 左端のスロットを選択

ホットバーの左端を選択します。

```mcfunction
/execute as @a run scriptevent capi:set_slot 0
```

### 中央のスロットを選択

ホットバーの中央を選択します。

```mcfunction
/execute as @a run scriptevent capi:set_slot 4
```

### 右端のスロットを選択

ホットバーの右端を選択します。

```mcfunction
/execute as @a run scriptevent capi:set_slot 8
```

### マクロを使用してスロットを選択

スコアに基づいてスロットを選択します。

```mcfunction
/execute as @a run scriptevent capi:set_slot <!score=slot_number>
```

::: !ref ../Macro/Score.md

### 武器スロットに切り替え

特定のスロットに武器を配置している場合、そのスロットに切り替えます。

```mcfunction
# スロット0に剣を配置
/execute as @a run scriptevent capi:set_item {"id": "minecraft:diamond_sword", "slot": 0}

# スロット0を選択
/execute as @a run scriptevent capi:set_slot 0
```

### イベント開始時にスロットをリセット

イベント開始時に全員のスロットを左端に設定します。

```mcfunction
/execute as @a run scriptevent capi:set_slot 0
```

### 条件付きスロット変更

特定の条件でスロットを変更します。

```mcfunction
/execute as @a[tag=combat] run scriptevent capi:set_slot 0
```

### 連続的なスロット変更

複数のスロットを順番に切り替えます。

```mcfunction
/execute as @a run scriptevent capi:set_slot 0
# 待機
/execute as @a run scriptevent capi:set_slot 1
# 待機
/execute as @a run scriptevent capi:set_slot 2
```

## 注意事項

- プレイヤーのみが実行できます
- スロット番号は 0-8 の範囲で指定する必要があります
- 範囲外の値を指定するとエラーが発生します
- マクロを使用する場合、数値が正しく評価されることを確認してください

## 関連項目

- [set_item](./set_item.md) - アイテムを設定
- [get_item](./get_item.md) - アイテム情報を取得
