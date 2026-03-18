---
title: "Str マクロ"
last_update:
  date: 2026-03-19
  author: Nano191225
---

## 概要

**Str マクロ** は、文字列に対して様々な操作を行うマクロです。  
文字の取得・結合・検索・変換など、18種類の操作をサポートしています。

## 構文

```plaintext
<!str=[文字列, 操作名, 引数...]>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `文字列` | 操作対象の文字列 |
| `操作名` | 実行する操作の名前 |
| `引数...` | 操作によって異なる追加の引数 |

## サポートする操作一覧

| 操作名 | 説明 |
|---|---|
| [`at`](#at) | 指定インデックスの文字を取得 |
| [`concat`](#concat) | 文字列を結合 |
| [`starts_with`](#starts_with) | 指定文字列で始まるか判定 |
| [`ends_with`](#ends_with) | 指定文字列で終わるか判定 |
| [`includes`](#includes) | 指定文字列が含まれるか判定 |
| [`index_of`](#index_of) | 指定文字列が最初に現れるインデックスを取得 |
| [`repeat`](#repeat) | 文字列を繰り返す |
| [`replace`](#replace) | 最初にマッチした文字列を置換 |
| [`replace_all`](#replace_all) | すべてのマッチした文字列を置換 |
| [`slice`](#slice) | 文字列を切り出す |
| [`lower_case`](#lower_case) | 小文字に変換 |
| [`upper_case`](#upper_case) | 大文字に変換 |
| [`trim`](#trim) | 両端の空白を除去 |
| [`trim_start`](#trim_start) | 先頭の空白を除去 |
| [`trim_end`](#trim_end) | 末尾の空白を除去 |
| [`pad_start`](#pad_start) | 先頭をパディング |
| [`pad_end`](#pad_end) | 末尾をパディング |
| [`length`](#length) | 文字列の長さを取得 |

---

## 各操作の詳細

### `at`

指定したインデックスの文字を1文字返します。負のインデックスにも対応しています。

**構文**:
```plaintext
<!str=[文字列, at, インデックス]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `インデックス` | 数値 | 取得する文字の位置（0起算。負の値は末尾から）|

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[Hello, at, 1]>
```

**出力例**:
```
e
```

---

### `concat`

ベースの文字列に1つ以上の文字列を末尾へ結合して返します。

**構文**:
```plaintext
<!str=[文字列, concat, 文字列2, 文字列3, ...]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `文字列2, ...` | 文字列（複数可） | 結合する文字列 |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[Hello, concat, " ", World, !]>
```

**出力例**:
```
Hello World!
```

---

### `starts_with`

文字列が指定した文字列で始まるかどうかを判定し、結果に応じて値を返します。

**構文**:
```plaintext
<!str=[文字列, starts_with, 検索文字列, 真の値, 偽の値]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `検索文字列` | 文字列 | 先頭を比較する文字列 |
| `真の値` | 文字列 | 条件が真のときに返す値 |
| `偽の値` | 文字列（省略可） | 条件が偽のときに返す値（省略時は空文字） |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[<!name>, starts_with, N, VIPプレイヤー, 一般プレイヤー]>
```

**出力例**（名前が `Notch` の場合）:
```
VIPプレイヤー
```

---

### `ends_with`

文字列が指定した文字列で終わるかどうかを判定し、結果に応じて値を返します。

**構文**:
```plaintext
<!str=[文字列, ends_with, 検索文字列, 真の値, 偽の値]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `検索文字列` | 文字列 | 末尾を比較する文字列 |
| `真の値` | 文字列 | 条件が真のときに返す値 |
| `偽の値` | 文字列（省略可） | 条件が偽のときに返す値（省略時は空文字） |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[<!tag=suffix>, ends_with, san, 敬称あり, 敬称なし]>
```

---

### `includes`

文字列に指定した文字列が含まれるかどうかを判定し、結果に応じて値を返します。

**構文**:
```plaintext
<!str=[文字列, includes, 検索文字列, 真の値, 偽の値]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `検索文字列` | 文字列 | 含まれるか調べる文字列 |
| `真の値` | 文字列 | 条件が真のときに返す値 |
| `偽の値` | 文字列（省略可） | 条件が偽のときに返す値（省略時は空文字） |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[<!name>, includes, admin, 管理者です, 一般ユーザーです]>
```

---

### `index_of`

文字列内で指定した部分文字列が最初に現れるインデックスを返します。  
見つからない場合は `-1` を返します。

**構文**:
```plaintext
<!str=[文字列, index_of, 検索文字列]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `検索文字列` | 文字列 | 検索する文字列 |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[Hello World, index_of, World]>
```

**出力例**:
```
6
```

---

### `repeat`

文字列を指定した回数だけ繰り返した文字列を返します。

**構文**:
```plaintext
<!str=[文字列, repeat, 回数]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `回数` | 数値 | 繰り返す回数 |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[ha, repeat, 3]>
```

**出力例**:
```
hahaha
```

---

### `replace`

文字列内で最初にマッチした部分文字列を置換します。

**構文**:
```plaintext
<!str=[文字列, replace, 検索文字列, 置換文字列]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `検索文字列` | 文字列 | 置換対象の文字列 |
| `置換文字列` | 文字列 | 置換後の文字列（省略時は空文字で削除） |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[Hello World, replace, World, Minecraft]>
```

**出力例**:
```
Hello Minecraft
```

---

### `replace_all`

文字列内でマッチしたすべての部分文字列を置換します。

**構文**:
```plaintext
<!str=[文字列, replace_all, 検索文字列, 置換文字列]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `検索文字列` | 文字列 | 置換対象の文字列 |
| `置換文字列` | 文字列 | 置換後の文字列（省略時は空文字で削除） |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[a-b-c-d, replace_all, -, /]>
```

**出力例**:
```
a/b/c/d
```

---

### `slice`

文字列の指定した範囲を切り出して返します。

**構文**:
```plaintext
<!str=[文字列, slice, 開始インデックス, 終了インデックス]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `開始インデックス` | 数値 | 切り出し開始位置（0起算） |
| `終了インデックス` | 数値（省略可） | 切り出し終了位置（省略時は末尾まで）|

