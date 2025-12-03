---
title: "フォームアクション"
last_update:
  date: 2025-12-03
  author: Nano191225
---

## 概要

フォームのボタンが押されたときに実行されるアクションの種類です。  
アクションフォームとメッセージフォームで使用できます。

## アクションの種類

### タグを追加 (add_tag)

プレイヤーに指定したタグを追加します。

```json
{
    "type": "add_tag",
    "value": "タグ名"
}
```

**エイリアス**: `"add_tag"`, `"add_t"`, `"at"`

**使用例**:
```json
{
    "type": "add_tag",
    "value": "vip"
}
```

### タグを削除 (remove_tag)

プレイヤーから指定したタグを削除します。

```json
{
    "type": "remove_tag",
    "value": "タグ名"
}
```

**エイリアス**: `"remove_tag"`, `"rem_t"`, `"rt"`

**使用例**:
```json
{
    "type": "remove_tag",
    "value": "temp"
}
```

### スコアを設定 (set_score)

指定したスコアボードに値を設定します。

```json
{
    "type": "set_score",
    "value": {
        "object": "スコアボード名",
        "target": "ターゲット",
        "value": 値
    }
}
```

**エイリアス**: `"set_score"`, `"set_s"`, `"ss"`

**パラメータ**:
- `object`: スコアボード名（必須）
- `target`: ターゲットセレクター（省略可、省略時は実行者）
- `value`: 設定する値（必須）

**使用例**:
```json
{
    "type": "set_score",
    "value": {
        "object": "points",
        "value": 100
    }
}
```

### スコアを追加 (add_score)

指定したスコアボードに値を追加します。

```json
{
    "type": "add_score",
    "value": {
        "object": "スコアボード名",
        "target": "ターゲット",
        "value": 値
    }
}
```

**エイリアス**: `"add_score"`, `"add_s"`, `"as"`

**パラメータ**:
- `object`: スコアボード名（必須）
- `target`: ターゲットセレクター（省略可、省略時は実行者）
- `value`: 追加する値（必須）

**使用例**:
```json
{
    "type": "add_score",
    "value": {
        "object": "coins",
        "value": 50
    }
}
```

### コマンドを実行 (run_command)

指定したコマンドを実行します。

```json
{
    "type": "run_command",
    "value": "コマンド"
}
```

**エイリアス**: `"run_command"`, `"run_cmd"`, `"run"`, `"r"`

**使用例**:
```json
{
    "type": "run",
    "value": "give @s diamond 10"
}
```

## 注意事項

- `target` パラメータは省略可能で、省略時は実行者（フォームを開いたプレイヤー）が対象になります
- コマンド実行時、実行者はフォームを開いたプレイヤーです
- アクションはボタンが押されたときにのみ実行されます（フォームをキャンセルした場合は実行されません）

## 関連項目

- [action](./action.md) - アクションフォーム
- [message](./message.md) - メッセージフォーム
- [form](./form.md) - フォームの概要
