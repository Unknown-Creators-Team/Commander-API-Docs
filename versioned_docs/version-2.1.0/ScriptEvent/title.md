---
title: "title"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**title** は、プレイヤーの画面にタイトルを表示する ScriptEvent です。  
タイトルとサブタイトルを表示し、表示時間を細かく設定できます。

## 構文

```mcfunction
/scriptevent capi:title <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{title=タイトル,subtitle=サブタイトル,options={in=フェードイン時間,out=フェードアウト時間,stay=表示時間}}
```
+++ JSON
```json
{
    "title": "タイトル",
    "subtitle": "サブタイトル",
    "options": {
        "in": フェードイン時間,
        "out": フェードアウト時間,
        "stay": 表示時間
    }
}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `title` | 表示するタイトル | ✓ |
| `subtitle` | 表示するサブタイトル | × |
| `options` | 表示オプション | × |

### options パラメータ

| オプション | 説明 | 必須（optionsを使う場合） |
|---|---|---|
| `in` | フェードイン時間（tick） | ✓ |
| `out` | フェードアウト時間（tick） | ✓ |
| `stay` | 表示時間（tick） | ✓ |

:::tip tick について
1秒 = 20 tick です。例えば、2秒間表示したい場合は 40 を指定します。
:::


## 使用例

### シンプルなタイトル

タイトルのみを表示します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=Welcome!}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {"title": "Welcome!"}
```
+++

### タイトルとサブタイトル

タイトルとサブタイトルを表示します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=§6ゲーム開始,subtitle=§7頑張ってください！}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {
    "title": "§6ゲーム開始",
    "subtitle": "§7頑張ってください！"
}
```
+++

### 表示時間を指定

フェードイン、表示、フェードアウトの時間を指定します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=§cカウントダウン,options= {in= 10,out= 10,stay= 40}}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {
    "title": "§cカウントダウン",
    "options": {
        "in": 10,
        "out": 10,
        "stay": 40
    }
}
```
+++

### 長時間の表示

5秒間表示します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=§6重要なお知らせ,subtitle=§7イベントが開始されました,options= {in= 20,out= 20,stay= 100}}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {
    "title": "§6重要なお知らせ",
    "subtitle": "§7イベントが開始されました",
    "options": {
        "in": 20,
        "out": 20,
        "stay": 100
    }
}
```
+++

### 素早い表示

素早くフェードイン・アウトします。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=§c警告!,options= {in= 5,out= 5,stay= 20}}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {
    "title": "§c警告!",
    "options": {
        "in": 5,
        "out": 5,
        "stay": 20
    }
}
```
+++

### プレイヤー名を含むタイトル

マクロを使用してプレイヤー名を含めます。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=ようこそ,subtitle=<!name>さん}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {
    "title": "ようこそ",
    "subtitle": "<!name>さん"
}
```
+++

::: !ref ../Macro/Name.md

### スコアを含むタイトル

スコアを表示します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=§6レベルアップ!,subtitle=レベル <!score=capi:level>}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {
    "title": "§6レベルアップ!",
    "subtitle": "レベル <!score=player_level>"
}
```
+++

::: !ref ../Macro/Score.md

### カウントダウン表示

カウントダウンを表示します（繰り返し実行が必要）。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=§c3}
# 1秒待機
/execute as @a run scriptevent capi:title {title=§c2}
# 1秒待機
/execute as @a run scriptevent capi:title {title=§c1}
# 1秒待機
/execute as @a run scriptevent capi:title {title=§aスタート!}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {"title": "§c3"}
# 1秒待機
/execute as @a run scriptevent capi:title {"title": "§c2"}
# 1秒待機
/execute as @a run scriptevent capi:title {"title": "§c1"}
# 1秒待機
/execute as @a run scriptevent capi:title {"title": "§aスタート!"}
```
+++

### ゲーム終了の表示

ゲーム終了時に表示します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=§6ゲーム終了,subtitle=§7お疲れ様でした,options={in=20,out=40,stay=60}}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {
    "title": "§6ゲーム終了",
    "subtitle": "§7お疲れ様でした",
    "options": {
        "in": 20,
        "out": 40,
        "stay": 60
    }
}
```
+++

### 勝利の表示

勝者を表示します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:title {title=§6§l勝利!,subtitle=<!name>の勝利です！,options={in=10,out=20,stay=80}}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:title {
    "title": "§6§l勝利!",
    "subtitle": "<!name>の勝利です！",
    "options": {
        "in": 10,
        "out": 20,
        "stay": 80
    }
}
```
+++

::: !ref ../Macro/Name.md

## 注意事項

- プレイヤーのみが実行できます
- `title` パラメータは必須です
- `options` を指定する場合、`in`、`out`、`stay` の全てが必須です
- 時間は tick 単位で指定します（1秒 = 20 tick）
- マクロを使用して動的にタイトルを生成できます

## 関連項目

- [actionbar](./actionbar.md) - アクションバーにメッセージを表示
- [tell](./tell.md) - プレイヤーにメッセージを送信