:::info
終了インデックスの文字は含まれません（`[開始, 終了)` の範囲）。  
負の値を指定すると末尾からの位置になります。
:::

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[Hello World, slice, 6]>
```

**出力例**:
```
World
```

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[Hello World, slice, 0, 5]>
```

**出力例**:
```
Hello
```

---

### `lower_case`

文字列をすべて小文字に変換して返します。

**構文**:
```plaintext
<!str=[文字列, lower_case]>
```

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[HELLO WORLD, lower_case]>
```

**出力例**:
```
hello world
```

---

### `upper_case`

文字列をすべて大文字に変換して返します。

**構文**:
```plaintext
<!str=[文字列, upper_case]>
```

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[hello world, upper_case]>
```

**出力例**:
```
HELLO WORLD
```

---

### `trim`

文字列の両端にある空白文字を除去して返します。

**構文**:
```plaintext
<!str=[文字列, trim]>
```

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell §r[<!str=['  hello  ', trim]>]
```

**出力例**:
```
[hello]
```

---

### `trim_start`

文字列の先頭にある空白文字を除去して返します。

**構文**:
```plaintext
<!str=[文字列, trim_start]>
```

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell §r[<!str=['  hello  ', trim_start]>]
```

**出力例**:
```
[hello  ]
```

---

### `trim_end`

文字列の末尾にある空白文字を除去して返します。

**構文**:
```plaintext
<!str=[文字列, trim_end]>
```

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell §r[<!str=['  hello  ', trim_end]>]
```

**出力例**:
```
[  hello]
```

---

### `pad_start`

文字列の先頭を指定した文字でパディングし、指定の長さにして返します。

**構文**:
```plaintext
<!str=[文字列, pad_start, 目標の長さ, パディング文字]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `目標の長さ` | 数値 | パディング後の文字列の長さ |
| `パディング文字` | 文字列（省略可） | パディングに使用する文字（省略時は半角スペース） |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[<!score=capi:health>, pad_start, 3, 0]>
```

**出力例**（体力が5の場合）:
```
005
```

---

### `pad_end`

文字列の末尾を指定した文字でパディングし、指定の長さにして返します。

**構文**:
```plaintext
<!str=[文字列, pad_end, 目標の長さ, パディング文字]>
```

| 引数 | 型 | 説明 |
|---|---|---|
| `目標の長さ` | 数値 | パディング後の文字列の長さ |
| `パディング文字` | 文字列（省略可） | パディングに使用する文字（省略時は半角スペース） |

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell §r[<!str=[hello, pad_end, 10, .]>]
```

**出力例**:
```
[hello.....]
```

---

### `length`

文字列の文字数を返します。

**構文**:
```plaintext
<!str=[文字列, length]>
```

**使用例**:

```mcfunction
/execute as @a run scriptevent capi:tell <!name>の名前の長さ: <!str=[<!name>, length]>文字
```

**出力例**（名前が `Notch` の場合）:
```
Notchの名前の長さ: 5文字
```

---

## 活用例

### プレイヤー名の頭文字を取得

```mcfunction
/execute as @a run scriptevent capi:tell 頭文字: <!str=[<!name>, at, 0]>
```

**出力例**（名前が `Notch` の場合）:
```
頭文字: N
```

### タグから数値をゼロパディングして表示

```mcfunction
/execute as @a run scriptevent capi:actionbar ID: <!str=[<!score=player_id>, pad_start, 4, 0]>
```

**出力例**（player_id が 42 の場合）:
```
ID: 0042
```

### 名前を大文字に変換してタイトル表示

```mcfunction
/execute as @a run scriptevent capi:title {title=<!str=[<!name>, upper_case]>}
```

**出力例**（名前が `notch` の場合）:
```
NOTCH
```

### テキストの不要スペースを除去して結合

```mcfunction
/execute as @a run scriptevent capi:tell <!str=[<!str=['  Hello ', trim]>, concat, " ", World]>
```

**出力例**:
```
Hello World
```
