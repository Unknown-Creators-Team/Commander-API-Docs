---
title: "particle"
last_update:
  date: 2026-03-19
  author: Nano191225
---

## 概要

**particle** は、指定した場所にパーティクルを生成する ScriptEvent です。  
パーティクルの種類、位置、Molang 変数を細かく設定できます。

## 構文

```mcfunction
/scriptevent capi:particle <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{id=パーティクルID,location=[x,y,z],variables={変数名=値}}
```
+++ JSON
```json
{
    "id": "パーティクルID",
    "location": [x, y, z],
    "variables": {
        "変数名": 値
    }
}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `id` | パーティクルの識別子 | ✓ |
| `location` | 生成座標 `[x, y, z]`（省略時は `[0, 0, 0]`） | × |
| `variables` | Molang 変数のマップ | × |

### variables の値の型

`variables` には、キーの値として以下の3種類の型を指定できます。

| 型 | 形式 | 説明 |
|---|---|---|
| 数値 | `数値` | `setFloat` で設定されるスカラー値 |
| Vector3 | `{x: 数値, y: 数値, z: 数値}` | `setVector3` で設定される3次元ベクトル |
| RGBA | `{r: 数値, g: 数値, b: 数値, a?: 数値}` | `setColorRGBA` で設定される色（`a` の省略時は `1`） |

## 使用例

### シンプルなパーティクル

プレイヤーの足元にパーティクルを生成します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:particle {id=minecraft:villager_happy,location=[~,~,~]}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:particle {"id": "minecraft:villager_happy", "location": ["~", "~", "~"]}
```
+++

### 座標を指定したパーティクル

特定の座標にパーティクルを生成します。

+++ ESON
```mcfunction
/scriptevent capi:particle {id=minecraft:basic_flame_particle,location=[100,64,100]}
```
+++ JSON
```mcfunction
/scriptevent capi:particle {"id": "minecraft:basic_flame_particle", "location": [100, 64, 100]}
```
+++

### RGBA カラー変数を使用したパーティクル

色付きパーティクルを生成します。`r`, `g`, `b` の値は `0.0` ～ `1.0` の範囲で指定します。`a`（アルファ）は省略可能で、省略時は `1` となります。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:particle {id=minecraft:colored_flame_particle,location=[~,~1,~],variables={variable.color={r=1.0,g=0.3,b=0.0}}}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:particle {"id": "minecraft:colored_flame_particle", "location": ["~", "~1", "~"], "variables": {"variable.color": {"r": 1.0, "g": 0.3, "b": 0.0}}}
```
+++
