---
title: "spawn_entity"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**spawn_entity** は、エンティティをスポーンする ScriptEvent です。  
エンティティの種類、位置、名前、炎上状態を指定できます。

## 構文

```mcfunction
/scriptevent capi:spawn_entity <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{id=エンティティID,name=名前,location=[x,y,z],dimension=ディメンション名,fire=秒数}
```
+++ JSON
```json
{
    "id": "エンティティID",
    "name": "名前",
    "location": [x, y, z],
    "dimension": "ディメンション名",
    "fire": 秒数
}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `id` | エンティティID | ✓ |
| `location` | スポーン座標 [x, y, z] | ✓ |
| `name` | エンティティの名前 | × |
| `dimension` | ディメンション名 | × |
| `fire` | 炎上させる秒数 | × |


## 使用例

### シンプルなスポーン

クリーパーをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_entity {id=creeper}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_entity {"id": "creeper"}
```
+++

### 名前付きエンティティ

名前を付けてゾンビをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_entity {id=zombie,name=ボスゾンビ}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_entity {"id": "zombie", "name": "ボスゾンビ"}
```
+++

### 座標を指定してスポーン

特定の座標にスケルトンをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_entity {id=skeleton,location=[100,64,100]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_entity {"id": "skeleton", "location": [100, 64, 100]}
```
+++

### 相対座標でスポーン

プレイヤーの前方にエンダーマンをスポーンします。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:spawn_entity {id=enderman,location=["~","~","~5"]}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:spawn_entity {"id": "enderman", "location": ["~", "~", "~5"]}
```
+++

### 炎上状態でスポーン

炎上した状態でゾンビをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_entity {id=zombie,fire=10}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_entity {"id": "zombie", "fire": 10}
```
+++

### ネザーでスポーン

ネザーディメンションでブレイズをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_entity {id=blaze,location=[0,64,0],dimension=nether}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_entity {"id": "blaze", "location": [0, 64, 0], "dimension": "nether"}
```
+++

### 完全にカスタマイズされたスポーン

全てのオプションを設定してスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_entity {id=wither_skeleton,name=§4炎の戦士,location= [100,64,100],dimension=overworld,fire= 999}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_entity {
    "id": "wither_skeleton",
    "name": "§4炎の戦士",
    "location": [100, 64, 100],
    "dimension": "overworld",
    "fire": 999
}
```
+++

### マクロを使用したスポーン

プレイヤー名を含む名前でスポーンします。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:spawn_entity {id=zombie,name=<!name>のゾンビ}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:spawn_entity {"id": "zombie", "name": "<!name>のゾンビ"}
```
+++

::: !ref ../Macro/Name.md

### 複数のエンティティをスポーン

繰り返しコマンドで複数のエンティティをスポーンします。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:spawn_entity {id=chicken,location=["~","~","~"]}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:spawn_entity {"id": "chicken", "location": ["~", "~", "~"]}
```
+++

## 注意事項

- `id`、`location` は必須です
- `dimension` を省略した場合、実行者のディメンションが使用されます
- `fire` は**tickではなく**秒数で指定します
- 無効なエンティティIDを指定するとエラーが発生します

## 関連項目

- [spawn_item](./spawn_item.md) - アイテムをスポーン
- [explosion](./explosion.md) - 爆発を生成
- [tp](./tp.md) - エンティティをテレポート
