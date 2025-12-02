---
title: "message - メッセージフォーム"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**メッセージフォーム** は、2つのボタンで Yes/No を選択させるフォームです。  
確認ダイアログに最適です。

## 構文

```mcfunction
/scriptevent capi:form <パラメータ>
```

## パラメータ

```json
{
    "type": "message",
    "title": "タイトル",
    "body": "本文",
    "btn1": {
        "txt": "上ボタンのテキスト",
        "act": アクション
    },
    "btn2": {
        "text": "下ボタンのテキスト",
        "act": アクション
    }
}
```

| パラメータ | 説明 | 必須 |
|---|---|---|
| `type` | フォームの種類 (`"message"` または `"msg"`) | ✓ |
| `title` | フォームのタイトル | ✓ |
| `body` | フォームの本文 | ✓ |
| `btn1` | 上ボタンの設定 | ✓ |
| `btn2` | 下ボタンの設定 | ✓ |

### type のエイリアス

- `"message"` (推奨)
- `"msg"` (省略形)

### ボタン設定

| プロパティ | 説明 | 必須 | 注意 |
|---|---|---|---|
| `txt` | ボタンのテキスト (btn1) | ✓ | btn1では `txt` |
| `text` | ボタンのテキスト (btn2) | ✓ | btn2では `text` |
| `act` | ボタンが押されたときのアクション | × | - |

:::warning プロパティ名の違い
btn1 では `txt`、btn2 では `text` と、プロパティ名が異なることに注意してください。
:::

## アクションの種類

メッセージフォームでは、アクションフォームと同じアクションが使用できます。

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

### コマンドを実行 (run_command)

```json
{
    "type": "run_command",
    "value": "コマンド"
}
```

**エイリアス**: `"run_command"`, `"run_cmd"`, `"run"`, `"r"`

## 使用例

### シンプルな確認ダイアログ

+++ JSON
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
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=message,title=確認,body=本当に実行しますか？,btn1= {txt=はい,act= {type=run,value=say 実行しました}},btn2= {text=いいえ,act= {type=run,value=say キャンセルしました}}}
```
+++

### 削除確認

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "msg",
    "title": "警告",
    "body": "このアイテムを削除しますか？\n§c※この操作は取り消せません",
    "btn1": {
        "txt": "削除する",
        "act": {
            "type": "run",
            "value": "clear @s diamond"
        }
    },
    "btn2": {
        "text": "キャンセル"
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=msg,title=警告,body=このアイテムを削除しますか？\n§c※この操作は取り消せません,btn1= {txt=削除する,act= {type=run,value=clear @s diamond}},btn2= {text=キャンセル}}
```
+++

### タグの追加/削除

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "message",
    "title": "PvP設定",
    "body": "PvPを有効にしますか？",
    "btn1": {
        "txt": "有効にする",
        "act": {
            "type": "add_tag",
            "value": "pvp_enabled"
        }
    },
    "btn2": {
        "text": "無効にする",
        "act": {
            "type": "remove_tag",
            "value": "pvp_enabled"
        }
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=message,title=PvP設定,body=PvPを有効にしますか？,btn1= {txt=有効にする,act= {type=add_tag,value=pvp_enabled}},btn2= {text=無効にする,act= {type=remove_tag,value=pvp_enabled}}}
```
+++

### スコア設定

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "message",
    "title": "クエスト受注",
    "body": "このクエストを受注しますか？",
    "btn1": {
        "txt": "受注する",
        "act": {
            "type": "set_score",
            "value": {
                "object": "quest_status",
                "value": 1
            }
        }
    },
    "btn2": {
        "text": "断る",
        "act": {
            "type": "ss",
            "value": {
                "object": "quest_status",
                "value": 0
            }
        }
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=message,title=クエスト受注,body=このクエストを受注しますか？,btn1= {txt=受注する,act= {type=set_score,value= {object=quest_status,value= 1}}},btn2= {text=断る,act= {type=ss,value= {object=quest_status,value= 0}}}}
```
+++

### テレポート確認

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "message",
    "title": "テレポート",
    "body": "スポーン地点にテレポートしますか？",
    "btn1": {
        "txt": "はい",
        "act": {
            "type": "r",
            "value": "tp @s 0 64 0"
        }
    },
    "btn2": {
        "text": "いいえ"
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=message,title=テレポート,body=スポーン地点にテレポートしますか？,btn1= {txt=はい,act= {type=r,value=tp @s 0 64 0}},btn2= {text=いいえ}}
```
+++

### マクロと組み合わせ

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "message",
    "title": "ログアウト",
    "body": "<!name>さん、本当にログアウトしますか？",
    "btn1": {
        "txt": "ログアウト",
        "act": {
            "type": "run",
            "value": "kick @s"
        }
    },
    "btn2": {
        "text": "キャンセル"
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=message,title=ログアウト,body=<!name>さん、本当にログアウトしますか？,btn1= {txt=ログアウト,act= {type=run,value=kick @s}},btn2= {text=キャンセル}}
```
+++

::: !ref ../../Macro/Name.md

## 選択結果の取得

ボタンが押されると、`capi:msg_form` スコアに選択されたボタンの番号が設定されます。
- btn1（上ボタン）: `1`
- btn2（下ボタン）: `2`

+++ JSON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {"type":"message","title":"選択","body":"選択してください","btn1":{"txt":"オプション1"},"btn2":{"text":"オプション2"}}

# 選択結果を確認
/execute as @a[scores={capi:msg_form=1}] run say オプション1を選択しました
/execute as @a[scores={capi:msg_form=2}] run say オプション2を選択しました
```
+++ ESON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {type=message,title=選択,body=選択してください,btn1={txt=オプション1},btn2={text=オプション2}}

# 選択結果を確認
/execute as @a[scores={capi:msg_form=1}] run say オプション1を選択しました
/execute as @a[scores={capi:msg_form=2}] run say オプション2を選択しました
```
+++

## 注意事項

- プレイヤーのみが実行できます
- `type` は `"message"` または `"msg"` を指定します
- `title`、`body`、`btn1`、`btn2` は必須です
- btn1 では `txt`、btn2 では `text` とプロパティ名が異なります
- アクションは省略可能です（省略した場合、ボタンを押してもアクションは実行されません）
- フォームが完了すると `form:<タイトル>` タグが付与されます（自動削除）

## 関連項目

- [action](./action.md) - アクションフォーム
- [modal](./modal.md) - モーダルフォーム
- [../form.md](./form.md) - フォームの概要
