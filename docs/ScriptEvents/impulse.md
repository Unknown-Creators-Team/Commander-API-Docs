---
title: "impulse"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**impulse** は、エンティティに衝撃を与える ScriptEvent です。  
エンティティを指定した方向に押し出すことができます。

:::warning プレイヤーには使用できません
このコマンドはプレイヤーに対して使用できません。  
モブなどのエンティティにのみ使用できます。
:::

## 構文

```mcfunction
/scriptevent capi:impulse <JSON形式のパラメータ>
```

## パラメータ

JSON形式でパラメータを指定します：

```json
{
    "vector": [x, y, z],
    "clear_velocity": true/false
}
```

| パラメータ | 説明 | 必須 |
|---|---|---|
| `vector` | 衝撃のベクトル [x, y, z] | ✓ |
| `clear_velocity` | 現在の速度をクリアするか | × |

## 戻り値

なし

## 使用例

### 上方向への衝撃

エンティティを上に押し上げます。

```mcfunction
/execute as @e[type=zombie] run scriptevent capi:impulse {"vector": [0, 1, 0]}
```

### 前方への衝撃

エンティティを前方に押し出します。

```mcfunction
/execute as @e[type=creeper] run scriptevent capi:impulse {"vector": [0, 0, 1]}
```

### 複合方向への衝撃

斜め上方向に押し出します。

```mcfunction
/execute as @e[type=skeleton] run scriptevent capi:impulse {"vector": [1, 1, 1]}
```

### 速度をクリアしてから衝撃

現在の速度をリセットしてから新しい衝撃を与えます。

```mcfunction
/execute as @e[type=zombie] run scriptevent capi:impulse {
    "vector": [0, 2, 0],
    "clear_velocity": true
}
```

### 強い衝撃

大きなベクトルで強い衝撃を与えます。

```mcfunction
/execute as @e[type=pig] run scriptevent capi:impulse {"vector": [0, 5, 0]}
```

### ランダムな方向への衝撃

マクロを使用してランダムな方向に押し出します。

```mcfunction
/execute as @e[type=chicken] run scriptevent capi:impulse {
    "vector": ["<!calc=random(-1,1)>", "1", "<!calc=random(-1,1)>"]
}
```

::: !ref ../Macro/Calc.md

### エンティティを遠くに飛ばす

複数の衝撃を組み合わせて遠くに飛ばします。

```mcfunction
/execute as @e[type=arrow] run scriptevent capi:impulse {
    "vector": [0, 0, 10],
    "clear_velocity": true
}
```

## ベクトルの説明

| 軸 | 説明 |
|---|---|
| X | 東（正）/西（負） |
| Y | 上（正）/下（負） |
| Z | 南（正）/北（負） |

### ベクトルの大きさ

- 値が大きいほど、衝撃が強くなります
- 負の値で逆方向に押し出せます
- 0 を指定すると、その軸方向には動きません

## 注意事項

- プレイヤーには使用できません（エラーが発生します）
- エンティティのみが実行できます
- `vector` パラメータは必須で、3つの数値の配列である必要があります
- `clear_velocity` を true にすると、既存の速度がリセットされます
- 大きすぎる値を指定すると、エンティティが予期しない動作をする可能性があります

## 関連項目

- [knockback](./knockback.md) - エンティティをノックバック
- [shoot](./shoot.md) - 発射物を発射
