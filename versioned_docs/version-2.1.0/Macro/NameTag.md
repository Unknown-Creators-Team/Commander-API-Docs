---
title: "NameTag マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**NameTag マクロ** は、エンティティのネームタグを取得するマクロです。  
renameメソッドで名前が変更された場合、変更後の名前が返されます。

## 構文

```plaintext
<!nametag>
```

## 戻り値

| 実行者の種類 | 戻り値 |
|---|---|
| エンティティ | ネームタグの値 |
| ブロック | ブロックID |

:::info
プレイヤーの元の名前（変更前の名前）を取得したい場合は、[Name マクロ](./Name.md)を使用してください。
:::

## 使用例

### tellメソッドでの使用

自分のネームタグを含めて挨拶をします。

```mcfunction
/execute as @a run scriptevent capi:tell Hello <!nametag>!
```

**出力例**（ネームタグが「Hero」の場合）:
```
Hello Hero!
```

### renameとの組み合わせ

プレイヤーのネームタグを装飾して再設定します。

```mcfunction
/execute as @a run scriptevent capi:rename §6[VIP] §r<!nametag>
```

**出力例**:
```
[VIP] Hero
```

### actionbarでの使用

ネームタグをアクションバーに表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar あなたの表示名: <!nametag>
```

**出力例**:
```
あなたの表示名: Hero
```

## Name マクロとの違い

| マクロ | 取得する値 |
|---|---|
| `<!name>` | 元のプレイヤー名（変更されない） |
| `<!nametag>` | ネームタグの値（renameで変更可能） |

### 例

```mcfunction
# プレイヤー名を「Hero」に変更
/execute as @a run scriptevent capi:rename Hero

# 元の名前を表示
/execute as @a run scriptevent capi:tell 元の名前: <!name>
# 出力: 元の名前: Notch

# ネームタグを表示
/execute as @a run scriptevent capi:tell ネームタグ: <!nametag>
# 出力: ネームタグ: Hero
```

## 変数からの移行

以前の変数構文からマクロ構文への変更:

| 旧構文（変数） | 新構文（マクロ） |
|---|---|
| `{nametag}` | `<!nametag>` |

:::tip 移行のポイント
旧構文の `{nametag}` は新構文の `<!nametag>` に置き換えるだけで動作します。  
機能に変更はありません。
:::
