---
title: "modal - モーダルフォーム"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**モーダルフォーム** は、テキスト入力、スライダー、ドロップダウン、トグルなどの要素を含むフォームです。  
設定画面や複雑な入力に最適です。

## 構文

```mcfunction
/scriptevent capi:form <パラメータ>
```

## パラメータ

```json
{
    "type": "modal",
    "title": "タイトル",
    "content": [
        要素の配列
    ]
}
```

| パラメータ | 説明 | 必須 |
|---|---|---|
| `type` | フォームの種類 (`"modal"` または `"mdl"`) | ✓ |
| `title` | フォームのタイトル | ✓ |
| `content` | フォーム要素の配列 | ✓ |

### type のエイリアス

- `"modal"` (推奨)
- `"mdl"` (省略形)

## フォーム要素

モーダルフォームでは、4種類の要素が使用できます。

### 1. ドロップダウン (dropdown)

選択肢から1つを選択します。

```json
{
    "type": "dropdown",
    "label": "ラベル",
    "options": ["選択肢1", "選択肢2", "選択肢3"],
    "default": 0,
    "action": "スコア名"
}
```

| プロパティ | 説明 | 必須 |
|---|---|---|
| `type` | `"dropdown"` または `"dd"` | ✓ |
| `label` | 表示ラベル | ✓ |
| `options` | 選択肢の配列 | ✓ |
| `default` | デフォルトで選択されるインデックス（0から開始） | × |
| `action` | 結果を保存するスコア名 | ✓ |

**エイリアス**: `"dropdown"`, `"dd"`

**結果**: 選択されたインデックス（0から開始）がスコアとして保存されます。

### 2. スライダー (slider)

数値を範囲内で選択します。

```json
{
    "type": "slider",
    "label": "ラベル",
    "min": 0,
    "max": 100,
    "step": 1,
    "default": 50,
    "action": "スコア名"
}
```

| プロパティ | 説明 | 必須 |
|---|---|---|
| `type` | `"slider"` または `"s"` | ✓ |
| `label` | 表示ラベル | ✓ |
| `min` | 最小値 | ✓ |
| `max` | 最大値 | ✓ |
| `step` | ステップ値 | ✓ |
| `default` | デフォルト値 | × |
| `action` | 結果を保存するスコア名 | ✓ |

**エイリアス**: `"slider"`, `"s"`

**結果**: 選択された値がスコアとして保存されます。

### 3. テキストフィールド (textField)

テキストを入力します。

```json
{
    "type": "textField",
    "label": "ラベル",
    "placeholder": "プレースホルダー",
    "default": "デフォルト値",
    "action": "タグ名"
}
```

| プロパティ | 説明 | 必須 |
|---|---|---|
| `type` | `"textField"` または `"tf"` | ✓ |
| `label` | 表示ラベル | ✓ |
| `placeholder` | プレースホルダーテキスト | ✓ |
| `default` | デフォルト値 | × |
| `action` | 結果を保存するタグ名のプレフィックス | ✓ |

**エイリアス**: `"textField"`, `"tf"`

**結果**: `<action>:<入力値>` 形式のタグが付与されます（自動削除）。

### 4. トグル (toggle)

ON/OFF を切り替えます。

```json
{
    "type": "toggle",
    "label": "ラベル",
    "default": false,
    "action": "スコア名"
}
```

| プロパティ | 説明 | 必須 |
|---|---|---|
| `type` | `"toggle"` または `"t"` | ✓ |
| `label` | 表示ラベル | ✓ |
| `default` | デフォルト値 (true/false) | × |
| `action` | 結果を保存するスコア名 | ✓ |

**エイリアス**: `"toggle"`, `"t"`

**結果**: ONの場合は `1`、OFFの場合は `0` がスコアとして保存されます。

## 使用例

### 基本的な設定画面

+++ JSON
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
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=modal,title=設定,content= [{type=dropdown,label=難易度,options= ["簡単","普通","難しい"],default= 1,action=difficulty},{type=slider,label=音量,min= 0,max= 100,step= 10,default= 50,action=volume},{type=toggle,label=PvP有効,default= false,action=pvp_enabled}]}
```
+++

### エイリアスを使用した例

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "mdl",
    "title": "設定",
    "content": [
        {
            "type": "dd",
            "label": "チーム",
            "options": ["レッド", "ブルー", "グリーン"],
            "action": "team_selection"
        },
        {
            "type": "s",
            "label": "レベル",
            "min": 1,
            "max": 10,
            "step": 1,
            "default": 5,
            "action": "player_level"
        },
        {
            "type": "tf",
            "label": "プレイヤー名",
            "placeholder": "名前を入力",
            "action": "player_name"
        },
        {
            "type": "t",
            "label": "通知を受け取る",
            "default": true,
            "action": "notifications"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=mdl,title=設定,content= [{type=dd,label=チーム,options= ["レッド","ブルー","グリーン"],action=team_selection},{type=s,label=レベル,min= 1,max= 10,step= 1,default= 5,action=player_level},{type=tf,label=プレイヤー名,placeholder=名前を入力,action=player_name},{type=t,label=通知を受け取る,default= true,action=notifications}]}
```
+++

