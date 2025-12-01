---
title: "Velocity マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**Velocity マクロ** は、エンティティの速度（velocity）を取得するマクロです。  
各軸の速度や、複合的な速度を取得できます。

## 構文

```plaintext
<!velocity=軸>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `軸` | 取得する速度の軸（下記参照） |

### 利用可能な軸

| 軸 | 説明 | 計算式 |
|---|---|---|
| `x` | X軸の速度 | vx |
| `y` | Y軸の速度 | vy |
| `z` | Z軸の速度 | vz |
| `xy` | XY平面の速度 | √(vx² + vy²) |
| `xz` | XZ平面の速度（水平速度） | √(vx² + vz²) |
| `yz` | YZ平面の速度 | √(vy² + vz²) |
| `xyz` | 3次元の総合速度 | √(vx² + vy² + vz²) |

## 戻り値

指定された軸の速度を返します。  
実行者がエンティティでない場合は、マクロがそのまま残ります。

:::info Commander APIのスコア
Commander API では速度を [スコア](https://github.com/Unknown-Creators-Team/Commander-API/blob/alpha/src/events/scores.ts) としても提供しています。  
`capi:velocity_x`, `capi:velocity_y`, `capi:velocity_z`, `capi:velocity_xz`, `capi:velocity_xyz` が利用可能です。
:::

## 使用例

### 水平速度の表示

プレイヤーの水平方向の速度を表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 水平速度: <!velocity=xz>
```

**出力例**:
```
水平速度: 0.234
```

### 垂直速度の表示

プレイヤーの垂直方向の速度を表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 垂直速度: <!velocity=y>
```

**出力例**（ジャンプ中）:
```
垂直速度: 0.42
```

**出力例**（落下中）:
```
垂直速度: -0.78
```

### 総合速度の表示

プレイヤーの3次元総合速度を表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 総合速度: <!velocity=xyz>
```

**出力例**:
```
総合速度: 0.567
```

### スピードメーター

リアルタイムでスピードを表示するスピードメーターを作成します。

```mcfunction
/execute as @a run scriptevent capi:actionbar スピード: <!velocity=xz> m/s
```

**出力例**:
```
スピード: 0.234 m/s
```

### 各軸の速度を表示

すべての軸の速度を一度に表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar X: <!velocity=x> | Y: <!velocity=y> | Z: <!velocity=z>
```

**出力例**:
```
X: 0.15 | Y: -0.08 | Z: 0.12
```

### 落下検知

Y軸の速度が負の場合、落下していることを示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar <!if=[<!velocity=y><0,§c落下中,§a安全]>
```

:::tip
この例では [If マクロ](./If.md) の `<` 演算子を使用しています。  
`<!velocity=y><0` は「Y軸の速度が0より小さい」という条件を意味します。
:::

**出力例**（落下中）:
```
落下中
```

**出力例**（地上）:
```
安全
```

## 活用例

### レース用スピードメーター

レースゲームでのスピードメーターを作成します。

```mcfunction
/execute as @a run scriptevent capi:actionbar §6【レース】§r 速度: §e<!velocity=xz>§r m/s
```

### パルクール用の速度表示

パルクールで水平・垂直速度を同時に表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 水平: <!velocity=xz> | 垂直: <!velocity=y>
```
