---
title: "If マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**If マクロ** は、条件分岐を行うマクロです。  
条件が真の場合と偽の場合で、異なるテキストを返すことができます。

## 構文

```plaintext
<!if=[条件, 真の値, 偽の値]>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `条件` | 評価する条件式 |
| `真の値` | 条件が真の場合に返す値 |
| `偽の値` | 条件が偽の場合に返す値（省略可能） |

## サポートする比較演算子

| 演算子 | 意味 | 数値 | 文字列 |
|---|---|---|---|
| `=` | 等しい | 対応 | 対応 |
| `!=` | 等しくない | 対応 | 対応 |
| `<` | より小さい | 対応 | 非対応 |
| `<=` | 以下 | 対応 | 非対応 |

:::info
`<` と `<=` は数値の比較のみサポートしています。  
`>` と `>=` は直接サポートされていませんが、左右の値を入れ替えることで同等の比較ができます。
:::

## 戻り値

- 条件が真の場合：`真の値` を返します
- 条件が偽の場合：`偽の値` を返します（省略されている場合は空文字）

## 使用例

### 数値の比較（等しい）

スコアが100かどうかを判定します。

```mcfunction
/execute as @a run scriptevent capi:tell <!if=[<!score=money>=100,ちょうど100円です,100円ではありません]>
```

**出力例**（money=100の場合）:
```
ちょうど100円です
```

**出力例**（money=50の場合）:
```
100円ではありません
```

### 数値の比較（より小さい）

スコアが0より小さいかどうかを判定します。

```mcfunction
/execute as @a run scriptevent capi:tell <!if=[<!score=money><0,借金があります,借金はありません]>
```

**出力例**（money=-50の場合）:
```
借金があります
```

### 数値の比較（以下）

体力が10以下かどうかを判定します。

```mcfunction
/execute as @a run scriptevent capi:tell <!if=[<!score=capi:health><=10,§c危険！体力が低下しています,§a体力は十分です]>
```

**出力例**（health=5の場合）:
```
危険！体力が低下しています
```

### 文字列の比較

タグの値が特定の文字列かどうかを判定します。

```mcfunction
/execute as @a run scriptevent capi:tell <!if=[<!tag=rank>=Admin,管理者です,一般ユーザーです]>
```

**出力例**（rankタグがAdminの場合）:
```
管理者です
```

### 不等号（等しくない）

VIPでないプレイヤーを判定します。

```mcfunction
/execute as @a run scriptevent capi:tell <!if=[<!tag=rank>!=VIP,VIPではありません,VIPです]>
```

### 偽の値を省略

条件が真の場合のみテキストを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell <!if=[<!score=capi:level><=5,初心者です]>
```

**出力例**（level=3の場合）:
```
初心者です
```

**出力例**（level=10の場合）:
（空文字が返される）

### ネストした条件

複数の条件を組み合わせます。

```mcfunction
/execute as @a run scriptevent capi:tell ステータス: <!if=[<!score=capi:health><=0,§c死亡,<!if=[<!score=capi:health><=10,§e危険,§a健康]>]>
```

**出力例**（health=0の場合）:
```
ステータス: 死亡
```

**出力例**（health=5の場合）:
```
ステータス: 危険
```

**出力例**（health=20の場合）:
```
ステータス: 健康
```

## 活用例

### ランク表示システム

経験値に基づいてランクを表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar ランク: <!if=[<!score=capi:total_xp><100,ブロンズ,<!if=[<!score=capi:total_xp><500,シルバー,ゴールド]>]>
```

### お金の状態表示

所持金の状態を表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 財布: <!if=[<!score=money><0,§c借金中,<!if=[<!score=money>=0,§e空っぽ,§a<!score=money>円]>]>
```

### 権限チェック

管理者権限をチェックして表示を変更します。

```mcfunction
/execute as @a run scriptevent capi:tell <!if=[<!tag=rank>=Admin,§c[管理者] ,]><!name>
```

**出力例**（管理者の場合）:
```
[管理者] Notch
```

**出力例**（一般ユーザーの場合）:
```
Steve
```
