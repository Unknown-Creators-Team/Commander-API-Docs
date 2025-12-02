---
title: "knockback"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**knockback** は、エンティティをノックバックする ScriptEvent です。  
水平方向の力と垂直方向の強さを指定して、エンティティを押し飛ばします。

## 構文

```mcfunction
/scriptevent capi:knockback <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{horizontal_force=[x,z],vertical_strength=y}
```
+++ JSON
```json
{
    "horizontal_force": [x, z],
    "vertical_strength": y
}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `horizontal_force` | 水平方向の力 [x, z] | ✓ |
| `vertical_strength` | 垂直方向の強さ | ✓ |


## 使用例

### シンプルなノックバック

エンティティを後ろに押し飛ばします。

```mcfunction
/execute as @e[type=zombie] run scriptevent capi:knockback {
    "horizontal_force": [1, 0],
    "vertical_strength": 0.5
}
```

### 強いノックバック

エンティティを強く押し飛ばします。

```mcfunction
/execute as @e[type=creeper] run scriptevent capi:knockback {
    "horizontal_force": [2, 2],
    "vertical_strength": 1
}
```

### 上方向のノックバック

主に上方向に押し飛ばします。

```mcfunction
/execute as @e[type=skeleton] run scriptevent capi:knockback {
    "horizontal_force": [0, 0],
    "vertical_strength": 2
}
```

### プレイヤーへのノックバック

プレイヤーを押し飛ばします。

```mcfunction
/execute as @a run scriptevent capi:knockback {
    "horizontal_force": [0, 1],
    "vertical_strength": 0.5
}
```

### ダメージと組み合わせる

ダメージを与えながらノックバックします。

```mcfunction
/execute as @e[type=zombie] run damage @s 5
/execute as @e[type=zombie] run scriptevent capi:knockback {
    "horizontal_force": [1, 1],
    "vertical_strength": 1
}
```

### 方向を指定したノックバック

特定の方向に押し飛ばします。

```mcfunction
# 東方向
/execute as @e[type=pig] run scriptevent capi:knockback {
    "horizontal_force": [1, 0],
    "vertical_strength": 0.3
}

# 北方向
/execute as @e[type=cow] run scriptevent capi:knockback {
    "horizontal_force": [0, -1],
    "vertical_strength": 0.3
}
```

### 爆発風のノックバック

中心から外側に押し飛ばすようなノックバックを実行します。

```mcfunction
/execute at @e[type=tnt] as @e[type=!tnt,distance=..5] run scriptevent capi:knockback {
    "horizontal_force": [2, 2],
    "vertical_strength": 1.5
}
```

## 方向の説明

### 水平方向 (horizontal_force)

| 軸 | 説明 |
|---|---|
| X | 東（正）/西（負） |
| Z | 南（正）/北（負） |

### 垂直方向 (vertical_strength)

- 正の値: 上方向に押し上げる
- 0: 垂直方向には動かない
- 負の値は通常使用しません

## 注意事項

- エンティティが実行できます
- `horizontal_force` と `vertical_strength` は両方とも必須です
- `horizontal_force` は2つの数値の配列である必要があります
- `vertical_strength` は単一の数値です
- 値が大きいほど、ノックバックが強くなります
- プレイヤーにも使用できますが、効果が異なる場合があります

## 関連項目

- [impulse](./impulse.md) - エンティティに衝撃を与える
- [explosion](./explosion.md) - 爆発を生成
