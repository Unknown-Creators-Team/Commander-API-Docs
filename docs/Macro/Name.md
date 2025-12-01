---
title: "Name マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**Name マクロ** は、実行者の名前を取得するマクロです。  
プレイヤーの場合はプレイヤー名、エンティティの場合はエンティティID、ブロックの場合はブロックIDを返します。

## 構文

```plaintext
<!name>
```

## 戻り値

| 実行者の種類 | 戻り値 |
|---|---|
| プレイヤー | プレイヤー名（例：`Notch`） |
| エンティティ | エンティティID（例：`minecraft:zombie`） |
| ブロック | ブロックID（例：`minecraft:stone`） |

:::info
renameメソッドで名前が変更されていても、元のプレイヤー名が返されます。  
変更後の名前を取得したい場合は、[NameTag マクロ](./NameTag.md)を使用してください。
:::

## 使用例

### tellメソッドでの使用

自分の名前を含めて挨拶をします。

```mcfunction
/execute as @a run scriptevent capi:tell Hello <!name>!
```

**出力例**（Notchが実行者の場合）:
```
Hello Notch!
```

### actionbarでの使用

プレイヤー名をアクションバーに表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar プレイヤー: <!name>
```

**出力例**:
```
プレイヤー: Notch
```

### renameメソッドでの使用

自分の名前に色を付けます。

```mcfunction
/execute as @a run scriptevent capi:rename §a<!name>
```

**出力例**:
<span style={{color: '#55FF55'}}>Notch</span>

### 他のマクロとの組み合わせ

スコアと名前を組み合わせて表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar <!name>の所持金: <!score=money>円
```

**出力例**:
```
Notchの所持金: 1000円
```

## 変数からの移行

以前の変数構文からマクロ構文への変更:

| 旧構文（変数） | 新構文（マクロ） |
|---|---|
| `{name}` | `<!name>` |

:::tip 移行のポイント
旧構文の `{name}` は新構文の `<!name>` に置き換えるだけで動作します。  
機能に変更はありません。
:::
