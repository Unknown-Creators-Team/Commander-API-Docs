---
title: "action - アクションフォーム"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**アクションフォーム** は、複数のボタンを表示し、プレイヤーに選択させるフォームです。  
メニュー画面やオプション選択に最適です。

## 構文

```mcfunction
/scriptevent capi:form <JSON形式のパラメータ>
```

## パラメータ

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

| パラメータ | 説明 | 必須 |
|---|---|---|
| `type` | フォームの種類 (`"action"` または `"act"`) | ✓ |
| `title` | フォームのタイトル | ✓ |
| `body` | フォームの本文 | × |
| `btns` | ボタンの配列 | ✓ |

### type のエイリアス

- `"action"` (推奨)
- `"act"` (省略形)

### btns 配列の要素

| プロパティ | 説明 | 必須 |
|---|---|---|
| `txt` | ボタンのテキスト | ✓ |
| `img` | ボタンのアイコン画像パス | × |
| `act` | ボタンが押されたときのアクション | × |

## アクションの種類

### タグを追加 (add_tag)

```json
{
    "type": "add_tag",
    "value": "タグ名"
}
```

**エイリアス**: `"add_tag"`, `"add_t"`, `"at"`

### タグを削除 (remove_tag)

```json
{
    "type": "remove_tag",
    "value": "タグ名"
}
```

**エイリアス**: `"remove_tag"`, `"rem_t"`, `"rt"`

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

**エイリアス**: `"set_score"`, `"set_s"`, `"ss"`

**注意**: `target` は省略可能で、省略時は実行者が対象になります。

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

**エイリアス**: `"add_score"`, `"add_s"`, `"as"`

**注意**: `target` は省略可能で、省略時は実行者が対象になります。

### コマンドを実行 (run_command)

```json
{
    "type": "run_command",
    "value": "コマンド"
}
```

**エイリアス**: `"run_command"`, `"run_cmd"`, `"run"`, `"r"`

## 使用例

### シンプルなメニュー

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

### アイコン付きボタン

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "action",
    "title": "ショップ",
    "body": "購入する商品を選択してください",
    "btns": [
        {
            "txt": "ダイヤモンドの剣",
            "img": "textures/items/diamond_sword",
            "act": {
                "type": "run",
                "value": "give @s diamond_sword"
            }
        },
        {
            "txt": "金のリンゴ",
            "img": "textures/items/golden_apple",
            "act": {
                "type": "run",
                "value": "give @s golden_apple"
            }
        }
    ]
}
```

### タグを追加するアクション

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "act",
    "title": "チーム選択",
    "body": "参加するチームを選択してください",
    "btns": [
        {
            "txt": "レッドチーム",
            "act": {
                "type": "add_tag",
                "value": "team_red"
            }
        },
        {
            "txt": "ブルーチーム",
            "act": {
                "type": "at",
                "value": "team_blue"
            }
        }
    ]
}
```

### スコアを設定するアクション

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "action",
    "title": "難易度選択",
    "body": "難易度を選択してください",
    "btns": [
        {
            "txt": "簡単",
            "act": {
                "type": "set_score",
                "value": {
                    "object": "difficulty",
                    "value": 1
                }
            }
        },
        {
            "txt": "普通",
            "act": {
                "type": "ss",
                "value": {
                    "object": "difficulty",
                    "value": 2
                }
            }
        },
        {
            "txt": "難しい",
            "act": {
                "type": "set_s",
                "value": {
                    "object": "difficulty",
                    "value": 3
                }
            }
        }
    ]
}
```

### 複数のアクションを実行

アクションフォームでは1つのボタンに1つのアクションしか設定できませんが、`run_command` で複数のコマンドを実行できます。

```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "action",
    "title": "特典受取",
    "body": "毎日の特典を受け取りますか？",
    "btns": [
        {
            "txt": "受け取る",
            "act": {
                "type": "run",
                "value": "give @s diamond 10"
            }
        }
    ]
}
```

## 選択結果の取得

ボタンが押されると、`capi:act_form` スコアに選択されたボタンのインデックス（1から開始）が設定されます。

```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {"type":"action","title":"選択","body":"選択してください","btns":[{"txt":"オプション1"},{"txt":"オプション2"},{"txt":"オプション3"}]}

# 選択結果を確認
/execute as @a[scores={capi:act_form=1}] run say オプション1を選択しました
/execute as @a[scores={capi:act_form=2}] run say オプション2を選択しました
/execute as @a[scores={capi:act_form=3}] run say オプション3を選択しました
```

## 注意事項

- プレイヤーのみが実行できます
- `type` は `"action"` または `"act"` を指定します
- `title` と `btns` は必須です
- `btns` 配列内の各ボタンには `txt` が必須です
- ボタンは配列の順番で表示されます
- フォームが完了すると `form:<タイトル>` タグが付与されます（自動削除）

## 関連項目

- [message](./message.md) - メッセージフォーム
- [modal](./modal.md) - モーダルフォーム
- [../form.md](./form.md) - フォームの概要
