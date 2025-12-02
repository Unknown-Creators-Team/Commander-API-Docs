---
title: "say"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**say** は、全てのプレイヤーにメッセージを送信する ScriptEvent です。  
ワールド内の全プレイヤーのチャット欄にメッセージを表示します。

## 構文

```mcfunction
/scriptevent capi:say <メッセージ>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `メッセージ` | 送信するメッセージ |

## 戻り値

なし

## 使用例

### サーバーアナウンス

全プレイヤーにアナウンスを送信します。

```mcfunction
/scriptevent capi:say サーバーメンテナンスを5分後に開始します
```

**表示例**:
```
サーバーメンテナンスを5分後に開始します
```

### プレイヤー参加通知

プレイヤーが参加したことを全員に通知します。

```mcfunction
/execute as @a run scriptevent capi:say <!name>さんがゲームに参加しました！
```

**表示例**:
```
Notchさんがゲームに参加しました！
```

::: !ref ../Macro/Name.md

### イベント通知

特定のイベントを全員に通知します。

```mcfunction
/scriptevent capi:say §6[イベント] §fボスが出現しました！
```

**表示例**:
```
[イベント] ボスが出現しました！
```

### カウントダウン

カウントダウンを表示します。

```mcfunction
/scriptevent capi:say §c3秒後に開始します...
```

**表示例**:
```
3秒後に開始します...
```

### スコアボードの通知

スコアボードの値を全員に通知します。

```mcfunction
/execute as @a[scores={kills=10..}] run scriptevent capi:say <!name>が10キルを達成しました！
```

**表示例**:
```
Notchが10キルを達成しました！
```

::: !ref ../Macro/Name.md

### 改行を含むアナウンス

複数行のアナウンスを送信します。

```mcfunction
/scriptevent capi:say §6=== お知らせ ===<!nl>§fイベントが開始されました<!nl>§6===============
```

**表示例**:
```
=== お知らせ ===
イベントが開始されました
===============
```

::: !ref ../Macro/NewLine.md

## 注意事項

- メッセージはワールド内の全プレイヤーに送信されます
- 実行者がプレイヤーでなくても実行できます
- 特定のプレイヤーにのみ送信したい場合は [tell](./tell.md) を使用してください

## 関連項目

- [tell](./tell.md) - プレイヤーにメッセージを送信
- [actionbar](./actionbar.md) - アクションバーにメッセージを表示
