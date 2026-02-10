---
title: "最初のコマンド / First Command"
last_update:
  date: 2025-12-12
  author: Nano191225
sidebar_position: 2
---

# 最初のコマンドを実行してみよう

Commander API のインストールが完了したら、さっそく基本的なコマンドを試してみましょう。

## ScriptEvent を使ってみる

Commander API の機能は、主に `/scriptevent` コマンドを通じて使用します。

### アクションバーにメッセージを表示

まずは、画面にメッセージを表示してみましょう。

```mcfunction
/scriptevent capi:actionbar こんにちは、Minecraft！
```

画面中央の下部（ホットバーの上）に「こんにちは、Minecraft！」というメッセージが表示されます。

### 自分にメッセージを送信

```mcfunction
/scriptevent capi:tell あなただけに見えるメッセージ
```

このコマンドは、自分だけに見えるメッセージを送信します。

## マクロを使ってみる

マクロを使うと、コマンド内で動的な値を扱えます。

### プレイヤー名を表示

```mcfunction
/scriptevent capi:actionbar こんにちは、<!name>さん！
```

`<!name>` がコマンド実行者の名前に置き換わります。例えば、プレイヤー名が「Steve」なら「こんにちは、Steveさん！」と表示されます。

### 計算を実行

```mcfunction
/scriptevent capi:actionbar 1 + 1 = <!calc=1 + 1>
```

`<!calc=...>` を使うと、コマンド内で計算ができます。結果は「1 + 1 = 2」と表示されます。

### スコアを表示

まず、スコアボードを作成してスコアを設定しましょう。

```mcfunction
/scoreboard objectives add money dummy
/scoreboard players set @s money 1000
```

次に、そのスコアを表示します。

```mcfunction
/scriptevent capi:actionbar あなたの所持金: <!score=money>円
```

「あなたの所持金: 1000円」のように表示されます。

## イベントを使ってみる

Commander API のイベントシステムを使うと、特定の行動を検知できます。

### ボタンが押されたら実行

以下のコマンドを反復で実行しながら、ワールド内のボタンを押してみましょう。

```mcfunction
/execute as @a[tag=capi:button] run say ボタンが押されました！
```

ボタンを押すと、チャットに「ボタンが押されました！」と10回表示されます。

以下のように、コマンド実行後にタグを削除して、1回だけ実行されるようにすることもできます。

```mcfunction
/execute as @a[tag=capi:button] run say ボタンが押されました！
/tag @a remove capi:button
```

:::tip
`capi:button` は、プレイヤーがボタンを押したときに自動的に付与されるタグです。詳細は [buttonPush イベント](../Event/buttonPush.md)を参照してください。
:::

### プレイヤーの体力を常に表示

Commander API は、プレイヤーの体力を自動的にスコアボードに記録します。

```mcfunction
/execute as @a run scriptevent capi:actionbar HP: <!score=capi:health>/20
```

このコマンドをリピートコマンドブロックに入れると、常にアクションバーに体力が表示されます。

:::info
`capi:health` は Commander API が自動的に更新するスコアです。詳細は [health イベント](../Event/health.md)を参照してください。
:::

## 【実践】 簡単なウェルカムメッセージ

プレイヤーがワールドに参加したときにメッセージを表示してみましょう。

```mcfunction
/execute as @a[tag=capi:spawn] run scriptevent capi:tell ようこそ、<!name>さん！
/tag @a remove capi:spawn
```

1行目でウェルカムメッセージを表示し、2行目でタグを削除することで1回だけ実行されるようにします。

これらのコマンドをリピートコマンドブロックに設定すると、新しいプレイヤーが参加するたびに自動的にメッセージが表示されます。

:::tip コマンドブロックの設定
- **種類**: リピート（Repeat）
- **条件**: 無条件（Unconditional）
- **レッドストーン**: 常時実行（Always Active）
:::

## 次のステップ

基本的なコマンドの使い方が理解できたら、Commander API の仕組みをもっと詳しく学びましょう。

- [基本概念](./basic-concepts.md) - イベント、マクロ、ScriptEvent の仕組み
- [イベント一覧](../Event/) - 使用可能なすべてのイベント
- [マクロ一覧](../Macro/) - 使用可能なすべてのマクロ
- [ScriptEvent 一覧](../ScriptEvent/) - 使用可能なすべての拡張コマンド

:::tip
コマンドを試すときは、チャットで練習することをおすすめします。コマンドブロックを使うと、より複雑な仕組みを作れます。
:::

::: !ref ./basic-concepts
