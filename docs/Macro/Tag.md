---
title: "Tag マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**Tag マクロ** は、エンティティのタグから値を取得するマクロです。  
`タグ名:値` の形式で設定されたタグから、値の部分を抽出して返します。

## 構文

```plaintext
<!tag=タグ名>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `タグ名` | 取得したいタグの名前（`:` より前の部分） |

## 戻り値

指定されたタグ名に対応する値を返します。  
該当するタグが見つからない場合は、マクロがそのまま残ります。

## 使用例

### ランクシステム

プレイヤーのランクを表示します。

```mcfunction
# ランクタグを設定
/tag @s add rank:Admin

# ランクを取得して表示
/execute as @a run scriptevent capi:tell あなたのランク: <!tag=rank>
```

**出力例**:
```
あなたのランク: Admin
```

### チームシステム

プレイヤーのチームを表示します。

```mcfunction
# チームタグを設定
/tag @s add team:Red

# チームを取得して表示
/execute as @a run scriptevent capi:actionbar チーム: <!tag=team>
```

**出力例**:
```
チーム: Red
```

### renameでの使用

ランク付きのプレイヤー名を表示します。

```mcfunction
# ランクを設定
/tag @s add rank:VIP

# ランク付きの名前に変更
/execute as @a run scriptevent capi:rename [<!tag=rank>] <!name>
```

**出力例**:
```
[VIP] Notch
```

### 称号システム

プレイヤーの称号を表示します。

```mcfunction
# 称号を設定
/tag @s add title:勇者

# 称号を取得して表示
/execute as @a run scriptevent capi:tell <!name> - <!tag=title>
```

**出力例**:
```
Notch - 勇者
```

### 複数のタグを使用

ランクとチームを同時に表示します。

```mcfunction
# タグを設定
/tag @s add rank:Admin
/tag @s add team:Blue

# 両方のタグを使用
/execute as @a run scriptevent capi:rename [<!tag=rank>] [<!tag=team>] <!name>
```

**出力例**:
```
[Admin] [Blue] Notch
```

## 変数からの移行

以前の変数構文からマクロ構文への変更:

| 旧構文（変数） | 新構文（マクロ） |
|---|---|
| `{tag:rank}` | `<!tag=rank>` |
| `{tag:team}` | `<!tag=team>` |

:::tip 移行のポイント
旧構文の `{tag:タグ名}` は新構文の `<!tag=タグ名>` に置き換えます。  
コロン（`:`）がイコール（`=`）に変わることに注意してください。
:::
