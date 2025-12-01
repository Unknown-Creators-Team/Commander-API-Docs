---
title: "Selector マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**Selector マクロ** は、セレクターでプレイヤーを検索し、マッチしたプレイヤー名をカンマ区切りで返すマクロです。

:::warning 警告
コマンドのセレクターに仕様を近づけていますが、完全な互換性は保証していません。<br />
特に、複雑なセレクター引数の組み合わせや、一部の特殊な引数は正しく動作しない場合があります。
:::

## 構文

```plaintext
<!selector={セレクター引数}>
```

## パラメータ

セレクター引数はESON形式で指定します。

| パラメータ | 説明 |
|---|---|
| `c` | 取得するプレイヤー数（closest） |
| `r` | 最大距離（maxDistance） |
| `rm` | 最小距離（minDistance） |
| `x` | 検索の中心X座標 |
| `y` | 検索の中心Y座標 |
| `z` | 検索の中心Z座標 |
| `dx` | 検索範囲のX幅 |
| `dy` | 検索範囲のY高さ |
| `dz` | 検索範囲のZ奥行き |
| `tag` | フィルタするタグ（単一） |
| `tags` | フィルタするタグ（配列） |

:::info
タグの前に `!` を付けると、そのタグを持たないプレイヤーを検索します。
:::

## 戻り値

マッチしたプレイヤー名をカンマ区切りで返します。  
マッチするプレイヤーがいない場合は空文字を返します。

## 使用例

### 最も近いプレイヤーを取得

実行者から最も近いプレイヤーの名前を取得します。

```mcfunction
/execute as @a run scriptevent capi:tell 最も近いプレイヤー: <!selector={c=1}>
```

**出力例**:
```
最も近いプレイヤー: Notch
```

### 範囲内のプレイヤーを取得

10ブロック以内のすべてのプレイヤーを取得します。

```mcfunction
/execute as @a run scriptevent capi:tell 近くのプレイヤー: <!selector={r=10}>
```

**出力例**:
```
近くのプレイヤー: Notch, Steve, Alex
```

### 特定のタグを持つプレイヤーを取得

`admin` タグを持つプレイヤーを取得します。

```mcfunction
/execute as @a run scriptevent capi:tell 管理者: <!selector={tag=admin}>
```

**出力例**:
```
管理者: Notch, Jeb
```

### Commander API タグを使用

Commander API が提供するタグを使用してフィルタします。

```mcfunction
/execute as @a run scriptevent capi:tell 飛行中のプレイヤー: <!selector={tag=capi:fly}>
```

**出力例**:
```
飛行中のプレイヤー: Steve
```

### 座標を指定して検索

特定の座標周辺のプレイヤーを検索します。

```mcfunction
/execute as @a run scriptevent capi:tell スポーン地点のプレイヤー: <!selector={x=0,y=64,z=0,r=5}>
```

**出力例**:
```
スポーン地点のプレイヤー: Steve
```

### 複数のタグでフィルタ

複数のタグ条件でフィルタします。

```mcfunction
/execute as @a run scriptevent capi:tell VIPプレイヤー: <!selector={tags=[vip,!banned]}>
```

**出力例**:
```
VIPプレイヤー: Alex, Jeb
```

### 距離範囲を指定

5〜20ブロックの範囲内のプレイヤーを取得します。

```mcfunction
/execute as @a run scriptevent capi:tell 中距離のプレイヤー: <!selector={rm=5,r=20}>
```

**出力例**:
```
中距離のプレイヤー: Steve, Alex
```

### ボリューム（範囲）を指定

特定のエリア内のプレイヤーを検索します。

```mcfunction
/execute as @a run scriptevent capi:tell エリア内: <!selector={x=0,y=60,z=0,dx=100,dy=20,dz=100}>
```

**出力例**:
```
エリア内: Notch, Steve, Alex
```

## 活用例

### オンラインプレイヤー一覧

全オンラインプレイヤーを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell オンライン: <!selector={}>
```

### チームメンバー表示

同じチームのメンバーを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell チームメンバー: <!selector={tag=team:red}>
```

### 近くのプレイヤーへの警告

一定距離内のプレイヤーに警告を表示します。

```mcfunction
/execute as @a run scriptevent capi:tell 近くにいるプレイヤー: <!selector={r=15,c=3}>
```
