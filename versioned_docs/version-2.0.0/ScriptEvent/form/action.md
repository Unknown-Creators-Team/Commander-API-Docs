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
/scriptevent capi:form <パラメータ>
```

## パラメータ

```json
{
    "typ": "action",
    "ttl": "タイトル",
    "bdy": "本文",
    "btn": [
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
| `typ` | フォームの種類 (`"action"` または `"act"`) | × |
| `ttl` | フォームのタイトル | ✓ |
| `bdy` | フォームの本文 | × |
| `btn` | ボタンの配列 | ✓ |

:::tip
typ は省略可能で、省略した場合は自動的に `"action"` とみなされます。
:::

### typ のエイリアス

- `"action"` (推奨)
- `"act"` (省略形)

### btn 配列の要素

| プロパティ | 説明 | 必須 |
|---|---|---|
| `txt` | ボタンのテキスト | ✓ |
| `img` | ボタンのアイコン画像パス | × |
| `act` | ボタンが押されたときのアクション | × |

## アクションの種類

ボタンが押されたときに実行されるアクションを指定できます。  
利用可能なアクションの詳細については、[フォームアクション](./actions.md)を参照してください。

### 主なアクション

- **add_tag** - タグを追加
- **remove_tag** - タグを削除
- **set_score** - スコアを設定
- **add_score** - スコアを追加
- **run_command** - コマンドを実行

詳細は [actions.md](./actions.md) を参照してください。

## 使用例

### シンプルなメニュー

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "action",
    "ttl": "メニュー",
    "bdy": "操作を選択してください",
    "btn": [
        {
            "txt": "体力回復",
            "act": {
                "typ": "run",
                "val": "effect @s regeneration 10 1"
            }
        },
        {
            "txt": "アイテム受取",
            "act": {
                "typ": "run",
                "val": "give @s diamond 1"
            }
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=action,ttl=メニュー,bdy=操作を選択してください,btn=[{txt=体力回復,act={typ=run,val=effect @s regeneration 10 1}},{txt=アイテム受取,act={typ=run,val=give @s diamond 1}}]}
```
+++

### アイコン付きボタン

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "action",
    "ttl": "ショップ",
    "bdy": "購入する商品を選択してください",
    "btn": [
        {
            "txt": "ダイヤモンドの剣",
            "img": "textures/items/diamond_sword",
            "act": {
                "typ": "run",
                "val": "give @s diamond_sword"
            }
        },
        {
            "txt": "金のリンゴ",
            "img": "textures/items/golden_apple",
            "act": {
                "typ": "run",
                "val": "give @s golden_apple"
            }
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=action,ttl=ショップ,bdy=購入する商品を選択してください,btn=[{txt=ダイヤモンドの剣,img=textures/items/diamond_sword,act={typ=run,val=give @s diamond_sword}},{txt=金のリンゴ,img=textures/items/golden_apple,act={typ=run,val=give @s golden_apple}}]}
```
+++

### タグを追加するアクション

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "act",
    "ttl": "チーム選択",
    "bdy": "参加するチームを選択してください",
    "btn": [
        {
            "txt": "レッドチーム",
            "act": {
                "typ": "add_tag",
                "val": "team_red"
            }
        },
        {
            "txt": "ブルーチーム",
            "act": {
                "typ": "at",
                "val": "team_blue"
            }
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=act,ttl=チーム選択,bdy=参加するチームを選択してください,btn=[{txt=レッドチーム,act={typ=add_tag,val=team_red}},{txt=ブルーチーム,act={typ=at,val=team_blue}}]}
```
+++

### スコアを設定するアクション

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "action",
    "ttl": "難易度選択",
    "bdy": "難易度を選択してください",
    "btn": [
        {
            "txt": "簡単",
            "act": {
                "typ": "set_score",
                "val": {
                    "obj": "difficulty",
                    "val": 1
                }
            }
        },
        {
            "txt": "普通",
            "act": {
                "typ": "ss",
                "val": {
                    "obj": "difficulty",
                    "val": 2
                }
            }
        },
        {
            "txt": "難しい",
            "act": {
                "typ": "set_s",
                "val": {
                    "obj": "difficulty",
                    "val": 3
                }
            }
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=action,ttl=難易度選択,bdy=難易度を選択してください,btn=[{txt=簡単,act={typ=set_score,val={obj=difficulty,val=1}}},{txt=普通,act={typ=ss,val={obj=difficulty,val=2}}},{txt=難しい,act={typ=set_s,val={obj=difficulty,val=3}}}]}
```
+++

### 複数のアクションを実行

アクションフォームでは1つのボタンに1つのアクションしか設定できませんが、`run_command` で複数のコマンドを実行できます。

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "action",
    "ttl": "特典受取",
    "bdy": "毎日の特典を受け取りますか？",
    "btn": [
        {
            "txt": "受け取る",
            "act": {
                "typ": "run",
                "val": "give @s diamond 10"
            }
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=action,ttl=特典受取,bdy=毎日の特典を受け取りますか？,btn=[{txt=受け取る,act={typ=run,val=give @s diamond 10}}]}
```
+++

## 選択結果の取得

ボタンが押されると、`capi:act_form` スコアに選択されたボタンのインデックス（1から開始）が設定されます。

+++ JSON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {"typ":"action","ttl":"選択","bdy":"選択してください","btn":[{"txt":"オプション1"},{"txt":"オプション2"},{"txt":"オプション3"}]}

# 選択結果を確認
/execute as @a[scores={capi:act_form=1}] run say オプション1を選択しました
/execute as @a[scores={capi:act_form=2}] run say オプション2を選択しました
/execute as @a[scores={capi:act_form=3}] run say オプション3を選択しました
```
+++ ESON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {typ=action,ttl=選択,bdy=選択してください,btn=[{txt=オプション1},{txt=オプション2},{txt=オプション3}]}

# 選択結果を確認
/execute as @a[scores={capi:act_form=1}] run say オプション1を選択しました
/execute as @a[scores={capi:act_form=2}] run say オプション2を選択しました
/execute as @a[scores={capi:act_form=3}] run say オプション3を選択しました
```
+++

## 注意事項

- プレイヤーのみが実行できます
- `typ` は `"action"` または `"act"` を指定します
- `ttl` と `btn` は必須です
- `btn` 配列内の各ボタンには `txt` が必須です
- ボタンは配列の順番で表示されます
- フォームが完了すると `form:<タイトル>` タグが付与されます（自動削除）

## 関連項目

- [message](./message.md) - メッセージフォーム
- [modal](./modal.md) - モーダルフォーム
- [actions](./actions.md) - フォームアクションの詳細
- [form](./form.md) - フォームの概要
