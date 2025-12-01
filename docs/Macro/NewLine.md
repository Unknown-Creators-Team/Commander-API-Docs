---
title: "NewLine マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**NewLine マクロ** は、テキストに改行を挿入するマクロです。  
通常の改行コード `\n` が使用できない場面で役立ちます。

## 構文

```plaintext
<!nl>
```

## 戻り値

改行文字（`\n`）

## 使用例

### tellメソッドでの使用

複数行のメッセージを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell Hello<!nl>World
```

**出力例**:
```
Hello
World
```

### actionbarでの使用

複数行のアクションバーを表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar ライン1<!nl>ライン2<!nl>ライン3
```

**出力例**:
```
ライン1
ライン2
ライン3
```

### 他のマクロとの組み合わせ

名前とスコアを別の行に表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar <!name><!nl>所持金: <!score=money>円
```

**出力例**:
```
Notch
所持金: 1000円
```

### renameメソッドでの使用

プレイヤー名の下にステータスを表示します。

```mcfunction
/execute as @a run scriptevent capi:rename <!name><!nl>§c HP: <!score=capi:health>
```

**出力例**:
```
Notch
HP: 20
```

:::info Commander APIのスコア
この例では Commander API が提供する [`capi:health`](https://github.com/Unknown-Creators-Team/Commander-API/blob/alpha/src/events/scores.ts) スコアを使用しています。
:::

## 変数からの移行

以前の変数構文からマクロ構文への変更:

| 旧構文（変数） | 新構文（マクロ） |
|---|---|
| `{nl}` | `<!nl>` |

:::tip 移行のポイント
旧構文の `{nl}` は新構文の `<!nl>` に置き換えるだけで動作します。  
機能に変更はありません。
:::
