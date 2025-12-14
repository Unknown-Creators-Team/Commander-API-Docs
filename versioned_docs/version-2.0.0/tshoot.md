---
title: トラブルシューティング / Troubleshooting
last_update:
  date: 2025-12-09
  author: Nano191225
sidebar_position: 9
---

ここでは、Commander API の使用中に発生する可能性のある一般的な問題とその解決方法について説明します。
ここで紹介するトラブルシューティングの手順を試しても問題が解決しない場合は、[GitHub の Issue](https://github.com/Unknown-Creators-Team/Commander-API/issues)または[Discord サーバー](https://discord.gg/uTqyqtHWG4)でサポートを求めてください。

## Commander API が正しく動作しない

### ベータAPI が無効になっている

`ワールド設定` > `実験的` > `ベータAPI` を有効にしてください。

### Commander API が最新バージョンに更新されていない

マイクラのアップデート直後に発生することがあります。<br />
Commander API が最新のマイクラに対応しているか確認し、必要に応じて最新バージョンに更新してください。

### 一部機能（EventやScriptEvent）が動作しない

### 設定で無効化されている

`/scriptevent capi:config` コマンドで設定メニューを開き、該当するイベントや機能が有効になっていることを確認してください。初期化すると、すべてのイベントが有効になります。

### 設定を移行していない

Commander API のアップデート後に、設定を移行する必要がある場合があります。<br />
`/scriptevent capi:config` コマンドで設定メニューを開き、`設定の移行` ボタンをクリックして設定を移行してください。

::: !ref ./Config/#最新バージョンの設定に移行

### コマンドブロックを無効にしている

```mcfunction
/gamerule commandblocksenabled true
```

### ゲームルールが正しく設定されていない

```mcfunction
/gamerule maxcommandchainlength 65536
```

## マクロが正しく動作しない

### Commander API のScriptEvent内で動かしていない。

以下のようなコマンドでは、マクロは動作しません。

```mcfunction
/title @a actionbar <!name>
```

マクロは、必ず `/scriptevent capi:<イベント名>` の中で使用してください。

```mcfunction
/execute as @a run scriptevent capi:actionbar <!name>
```
```mcfunction
/execute as @p run scriptevent capi:run title @a actionbar <!name>
```

### プレイヤーが基準になっていない

以下のようなコマンドでは、どのプレイヤーの名前を表示すれば良いか分からないため、マクロは動作しません。

```mcfunction
/scriptevent capi:run title @a actionbar <!name>
```

マクロを使用する場合、必ず `/execute as <プレイヤー>` などで、基準となるプレイヤーを指定してください。

```mcfunction
/execute as @a run scriptevent capi:run title @s actionbar <!name>
```

## Scoreマクロが正しく動作しない

### そのプレイヤーのスコアが設定されていない

Scoreマクロは、指定されたスコアが存在しない場合、展開されません。

## Calcマクロが正しく動作しない

### 中身が式でない場合、Calcマクロは展開されません。

例えば、以下のような場合、Calcマクロは展開されません。

```mcfunction
/scriptevent capi:actionbar <!calc=100>
```

Calcマクロを使用する場合、必ず中身が式であることを確認してください。

```mcfunction
/scriptevent capi:actionbar <!calc=50 + 50>
```

## デバッグモードを有効にする

::: !ref ./Config/#基本設定

## テストを実行する

::: !ref ./Config/#基本設定

::: !ref ./ScriptEvent/test