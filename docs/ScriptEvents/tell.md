---
title: "tell"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**tell** は、プレイヤーにチャットメッセージを送信する ScriptEvent です。  
実行者のチャット欄にメッセージを表示します。

## 構文

```mcfunction
/scriptevent capi:tell <メッセージ>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `メッセージ` | 送信するメッセージ |

## 戻り値

なし

## 使用例

### シンプルなメッセージ

プレイヤーにメッセージを送信します。

```mcfunction
/execute as @a run scriptevent capi:tell ゲームへようこそ！
```

**表示例**:
```
ゲームへようこそ！
```

### プレイヤー名を含むメッセージ

プレイヤー名を含んだメッセージを送信します。

```mcfunction
/execute as @a run scriptevent capi:tell こんにちは、<!name>さん！
```

**表示例**:
```
こんにちは、Notchさん！
```

::: !ref ../Macro/Name.md

### スコアの通知

プレイヤーのスコアを通知します。

```mcfunction
/execute as @a run scriptevent capi:tell あなたの所持金は<!score=money>円です
```

**表示例**:
```
あなたの所持金は1000円です
```

::: !ref ../Macro/Score.md

### 条件付きメッセージ

特定の条件でメッセージを送信します。

```mcfunction
/execute as @a run scriptevent capi:tell <!if=score:capi:health<10>§c警告: 体力が低下しています！<!endif>
```

**表示例** (体力が10未満の場合):
```
警告: 体力が低下しています！
```

::: !ref ../Macro/If.md

### 計算結果の表示

計算結果を含むメッセージを送信します。

```mcfunction
/execute as @a run scriptevent capi:tell 合計ダメージ: <!calc=<!score=attack>*<!score=multiplier>>
```

**表示例**:
```
合計ダメージ: 150
```

::: !ref ../Macro/Calc.md

### 複数行のメッセージ

改行を含むメッセージを送信します。

```mcfunction
/execute as @a run scriptevent capi:tell ステータス:<!nl>HP: <!score=capi:health><!nl>LV: <!score=capi:level>
```

**表示例**:
```
ステータス:
HP: 20
LV: 42
```

::: !ref ../Macro/NewLine.md

### At記号を含むメッセージ

メンション風のメッセージを送信します。

```mcfunction
/execute as @a run scriptevent capi:tell <!at><!name> さんが参加しました！
```

**表示例**:
```
@Notch さんが参加しました！
```

::: !ref ../Macro/At.md

## 注意事項

- プレイヤーのみが実行できます（エンティティやブロックからは実行できません）
- メッセージは実行者のチャット欄にのみ表示されます
- 全体に送信したい場合は [say](./say.md) を使用してください

## 関連項目

- [say](./say.md) - 全体にメッセージを送信
- [actionbar](./actionbar.md) - アクションバーにメッセージを表示
