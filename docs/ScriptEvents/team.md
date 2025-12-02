---
title: "team"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**team** は、プレイヤーのチームを設定する ScriptEvent です。  
プロパティを使用してチーム番号を設定します。

## 構文

```mcfunction
/scriptevent capi:team <チーム番号>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `チーム番号` | 設定するチーム番号（整数） |


## 使用例

### チーム1に設定

プレイヤーをチーム1に設定します。

```mcfunction
/execute as @a run scriptevent capi:team 1
```

### チーム2に設定

プレイヤーをチーム2に設定します。

```mcfunction
/execute as @a[tag=team_red] run scriptevent capi:team 2
```

### チーム0（なし）に設定

プレイヤーのチームをクリアします。

```mcfunction
/execute as @a run scriptevent capi:team 0
```

### スコアに基づいてチーム設定

スコアの値に応じてチームを設定します。

```mcfunction
/execute as @a run scriptevent capi:team <!score=team_number>
```

[!ref Score マクロ](../Macro/Score.md)

### タグに基づいてチーム分け

タグに応じて異なるチームに分けます。

```mcfunction
/execute as @a[tag=red] run scriptevent capi:team 1
/execute as @a[tag=blue] run scriptevent capi:team 2
/execute as @a[tag=green] run scriptevent capi:team 3
```

### ランダムなチーム分け

ランダムにチームを割り当てます。

```mcfunction
/execute as @a run scriptevent capi:team <!calc=random(1,4)>
```

[!ref Calc マクロ](../Macro/Calc.md)

### チーム変更の通知

チームを変更したことを通知します。

```mcfunction
/execute as @a run scriptevent capi:team 1
/execute as @a run scriptevent capi:tell チーム1に参加しました
```

## チーム番号の管理

チーム番号は `capi:team` プロパティに保存されます。

### チーム番号の取得

```mcfunction
# プロパティからチーム番号を読み取る
/execute as @a run testforproperty @s capi:team 1
```

### チームごとにコマンドを実行

特定のチームのプレイヤーにのみコマンドを実行できます（プロパティフィルターを使用）。

## 注意事項

- プレイヤーのみが実行できます
- チーム番号は整数である必要があります
- マクロを使用して動的にチーム番号を設定できます
- チーム番号の意味や用途は実装次第です
- 0 を指定するとチームなし状態になります

## 関連項目

このコマンドはチームベースのゲームモード作成に役立ちます。
