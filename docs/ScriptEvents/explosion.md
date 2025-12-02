---
title: "explosion"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**explosion** は、指定した場所に爆発を生成する ScriptEvent です。  
爆発の威力、場所、オプションを細かく設定できます。

## 構文

```mcfunction
/scriptevent capi:explosion <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{radius=威力,location=[x,y,z],dimension=ディメンション名,options={allow_under_water=true,breaks_blocks=true,causes_fire=true}}
```
+++ JSON
```json
{
    "radius": 威力,
    "location": [x, y, z],
    "dimension": "ディメンション名",
    "options": {
        "allow_under_water": true/false,
        "breaks_blocks": true/false,
        "causes_fire": true/false
    }
}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `radius` | 爆発の威力（半径） | ✓ |
| `location` | 爆発の座標 [x, y, z] | × |
| `dimension` | ディメンション名 | × |
| `options` | 爆発のオプション | × |

### オプション

| オプション | 説明 | デフォルト |
|---|---|---|
| `allow_under_water` | 水中での爆発を許可 | false |
| `breaks_blocks` | ブロックを破壊 | true |
| `causes_fire` | 火を発生させる | false |


## 使用例

### シンプルな爆発

指定した威力で爆発を生成します。

```mcfunction
/scriptevent capi:explosion {"radius": 3}
```

### 座標を指定した爆発

特定の座標で爆発を生成します。

```mcfunction
/scriptevent capi:explosion {"radius": 5, "location": [100, 64, 100]}
```

### ブロックを破壊しない爆発

エフェクトのみの爆発を生成します。

```mcfunction
/scriptevent capi:explosion {"radius": 3, "options": {"breaks_blocks": false}}
```

### 火を発生させる爆発

火災を引き起こす爆発を生成します。

```mcfunction
/scriptevent capi:explosion {"radius": 4, "options": {"causes_fire": true}}
```

### 水中での爆発

水中でも機能する爆発を生成します。

```mcfunction
/scriptevent capi:explosion {"radius": 3, "options": {"allow_under_water": true}}
```

### 相対座標での爆発

プレイヤーの位置からの相対座標で爆発を生成します。

```mcfunction
/execute as @a run scriptevent capi:explosion {"radius": 2, "location": ["~", "~", "~5"]}
```

### ネザーでの爆発

ネザーディメンションで爆発を生成します。

```mcfunction
/scriptevent capi:explosion {"radius": 5, "location": [0, 64, 0], "dimension": "nether"}
```

### カスタマイズされた爆発

全てのオプションを設定した爆発を生成します。

```mcfunction
/scriptevent capi:explosion {
    "radius": 10,
    "location": [100, 64, 100],
    "dimension": "overworld",
    "options": {
        "allow_under_water": true,
        "breaks_blocks": true,
        "causes_fire": true
    }
}
```

### 演出用の爆発

ダメージなしの演出用爆発を生成します。

```mcfunction
/scriptevent capi:explosion {"radius": 2, "options": {"breaks_blocks": false, "causes_fire": false}}
```

## 注意事項

- `radius` パラメータは必須です
- `location` を省略した場合、実行者の位置が使用されます
- 実行者がいない場合、`location` の省略時は [0, 0, 0] が使用されます
- `dimension` を省略した場合、実行者のディメンションが使用されます
- 大きな威力の爆発はサーバーに負荷をかける可能性があります
- `breaks_blocks` を false にすると、ブロックは破壊されませんが、エンティティにはダメージが入ります

## 関連項目

- [spawn_entity](./spawn_entity.md) - エンティティをスポーン
- [impulse](./impulse.md) - エンティティに衝撃を与える
