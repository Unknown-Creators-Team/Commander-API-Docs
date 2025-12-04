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

Xプラス、Zプラスの方向へ押し飛ばします。

+++ ESON
```mcfunction
scriptevent capi:knockback {horizontal_force=[1, 1],vertical_strength=0.5}
```
+++ JSON
```mcfunction
scriptevent capi:knockback {
    "horizontal_force": [1, 1],
    "vertical_strength": 0.5
}
```
+++

### 向いてる方向へノックバック

プレイヤーを向いている方向へ押し飛ばします。
※めっちゃ押されるから気をつけて！

+++ ESON
```mcfunction
scriptevent capi:knockback {horizontal_force=[<!calc=<!score=capi:direction_x>>,<!calc=<!score=capi:direction_z>>],vertical_strength=0.5}
```
+++ JSON
```mcfunction
scriptevent capi:knockback {
    "horizontal_force": [<!calc=<!score=capi:direction_x>/10>, <!calc=<!score=capi:direction_z>>],
    "vertical_strength": 0.5
}
```
+++

### 上方向のノックバック

上方向に押し飛ばします。

+++ ESON
```mcfunction
scriptevent capi:knockback {horizontal_force= [0,0],vertical_strength= 2}
```
+++ JSON
```mcfunction
scriptevent capi:knockback {
    "horizontal_force": [0, 0],
    "vertical_strength": 2
}
```
+++

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

## 関連項目

- [impulse](./impulse.md) - エンティティに衝撃を与える
- [explosion](./explosion.md) - 爆発を生成