### ゲーム設定画面

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "modal",
    "title": "ゲーム設定",
    "content": [
        {
            "type": "dropdown",
            "label": "ゲームモード",
            "options": ["サバイバル", "クリエイティブ", "アドベンチャー"],
            "action": "gamemode_selection"
        },
        {
            "type": "slider",
            "label": "時間",
            "min": 0,
            "max": 24000,
            "step": 1000,
            "default": 6000,
            "action": "time_setting"
        },
        {
            "type": "toggle",
            "label": "天候を有効化",
            "default": true,
            "action": "weather_enabled"
        },
        {
            "type": "toggle",
            "label": "モブスポーンを有効化",
            "default": true,
            "action": "mob_spawn_enabled"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=modal,title=ゲーム設定,content= [{type=dropdown,label=ゲームモード,options= ["サバイバル","クリエイティブ","アドベンチャー"],action=gamemode_selection},{type=slider,label=時間,min= 0,max= 24000,step= 1000,default= 6000,action=time_setting},{type=toggle,label=天候を有効化,default= true,action=weather_enabled},{type=toggle,label=モブスポーンを有効化,default= true,action=mob_spawn_enabled}]}
```
+++

### プレイヤー登録フォーム

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "modal",
    "title": "プレイヤー登録",
    "content": [
        {
            "type": "textField",
            "label": "表示名",
            "placeholder": "表示名を入力してください",
            "action": "display_name"
        },
        {
            "type": "dropdown",
            "label": "年齢層",
            "options": ["10代", "20代", "30代", "40代以上"],
            "action": "age_group"
        },
        {
            "type": "toggle",
            "label": "利用規約に同意する",
            "default": false,
            "action": "terms_accepted"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=modal,title=プレイヤー登録,content= [{type=textField,label=表示名,placeholder=表示名を入力してください,action=display_name},{type=dropdown,label=年齢層,options= ["10代","20代","30代","40代以上"],action=age_group},{type=toggle,label=利用規約に同意する,default= false,action=terms_accepted}]}
```
+++

### クエスト設定

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "modal",
    "title": "クエスト設定",
    "content": [
        {
            "type": "dd",
            "label": "クエストの種類",
            "options": ["収集", "討伐", "探索", "護衛"],
            "default": 0,
            "action": "quest_type"
        },
        {
            "type": "s",
            "label": "目標数",
            "min": 1,
            "max": 100,
            "step": 1,
            "default": 10,
            "action": "quest_target"
        },
        {
            "type": "s",
            "label": "報酬額",
            "min": 100,
            "max": 10000,
            "step": 100,
            "default": 1000,
            "action": "quest_reward"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=modal,title=クエスト設定,content= [{type=dd,label=クエストの種類,options= ["収集","討伐","探索","護衛"],default= 0,action=quest_type},{type=s,label=目標数,min= 1,max= 100,step= 1,default= 10,action=quest_target},{type=s,label=報酬額,min= 100,max= 10000,step= 100,default= 1000,action=quest_reward}]}
```
+++

### ショップカスタマイズ

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "modal",
    "title": "ショップ設定",
    "content": [
        {
            "type": "textField",
            "label": "ショップ名",
            "placeholder": "例: 冒険者の店",
            "action": "shop_name"
        },
        {
            "type": "dropdown",
            "label": "ショップの種類",
            "options": ["武器屋", "防具屋", "道具屋", "食料品店"],
            "action": "shop_type"
        },
        {
            "type": "slider",
            "label": "割引率 (%)",
            "min": 0,
            "max": 50,
            "step": 5,
            "default": 0,
            "action": "discount_rate"
        },
        {
            "type": "toggle",
            "label": "営業中",
            "default": true,
            "action": "shop_open"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=modal,title=ショップ設定,content= [{type=textField,label=ショップ名,placeholder=例=冒険者の店,action=shop_name},{type=dropdown,label=ショップの種類,options= ["武器屋","防具屋","道具屋","食料品店"],action=shop_type},{type=slider,label=割引率 (%),min= 0,max= 50,step= 5,default= 0,action=discount_rate},{type=toggle,label=営業中,default= true,action=shop_open}]}
```
+++

## 結果の取得方法

### ドロップダウン、スライダー、トグル

これらの要素は、`action` で指定したスコア名にデータが保存されます。

+++ JSON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {"type":"modal","title":"設定","content":[{"type":"slider","label":"音量","min":0,"max":100,"step":10,"action":"volume"}]}

# スコアを確認
/execute as @a run say 音量: <!score=volume>
```
+++ ESON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {type=modal,title=設定,content=[{type=slider,label=音量,min=0,max=100,step=10,action=volume}]}

# スコアを確認
/execute as @a run say 音量: <!score=volume>
```
+++

::: !ref ../../Macro/Score.md

### テキストフィールド

テキストフィールドは、`<action>:<入力値>` 形式のタグとして保存されます。

+++ JSON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {"type":"modal","title":"登録","content":[{"type":"textField","label":"名前","placeholder":"名前を入力","action":"player_name"}]}

# タグを確認（例: player_name:Notch というタグが付く）
/execute as @a[tag=player_name:Notch] run say 名前はNotchです
```
+++ ESON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {type=modal,title=登録,content=[{type=textField,label=名前,placeholder=名前を入力,action=player_name}]}

# タグを確認（例: player_name:Notch というタグが付く）
/execute as @a[tag=player_name:Notch] run say 名前はNotchです
```
+++

::: !ref ../../Macro/Tag.md

## 複雑な例

### 完全な設定画面

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "type": "modal",
    "title": "詳細設定",
    "content": [
        {
            "type": "dropdown",
            "label": "言語",
            "options": ["日本語", "English", "中文", "한국어"],
            "default": 0,
            "action": "language"
        },
        {
            "type": "slider",
            "label": "描画距離",
            "min": 2,
            "max": 32,
            "step": 2,
            "default": 16,
            "action": "render_distance"
        },
        {
            "type": "slider",
            "label": "FPS上限",
            "min": 30,
            "max": 144,
            "step": 6,
            "default": 60,
            "action": "max_fps"
        },
        {
            "type": "textField",
            "label": "サーバーアドレス",
            "placeholder": "例: mc.example.com",
            "action": "server_address"
        },
        {
            "type": "toggle",
            "label": "自動保存",
            "default": true,
            "action": "auto_save"
        },
        {
            "type": "toggle",
            "label": "雲を表示",
            "default": true,
            "action": "show_clouds"
        },
        {
            "type": "toggle",
            "label": "パーティクルを表示",
            "default": true,
            "action": "show_particles"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {type=modal,title=詳細設定,content= [{type=dropdown,label=言語,options= ["日本語","English","中文","한국어"],default= 0,action=language},{type=slider,label=描画距離,min= 2,max= 32,step= 2,default= 16,action=render_distance},{type=slider,label=FPS上限,min= 30,max= 144,step= 6,default= 60,action=max_fps},{type=textField,label=サーバーアドレス,placeholder=例=mc.example.com,action=server_address},{type=toggle,label=自動保存,default= true,action=auto_save},{type=toggle,label=雲を表示,default= true,action=show_clouds},{type=toggle,label=パーティクルを表示,default= true,action=show_particles}]}
```
+++

## 注意事項

- プレイヤーのみが実行できます
- `type` は `"modal"` または `"mdl"` を指定します
- `title` と `content` は必須です
- `content` は配列で、複数の要素を含めることができます
- 各要素には `type`、`label`、`action` が必須です
- ドロップダウン、スライダー、トグルの結果はスコアとして保存されます
- テキストフィールドの結果はタグとして保存されます（`<action>:<value>` 形式）
- フォームが完了すると `form:<タイトル>` タグが付与されます（自動削除）
- モーダルフォームは他のフォームと比べて複雑なため、パラメータの設定に注意が必要です

## エイリアス一覧

### フォームタイプ
- `"modal"` → `"mdl"`

### 要素タイプ
- `"dropdown"` → `"dd"`
- `"slider"` → `"s"`
- `"textField"` → `"tf"`
- `"toggle"` → `"t"`

## 関連項目

- [action](./action.md) - アクションフォーム
- [message](./message.md) - メッセージフォーム
- [../form.md](./form.md) - フォームの概要
