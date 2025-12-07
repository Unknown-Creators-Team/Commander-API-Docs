---
title: "shoot"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**shoot** は、発射物をスポーンして飛ばす ScriptEvent です。  
矢や火の玉などの発射物を指定した方向に発射できます。

## 構文

```mcfunction
/scriptevent capi:shoot <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{id=エンティティID,nameTag=名前,fire=秒数,location=[x,y,z],vector=[vx,vy,vz],speed=速度,dimension=ディメンション名}
```
+++ JSON
```json
{
    "id": "エンティティID",
    "nameTag": "名前",
    "fire": 秒数,
    "location": [x, y, z],
    "vector": [vx, vy, vz],
    "speed": 速度,
    "dimension": "ディメンション名"
}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `id` | 発射物のエンティティID | ✓ |
| `nameTag` | エンティティの名前 | × |
| `fire` | 炎上させる秒数 | × |
| `location` | 発射位置 [x, y, z] | ✓ |
| `vector` | 発射方向 [vx, vy, vz] | ✓ |
| `speed` | 発射速度 | × |
| `dimension` | ディメンション名 | × |


## 使用例

### シンプルな矢の発射

プレイヤーの前方に矢を発射します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:shoot {id=arrow,location=["~","~1.5","~"],vector=[<!score=capi:direction_x>,<!score=capi:direction_y>,<!score=capi:direction_z>],speed=3}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:shoot {
    "id": "arrow",
    "location": ["~", "~1.5", "~"],
    "vector": [<!score=capi:direction_x>,<!score=capi:direction_y>,<!score=capi:direction_z>],
    "speed": 3
}
```
+++

### 炎上する矢

999秒間炎上した状態の矢を発射します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:shoot {id=arrow,location=["~","~1.5","~"],vector=[0,0,1],speed=2,fire=999}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:shoot {
    "id": "arrow",
    "location": ["~", "~1.5", "~"],
    "vector": [0, 0, 1],
    "speed": 2,
    "fire": 999
}
```
+++

### 名前付き発射物

カスタム名を付けた発射物を発射します。

+++ ESON
```mcfunction
/scriptevent capi:shoot {id=arrow,nameTag=§c特殊な矢,location=[100,65,100],vector=[0,0,1],speed=3}
```
+++ JSON
```mcfunction
/scriptevent capi:shoot {
    "id": "arrow",
    "nameTag": "§c特殊な矢",
    "location": [100, 65, 100],
    "vector": [0, 0, 1],
    "speed": 3
}
```
+++

### 上方向への発射

真上に発射します。

+++ ESON
```mcfunction
/scriptevent capi:shoot {id=arrow,location=[~,~,~],vector=[0,1,0],speed=2}
```
+++ JSON
```mcfunction
/scriptevent capi:shoot {
    "id": "arrow",
    "location": [~,~,~],
    "vector": [0, 1, 0],
    "speed": 2
}
```
+++

### 斜め方向への発射

斜め上に発射します。

+++ ESON
```mcfunction
/scriptevent capi:shoot {id=arrow,location=[~,~,~],vector=[1,1,0],speed=2}
```
+++ JSON
```mcfunction
/scriptevent capi:shoot {
    "id": "arrow",
    "location": [~,~,~],
    "vector": [1, 1, 0],
    "speed": 2
}
```
+++

### 高速発射

非常に速い速度で発射します。

+++ ESON
```mcfunction
/scriptevent capi:shoot {id=arrow,location=[~,~,~],vector=[0,0,1],speed=5}
```
+++ JSON
```mcfunction
/scriptevent capi:shoot {
    "id": "arrow",
    "location": [~,~,~],
    "vector": [0, 0, 1],
    "speed": 5
}
```
+++

### 相対座標での発射

プレイヤーの目の高さから発射します。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:shoot {id=arrow,location=["~","~1.6","~"],vector=[0,0,1],speed=2}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:shoot {
    "id": "arrow",
    "location": ["~", "~1.6", "~"],
    "vector": [0, 0, 1],
    "speed": 2
}
```
+++

## ベクトルの説明
ベクトルは実行前に正規化されるため、速度に影響しません。  
方向のみを指定します。

## 注意事項

- `id`、`location`、`vector` は必須です
- `location` と `vector` は3つの数値の配列である必要があります
- `speed` のデフォルト値は 1 です
- `speed` は 0 より大きい必要があります
- `dimension` を省略した場合、実行者のディメンションが使用されます
- `fire` は**tickではなく**秒数で指定します
- ベクトルは方向のみを表し、速度は `speed` で指定します

## 関連項目

- [spawn_entity](./spawn_entity.md) - エンティティをスポーン
- [impulse](./impulse.md) - エンティティに衝撃を与える
