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
    "typ": "modal",
    "ttl": "タイトル",
    "cnt": [
        要素の配列
    ]
}
```

| パラメータ | 説明 | 必須 |
|---|---|---|
| `typ` | フォームの種類 (`"modal"` または `"mdl"`) | ✓ |
| `ttl` | フォームのタイトル | ✓ |
| `cnt` | フォーム要素の配列 | ✓ |

### type のエイリアス

- `"modal"` (推奨)
- `"mdl"` (省略形)

## フォーム要素

モーダルフォームでは、4種類の要素が使用できます。

### 1. ドロップダウン (dropdown)

選択肢から1つを選択します。

```json
{
    "typ": "dropdown",
    "lbl": "ラベル",
    "opt": ["選択肢1", "選択肢2", "選択肢3"],
    "def": 0,
    "act": "スコア名"
}
```

| プロパティ | 説明 | 必須 |
|---|---|---|
| `typ` | `"dropdown"` または `"dd"` | ✓ |
| `lbl` | 表示ラベル | ✓ |
| `opt` | 選択肢の配列 | ✓ |
| `def` | デフォルトで選択されるインデックス（0から開始） | × |
| `act` | 結果を保存するスコア名 | ✓ |

**エイリアス**: `"dropdown"`, `"dd"`

**結果**: 選択されたインデックス（0から開始）がスコアとして保存されます。

### 2. スライダー (slider)

数値を範囲内で選択します。

```json
{
    "typ": "slider",
    "lbl": "ラベル",
    "min": 0,
    "max": 100,
    "stp": 1,
    "def": 50,
    "act": "スコア名"
}
```

| プロパティ | 説明 | 必須 |
|---|---|---|
| `typ` | `"slider"` または `"s"` | ✓ |
| `lbl` | 表示ラベル | ✓ |
| `min` | 最小値 | ✓ |
| `max` | 最大値 | ✓ |
| `stp` | ステップ値 | ✓ |
| `def` | デフォルト値 | × |
| `act` | 結果を保存するスコア名 | ✓ |

**エイリアス**: `"slider"`, `"s"`

**結果**: 選択された値がスコアとして保存されます。

### 3. テキストフィールド (textField)

テキストを入力します。

```json
{
    "typ": "textField",
    "lbl": "ラベル",
    "plh": "プレースホルダー",
    "def": "デフォルト値",
    "act": "タグ名"
}
```

| プロパティ | 説明 | 必須 |
|---|---|---|
| `typ` | `"textField"` または `"tf"` | ✓ |
| `lbl` | 表示ラベル | ✓ |
| `plh` | プレースホルダーテキスト | ✓ |
| `def` | デフォルト値 | × |
| `act` | 結果を保存するタグ名のプレフィックス | ✓ |

**エイリアス**: `"textField"`, `"tf"`

**結果**: `<act>:<入力値>` 形式のタグが付与されます（自動削除）。

### 4. トグル (toggle)

ON/OFF を切り替えます。

```json
{
    "typ": "toggle",
    "lbl": "ラベル",
    "def": false,
    "act": "スコア名"
}
```

| プロパティ | 説明 | 必須 |
|---|---|---|
| `typ` | `"toggle"` または `"t"` | ✓ |
| `lbl` | 表示ラベル | ✓ |
| `def` | デフォルト値 (true/false) | × |
| `act` | 結果を保存するスコア名 | ✓ |

**エイリアス**: `"toggle"`, `"t"`

**結果**: ONの場合は `1`、OFFの場合は `0` がスコアとして保存されます。

## 使用例

### 基本的な設定画面

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "modal",
    "ttl": "設定",
    "cnt": [
        {
            "typ": "dropdown",
            "lbl": "難易度",
            "opt": ["簡単", "普通", "難しい"],
            "def": 1,
            "act": "difficulty"
        },
        {
            "typ": "slider",
            "lbl": "音量",
            "min": 0,
            "max": 100,
            "stp": 10,
            "def": 50,
            "act": "volume"
        },
        {
            "typ": "toggle",
            "lbl": "PvP有効",
            "def": false,
            "act": "pvp_enabled"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=modal,ttl=設定,cnt= [{typ=dropdown,lbl=難易度,opt= ["簡単","普通","難しい"],def= 1,act=difficulty},{typ=slider,lbl=音量,min= 0,max= 100,stp= 10,def= 50,act=volume},{typ=toggle,lbl=PvP有効,def= false,act=pvp_enabled}]}
```
+++

