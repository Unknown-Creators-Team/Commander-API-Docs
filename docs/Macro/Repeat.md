---
title: "Repeat マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**Repeat マクロ** は、テキストを指定回数繰り返すマクロです。  
同じテキストを複数回表示したい場合に便利です。

## 構文

```plaintext
<!repeat=[テキスト, 回数]>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `テキスト` | 繰り返すテキスト |
| `回数` | 繰り返す回数 |

## 戻り値

指定されたテキストを指定回数繰り返した文字列を返します。

## 使用例

### 基本的な繰り返し

テキストを3回繰り返します。

```mcfunction
/execute as @a run scriptevent capi:tell <!repeat=[Hello!, 3]>
```

**出力例**:
```
Hello!Hello!Hello!
```

### 区切り文字付きの繰り返し

区切り文字を含めて繰り返します。

```mcfunction
/execute as @a run scriptevent capi:tell <!repeat=[★, 5]>
```

**出力例**:
```
★★★★★
```

### 体力バーの作成

スコアに基づいて体力バーを作成します。

```mcfunction
/execute as @a run scriptevent capi:actionbar §c<!repeat=[❤, <!calc=<!score=health>/2>]>
```

**出力例**（health=10の場合）:
```
❤❤❤❤❤
```

### レベル表示

レベルに応じた星を表示します。

```mcfunction
/execute as @a run scriptevent capi:tell レベル: <!repeat=[⭐, <!score=level>]>
```

**出力例**（level=3の場合）:
```
レベル: ⭐⭐⭐
```

### 装飾ライン

装飾用の区切り線を作成します。

```mcfunction
/execute as @a run scriptevent capi:tell <!repeat=[=, 20]>
```

**出力例**:
```
====================
```

### プログレスバー

進捗状況を表示するプログレスバーを作成します。

```mcfunction
/execute as @a run scriptevent capi:actionbar [<!repeat=[■, <!calc=floor(<!score=progress>/10)>]><!repeat=[□, <!calc=10-floor(<!score=progress>/10)>]>] <!score=progress>%
```

**出力例**（progress=50の場合）:
```
[■■■■■□□□□□] 50%
```

:::tip
`floor()` 関数を使用して、進捗値を10で割った結果を整数に切り捨てています。  
これにより、0-100の範囲の進捗値が0-10の範囲に正しく変換されます。
:::

## 活用例

### 評価システム

レビューの星評価を表示します。

```mcfunction
/execute as @a run scriptevent capi:tell 評価: <!repeat=[★, <!score=rating>]><!repeat=[☆, <!calc=5-<!score=rating>>]>
```

**出力例**（rating=3の場合）:
```
評価: ★★★☆☆
```

### ローディング表示

ローディングアニメーション風の表示を作成します。

```mcfunction
/execute as @a run scriptevent capi:actionbar ロード中<!repeat=[., <!calc=<!score=tick>%4>]>
```

### 装飾付きメッセージ

装飾付きのメッセージを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell <!repeat=[✧, 3]> お知らせ <!repeat=[✧, 3]>
```

**出力例**:
```
✧✧✧ お知らせ ✧✧✧
```

### 階段状の表示

段階的に増えるパターンを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell ステップ1: <!repeat=[#, 1]><!nl>ステップ2: <!repeat=[#, 2]><!nl>ステップ3: <!repeat=[#, 3]>
```

**出力例**:
```
ステップ1: #
ステップ2: ##
ステップ3: ###
```
