---
title: "At マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**At マクロ** は、`@` 記号を挿入するマクロです。  
マークダウンやコマンドで `@` 記号がセレクターとして解釈されるのを防ぐために使用します。

## 構文

```plaintext
<!at>
```

## 戻り値

`@` 記号

## 使用例

### メンション風の表示

プレイヤー名の前に `@` を付けてメンション風に表示します。

```mcfunction
/execute as @a run scriptevent capi:tell <!at><!name> さんが参加しました！
```

**出力例**:
```
@Notch さんが参加しました！
```

### SNS風のハンドル表示

Twitter/X風のユーザーハンドルを表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar ユーザー: <!at><!name>
```

**出力例**:
```
ユーザー: @Notch
```

### メールアドレス風の表示

メールアドレス風のテキストを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell お問い合わせ: support<!at>example.com
```

**出力例**:
```
お問い合わせ: support@example.com
```

## なぜ At マクロが必要なのか？

Minecraftのコマンドでは、`@` 記号はセレクター（`@a`, `@p`, `@s` など）の開始として解釈されます。  
そのため、純粋な `@` 記号をテキストとして使用したい場合に At マクロが役立ちます。

```mcfunction
# これは動作しない可能性があります
/execute as @a run scriptevent capi:tell @Notch

# At マクロを使用すると正しく動作します
/execute as @a run scriptevent capi:tell <!at>Notch
```