### エイリアスを使用した例

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "mdl",
    "ttl": "設定",
    "cnt": [
        {
            "typ": "dd",
            "lbl": "チーム",
            "opt": ["レッド", "ブルー", "グリーン"],
            "act": "team_selection"
        },
        {
            "typ": "s",
            "lbl": "レベル",
            "min": 1,
            "max": 10,
            "stp": 1,
            "def": 5,
            "act": "player_level"
        },
        {
            "typ": "tf",
            "lbl": "プレイヤー名",
            "plh": "名前を入力",
            "act": "player_name"
        },
        {
            "typ": "t",
            "lbl": "通知を受け取る",
            "def": true,
            "act": "notifications"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=mdl,ttl=設定,cnt= [{typ=dd,lbl=チーム,opt= ["レッド","ブルー","グリーン"],act=team_selection},{typ=s,lbl=レベル,min= 1,max= 10,stp= 1,def= 5,act=player_level},{typ=tf,lbl=プレイヤー名,plh=名前を入力,act=player_name},{typ=t,lbl=通知を受け取る,def= true,act=notifications}]}
```
+++

### ゲーム設定画面

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "modal",
    "ttl": "ゲーム設定",
    "cnt": [
        {
            "typ": "dropdown",
            "lbl": "ゲームモード",
            "opt": ["サバイバル", "クリエイティブ", "アドベンチャー"],
            "act": "gamemode_selection"
        },
        {
            "typ": "slider",
            "lbl": "時間",
            "min": 0,
            "max": 24000,
            "stp": 1000,
            "def": 6000,
            "act": "time_setting"
        },
        {
            "typ": "toggle",
            "lbl": "天候を有効化",
            "def": true,
            "act": "weather_enabled"
        },
        {
            "typ": "toggle",
            "lbl": "モブスポーンを有効化",
            "def": true,
            "act": "mob_spawn_enabled"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=modal,ttl=ゲーム設定,cnt= [{typ=dropdown,lbl=ゲームモード,opt= ["サバイバル","クリエイティブ","アドベンチャー"],act=gamemode_selection},{typ=slider,lbl=時間,min= 0,max= 24000,stp= 1000,def= 6000,act=time_setting},{typ=toggle,lbl=天候を有効化,def= true,act=weather_enabled},{typ=toggle,lbl=モブスポーンを有効化,def= true,act=mob_spawn_enabled}]}
```
+++

### プレイヤー登録フォーム

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "modal",
    "ttl": "プレイヤー登録",
    "cnt": [
        {
            "typ": "textField",
            "lbl": "表示名",
            "plh": "表示名を入力してください",
            "act": "display_name"
        },
        {
            "typ": "dropdown",
            "lbl": "年齢層",
            "opt": ["10代", "20代", "30代", "40代以上"],
            "act": "age_group"
        },
        {
            "typ": "toggle",
            "lbl": "利用規約に同意する",
            "def": false,
            "act": "terms_accepted"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=modal,ttl=プレイヤー登録,cnt= [{typ=textField,lbl=表示名,plh=表示名を入力してください,act=display_name},{typ=dropdown,lbl=年齢層,opt= ["10代","20代","30代","40代以上"],act=age_group},{typ=toggle,lbl=利用規約に同意する,def= false,act=terms_accepted}]}
```
+++

### クエスト設定

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "modal",
    "ttl": "クエスト設定",
    "cnt": [
        {
            "typ": "dd",
            "lbl": "クエストの種類",
            "opt": ["収集", "討伐", "探索", "護衛"],
            "def": 0,
            "act": "quest_type"
        },
        {
            "typ": "s",
            "lbl": "目標数",
            "min": 1,
            "max": 100,
            "stp": 1,
            "def": 10,
            "act": "quest_target"
        },
        {
            "typ": "s",
            "lbl": "報酬額",
            "min": 100,
            "max": 10000,
            "stp": 100,
            "def": 1000,
            "act": "quest_reward"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=modal,ttl=クエスト設定,cnt= [{typ=dd,lbl=クエストの種類,opt= ["収集","討伐","探索","護衛"],def= 0,act=quest_type},{typ=s,lbl=目標数,min= 1,max= 100,stp= 1,def= 10,act=quest_target},{typ=s,lbl=報酬額,min= 100,max= 10000,stp= 100,def= 1000,act=quest_reward}]}
```
+++

### ショップカスタマイズ

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:form {
    "typ": "modal",
    "ttl": "ショップ設定",
    "cnt": [
        {
            "typ": "textField",
            "lbl": "ショップ名",
            "plh": "例: 冒険者の店",
            "act": "shop_name"
        },
        {
            "typ": "dropdown",
            "lbl": "ショップの種類",
            "opt": ["武器屋", "防具屋", "道具屋", "食料品店"],
            "act": "shop_type"
        },
        {
            "typ": "slider",
            "lbl": "割引率 (%)",
            "min": 0,
            "max": 50,
            "stp": 5,
            "def": 0,
            "act": "discount_rate"
        },
        {
            "typ": "toggle",
            "lbl": "営業中",
            "def": true,
            "act": "shop_open"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=modal,ttl=ショップ設定,cnt= [{typ=textField,lbl=ショップ名,plh=例=冒険者の店,act=shop_name},{typ=dropdown,lbl=ショップの種類,opt= ["武器屋","防具屋","道具屋","食料品店"],act=shop_type},{typ=slider,lbl=割引率 (%),min= 0,max= 50,stp= 5,def= 0,act=discount_rate},{typ=toggle,lbl=営業中,def= true,act=shop_open}]}
```
+++

## 結果の取得方法

### ドロップダウン、スライダー、トグル

これらの要素は、`act` で指定したスコア名にデータが保存されます。

+++ JSON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {"typ":"modal","ttl":"設定","cnt":[{"typ":"slider","lbl":"音量","min":0,"max":100,"stp":10,"act":"volume"}]}

# スコアを確認
/execute as @a run say 音量: <!score=volume>
```
+++ ESON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {typ=modal,ttl=設定,cnt=[{typ=slider,lbl=音量,min=0,max=100,stp=10,act=volume}]}

# スコアを確認
/execute as @a run say 音量: <!score=volume>
```
+++

::: !ref ../../Macro/Score.md

### テキストフィールド

テキストフィールドは、`<act>:<入力値>` 形式のタグとして保存されます。

+++ JSON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {"typ":"modal","ttl":"登録","cnt":[{"typ":"textField","lbl":"名前","plh":"名前を入力","act":"player_name"}]}

# タグを確認（例: player_name:Notch というタグが付く）
/execute as @a[tag=player_name:Notch] run say 名前はNotchです
```
+++ ESON
```mcfunction
# フォームを表示
/execute as @a run scriptevent capi:form {typ=modal,ttl=登録,cnt=[{typ=textField,lbl=名前,plh=名前を入力,act=player_name}]}

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
    "typ": "modal",
    "ttl": "詳細設定",
    "cnt": [
        {
            "typ": "dropdown",
            "lbl": "言語",
            "opt": ["日本語", "English", "中文", "한국어"],
            "def": 0,
            "act": "language"
        },
        {
            "typ": "slider",
            "lbl": "描画距離",
            "min": 2,
            "max": 32,
            "stp": 2,
            "def": 16,
            "act": "render_distance"
        },
        {
            "typ": "slider",
            "lbl": "FPS上限",
            "min": 30,
            "max": 144,
            "stp": 6,
            "def": 60,
            "act": "max_fps"
        },
        {
            "typ": "textField",
            "lbl": "サーバーアドレス",
            "plh": "例: mc.example.com",
            "act": "server_address"
        },
        {
            "typ": "toggle",
            "lbl": "自動保存",
            "def": true,
            "act": "auto_save"
        },
        {
            "typ": "toggle",
            "lbl": "雲を表示",
            "def": true,
            "act": "show_clouds"
        },
        {
            "typ": "toggle",
            "lbl": "パーティクルを表示",
            "def": true,
            "act": "show_particles"
        }
    ]
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:form {typ=modal,ttl=詳細設定,cnt= [{typ=dropdown,lbl=言語,opt= ["日本語","English","中文","한국어"],def= 0,act=language},{typ=slider,lbl=描画距離,min= 2,max= 32,stp= 2,def= 16,act=render_distance},{typ=slider,lbl=FPS上限,min= 30,max= 144,stp= 6,def= 60,act=max_fps},{typ=textField,lbl=サーバーアドレス,plh=例=mc.example.com,act=server_address},{typ=toggle,lbl=自動保存,def= true,act=auto_save},{typ=toggle,lbl=雲を表示,def= true,act=show_clouds},{typ=toggle,lbl=パーティクルを表示,def= true,act=show_particles}]}
```
+++

## 注意事項

- プレイヤーのみが実行できます
- `typ` は `"modal"` または `"mdl"` を指定します
- `ttl` と `cnt` は必須です
- `cnt` は配列で、複数の要素を含めることができます
- 各要素には `typ`、`lbl`、`act` が必須です
- ドロップダウン、スライダー、トグルの結果はスコアとして保存されます
- テキストフィールドの結果はタグとして保存されます（`<act>:<value>` 形式）
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
- [form](./form.md) - フォームの概要
