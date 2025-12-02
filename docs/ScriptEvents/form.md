---
title: "form"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**form** は、プレイヤーにUIフォームを表示する ScriptEvent です。  
3種類のフォーム（アクション、メッセージ、モーダル）を作成でき、インタラクティブな操作が可能です。

## フォームの種類

### アクションフォーム (action)
複数のボタンを表示し、選択させるフォームです。

### メッセージフォーム (message)
2つのボタンで Yes/No を選択させるフォームです。

### モーダルフォーム (modal)
テキスト入力、スライダー、ドロップダウンなどの要素を含むフォームです。

## 構文

```mcfunction
/scriptevent capi:form <JSON形式のパラメータ>
```

## アクションフォーム

```json
{
    "type": "action",
    "title": "タイトル",
    "body": "本文",
    "btns": [
        {
            "txt": "ボタンテキスト",
            "img": "画像パス",
            "act": アクション
        }
    ]
}
```

### 使用例

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "action",
    "title": "メニュー",
    "body": "操作を選択してください",
    "btns": [
        {
            "txt": "体力回復",
            "act": {
                "type": "run",
                "value": "effect @s regeneration 10 1"
            }
        },
        {
            "txt": "アイテム受取",
            "act": {
                "type": "run",
                "value": "give @s diamond 1"
            }
        }
    ]
}
```

## メッセージフォーム

```json
{
    "type": "message",
    "title": "タイトル",
    "body": "本文",
    "btn1": {
        "txt": "上ボタン",
        "act": アクション
    },
    "btn2": {
        "text": "下ボタン",
        "act": アクション
    }
}
```

### 使用例

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "message",
    "title": "確認",
    "body": "本当に実行しますか？",
    "btn1": {
        "txt": "はい",
        "act": {
            "type": "run",
            "value": "say 実行しました"
        }
    },
    "btn2": {
        "text": "いいえ",
        "act": {
            "type": "run",
            "value": "say キャンセルしました"
        }
    }
}
```

## モーダルフォーム

```json
{
    "type": "modal",
    "title": "タイトル",
    "content": [
        {
            "type": "dropdown",
            "label": "ラベル",
            "options": ["選択肢1", "選択肢2"],
            "default": 0,
            "action": "スコア名"
        },
        {
            "type": "slider",
            "label": "ラベル",
            "min": 0,
            "max": 100,
            "step": 1,
            "default": 50,
            "action": "スコア名"
        },
        {
            "type": "textField",
            "label": "ラベル",
            "placeholder": "入力してください",
            "default": "",
            "action": "タグ名"
        },
        {
            "type": "toggle",
            "label": "ラベル",
            "default": false,
            "action": "スコア名"
        }
    ]
}
```

### 使用例

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "modal",
    "title": "設定",
    "content": [
        {
            "type": "dropdown",
            "label": "難易度",
            "options": ["簡単", "普通", "難しい"],
            "default": 1,
            "action": "difficulty"
        },
        {
            "type": "slider",
            "label": "音量",
            "min": 0,
            "max": 100,
            "step": 10,
            "default": 50,
            "action": "volume"
        },
        {
            "type": "toggle",
            "label": "PvP有効",
            "default": false,
            "action": "pvp_enabled"
        }
    ]
}
```

## アクションの種類

### タグを追加 (add_tag)

```json
{
    "type": "add_tag",
    "value": "タグ名"
}
```

### タグを削除 (remove_tag)

```json
{
    "type": "remove_tag",
    "value": "タグ名"
}
```

### スコアを設定 (set_score)

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

### スコアを追加 (add_score)

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

### コマンドを実行 (run_command)

```json
{
    "type": "run_command",
    "value": "コマンド"
}
```

## 完全な使用例

### ショップメニュー

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "action",
    "title": "§6ショップ",
    "body": "購入する商品を選択してください",
    "btns": [
        {
            "txt": "§eダイヤモンドの剣 - 100円",
            "act": {
                "type": "run",
                "value": "scriptevent capi:set_item {\"id\":\"minecraft:diamond_sword\"}"
            }
        },
        {
            "txt": "§b体力回復 - 50円",
            "act": {
                "type": "run",
                "value": "effect @s instant_health 1 1"
            }
        }
    ]
}
```

### 設定画面

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "modal",
    "title": "ゲーム設定",
    "content": [
        {
            "type": "dropdown",
            "label": "チーム",
            "options": ["レッド", "ブルー", "グリーン"],
            "action": "team_selection"
        },
        {
            "type": "textField",
            "label": "プレイヤー名",
            "placeholder": "名前を入力",
            "action": "player_name"
        },
        {
            "type": "toggle",
            "label": "通知を受け取る",
            "default": true,
            "action": "notifications"
        }
    ]
}
```

## フォーム要素の詳細

### Dropdown (ドロップダウン)
- `type`: "dropdown" または "dd"
- `label`: 表示ラベル
- `options`: 選択肢の配列
- `default`: デフォルト選択のインデックス
- `action`: 結果を保存するスコア名

### Slider (スライダー)
- `type`: "slider" または "s"
- `label`: 表示ラベル
- `min`: 最小値
- `max`: 最大値
- `step`: ステップ値
- `default`: デフォルト値
- `action`: 結果を保存するスコア名

### TextField (テキストフィールド)
- `type`: "textField" または "tf"
- `label`: 表示ラベル
- `placeholder`: プレースホルダー
- `default`: デフォルト値
- `action`: 結果を保存するタグ名（`action:値` の形式）

### Toggle (トグル)
- `type`: "toggle" または "t"
- `label`: 表示ラベル
- `default`: デフォルト値（true/false）
- `action`: 結果を保存するスコア名（1 または 0）

## 注意事項

- プレイヤーのみが実行できます
- フォームがキャンセルされた場合、アクションは実行されません
- フォームを閉じると `form:<title>` タグが付きます（自動削除されます）
- アクションフォームの選択結果は `capi:act_form` スコアに保存されます
- メッセージフォームの選択結果は `capi:msg_form` スコアに保存されます（1 = 上ボタン、2 = 下ボタン）
- モーダルフォームの結果は各要素の `action` で指定したスコアまたはタグに保存されます

## 関連項目

- [tell](./tell.md) - プレイヤーにメッセージを送信
- [screen](./screen.md) - 画面にタイトルを表示
