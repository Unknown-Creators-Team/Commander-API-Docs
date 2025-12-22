---
title: "team"
last_update:
  date: 2025-12-23
  author: Nano191225
---

## 概要

**team** は、プレイヤーのチームを設定する ScriptEvent です。  
プロパティを使用してチーム番号を設定します。

:::warning
この機能を使用するには、Commander API Extension が必要です。

::: !ref ../Extension/Commander-API-Extension.md

:::

## 構文

```mcfunction
/scriptevent capi:team <チーム番号>
```

:::info 
チーム番号は0から40までの整数を指定できます。
0はチームなし状態を表します。
統合版のマルチプレイは40人まで同時接続可能なため、40を上限としています。40以上を必要とする場合は、改造するかコミュニティで提案してください。
:::

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

::: !ref ../Macro/Score.md

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
/execute as @a run scriptevent capi:team <!calc=floor(rand*4)+1>
```

::: !ref ../Macro/Calc.md

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
/testfor @a[has_property={capi:team=2..}]
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
