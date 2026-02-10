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
    "typ": "message",
    "ttl": "タイトル",
    "bdy": "本文",
    "bt1": {
        "txt": "上ボタンのテキスト",
        "act": アクション
    },
    "bt2": {
        "txt": "下ボタンのテキスト",
        "act": アクション
    }
}
```

| パラメータ | 説明 | 必須 |
|---|---|---|
| `typ` | フォームの種類 (`"message"` または `"msg"`) | ✓ |
| `ttl` | フォームのタイトル | ✓ |
| `bdy` | フォームの本文 | ✓ |
| `bt1` | 上ボタンの設定 | ✓ |
| `bt2` | 下ボタンの設定 | ✓ |

### typ のエイリアス

- `"message"` (推奨)
- `"msg"` (省略形)

### ボタン設定

| プロパティ | 説明 | 必須 |
|---|---|---|
| `txt` | ボタンのテキスト | ✓ |
| `act` | ボタンが押されたときのアクション | × |

## アクションの種類

ボタンが押されたときに実行されるアクションを指定できます。  
メッセージフォームでは、アクションフォームと同じアクションが使用できます。

利用可能なアクションの詳細については、[フォームアクション](./actions.md)を参照してください。

### 主なアクション

- **add_tag** - タグを追加
- **remove_tag** - タグを削除
- **set_score** - スコアを設定
- **add_score** - スコアを追加
- **run_command** - コマンドを実行

詳細は [actions.md](./actions.md) を参照してください。

## 使用例

### シンプルな確認ダイアログ

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "message",
    "ttl": "確認",
    "bdy": "本当に実行しますか？",
    "bt1": {
        "txt": "はい",
        "act": {
            "typ": "run",
            "val": "say 実行しました"
        }
    },
    "bt2": {
        "txt": "いいえ",
        "act": {
            "typ": "run",
            "val": "say キャンセルしました"
        }
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=message,ttl=確認,bdy=本当に実行しますか？,bt1= {txt=はい,act= {typ=run,val=say 実行しました}},bt2= {txt=いいえ,act= {typ=run,val=say キャンセルしました}}}
```
+++

### 削除確認

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "msg",
    "ttl": "警告",
    "bdy": "このアイテムを削除しますか？\n§c※この操作は取り消せません",
    "bt1": {
        "txt": "削除する",
        "act": {
            "typ": "run",
            "val": "clear @s diamond"
        }
    },
    "bt2": {
        "txt": "キャンセル"
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=msg,ttl=警告,bdy=このアイテムを削除しますか？\n§c※この操作は取り消せません,bt1= {txt=削除する,act= {typ=run,val=clear @s diamond}},bt2= {txt=キャンセル}}
```
+++

### タグの追加/削除

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "message",
    "ttl": "PvP設定",
    "bdy": "PvPを有効にしますか？",
    "bt1": {
        "txt": "有効にする",
        "act": {
            "typ": "add_tag",
            "val": "pvp_enabled"
        }
    },
    "bt2": {
        "txt": "無効にする",
        "act": {
            "typ": "remove_tag",
            "val": "pvp_enabled"
        }
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=message,ttl=PvP設定,bdy=PvPを有効にしますか？,bt1= {txt=有効にする,act= {typ=add_tag,val=pvp_enabled}},bt2= {txt=無効にする,act= {typ=remove_tag,val=pvp_enabled}}}
```
+++

### スコア設定

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "message",
    "ttl": "クエスト受注",
    "bdy": "このクエストを受注しますか？",
    "bt1": {
        "txt": "受注する",
        "act": {
            "typ": "set_score",
            "val": {
                "obj": "quest_status",
                "val": 1
            }
        }
    },
    "bt2": {
        "txt": "断る",
        "act": {
            "typ": "ss",
            "val": {
                "obj": "quest_status",
                "val": 0
            }
        }
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=message,ttl=クエスト受注,bdy=このクエストを受注しますか？,bt1= {txt=受注する,act= {typ=set_score,val= {obj=quest_status,val= 1}}},bt2= {txt=断る,act= {typ=ss,val= {obj=quest_status,val= 0}}}}
```
+++

### テレポート確認

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "message",
    "ttl": "テレポート",
    "bdy": "スポーン地点にテレポートしますか？",
    "bt1": {
        "txt": "はい",
        "act": {
            "typ": "r",
            "val": "tp @s 0 64 0"
        }
    },
    "bt2": {
        "txt": "いいえ"
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=message,ttl=テレポート,bdy=スポーン地点にテレポートしますか？,bt1= {txt=はい,act= {typ=r,val=tp @s 0 64 0}},bt2= {txt=いいえ}}
```
+++

### マクロと組み合わせ

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "message",
    "ttl": "ログアウト",
    "bdy": "<!name>さん、本当にログアウトしますか？",
    "bt1": {
        "txt": "ログアウト",
        "act": {
            "typ": "run",
            "val": "kick @s"
        }
    },
    "bt2": {
        "txt": "キャンセル"
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=message,ttl=ログアウト,bdy=<!name>さん、本当にログアウトしますか？,bt1= {txt=ログアウト,act= {typ=run,val=kick @s}},bt2= {txt=キャンセル}}
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
/execute as @a run scriptevent capi:form {"typ":"message","ttl":"選択","bdy":"選択してください","bt1":{"txt":"オプション1"},"bt2":{"txt":"オプション2"}}

# 選択結果を確認
/execute as @a[scores={capi:msg_form=1}] run say オプション1を選択しました
/execute as @a[scores={capi:msg_form=2}] run say オプション2を選択しました
```
+++ ESON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {typ=message,ttl=選択,bdy=選択してください,bt1={txt=オプション1},bt2={txt=オプション2}}

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
- [actions](./actions.md) - フォームアクションの詳細
- [form](./form.md) - フォームの概要
