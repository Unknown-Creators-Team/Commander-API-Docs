---
title: "spawn_item"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**spawn_item** は、アイテムをスポーンする ScriptEvent です。  
アイテムの種類、数量、名前、説明文、エンチャント、その他の属性を細かく設定できます。

## 構文

```mcfunction
/scriptevent capi:spawn_item <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{item=アイテムID,name=アイテム名,amount=数量,lore=[説明文1,説明文2],enchants=[{name=エンチャント名,level=レベル}],can_place_on=[ブロックID],can_destroy=[ブロックID],lock=ロックモード,keep_on_death=true,location=[x,y,z],dimension=ディメンション名,clear_velocity=true}
```
+++ JSON
```json
{
    "item": "アイテムID",
    "location": [x, y, z],
    "name": "アイテム名",
    "amount": 数量,
    "lore": ["説明文1", "説明文2"],
    "enchants": [{"name": "エンチャント名", "level": レベル}],
    "can_place_on": ["ブロックID"],
    "can_destroy": ["ブロックID"],
    "lock": "ロックモード",
    "keep_on_death": true/false,
    "dimension": "ディメンション名",
    "clear_velocity": true/false
}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `item` | アイテムID | ✓ |
| `location` | スポーン座標 [x, y, z] | ✓ |
| `name` | アイテムの表示名 | × |
| `amount` | 数量 | × |
| `lore` | 説明文の配列 | × |
| `enchants` | エンチャントの配列 | × |
| `can_place_on` | 設置可能なブロック | × |
| `can_destroy` | 破壊可能なブロック | × |
| `lock` | アイテムロックモード | × |
| `keep_on_death` | 死亡時に保持 | × |
| `dimension` | ディメンション名 | × |
| `clear_velocity` | 速度をクリア | × |


## 使用例

### シンプルなアイテムスポーン

0, 0, 0にダイヤモンドをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:diamond,location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:diamond", "location": [0, 0, 0]}
```
+++

### 数量を指定してスポーン

0, 0, 0に64個の土ブロックをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:dirt,amount=64,location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:dirt", "amount": 64, "location": [0, 0, 0]}
```
+++

### 名前付きアイテム

0, 0, 0にカスタム名を付けたダイヤモンドの剣をスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:diamond_sword,name=§6伝説の剣,location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:diamond_sword", "name": "§6伝説の剣", "location": [0, 0, 0]}
```
+++

### 説明文付きアイテム

0, 0, 0に説明文を付けたアイテムをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:diamond_sword,name=§6勇者の剣,lore=["§7伝説の武器","§7攻撃力 +10"],location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {
    "item": "minecraft:diamond_sword",
    "name": "§6勇者の剣",
    "lore": ["§7伝説の武器", "§7攻撃力 +10"],
    "location": [0, 0, 0]
}
```
+++

### エンチャント付きアイテム

0, 0, 0にエンチャントを付けたダイヤモンドの剣をスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:diamond_sword,enchants=[{name=sharpness,level=5},{name=fire_aspect,level=2}],location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {
        "item": "minecraft:diamond_sword",
        "enchants": [
                {"name": "sharpness", "level": 5},
                {"name": "fire_aspect", "level": 2}
        ],
        "location": [0, 0, 0]
}
```
+++

### 相対座標でスポーン

0, 0, 0にプレイヤーの前方にアイテムをスポーンします。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:spawn_item {item=minecraft:apple,location=[~,~1,~2]}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:spawn_item {"item": "minecraft:apple", "location": ["~", "~1", "~2"]}
```
+++

### 速度なしでスポーン

0, 0, 0にその場に静止した状態でアイテムをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:diamond,clear_velocity=true,location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:diamond", "clear_velocity": true, "location": [0, 0, 0]}
```
+++

### 死亡時に保持するアイテム

0, 0, 0に死亡時に失わないアイテムをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:totem_of_undying,keep_on_death=true,location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {
        "item": "minecraft:totem_of_undying",
        "keep_on_death": true,
        "location": [0, 0, 0]
}
```
+++

### 特定のブロックにのみ設置可能

0, 0, 0に特定のブロックにのみ設置できるアイテムをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:stone,can_place_on=["minecraft:dirt","minecraft:grass_block"],location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {
        "item": "minecraft:stone",
        "can_place_on": ["minecraft:dirt", "minecraft:grass_block"],
        "location": [0, 0, 0]
    }
```
+++


### 特定のブロックのみ破壊可能

0, 0, 0に特定のブロックのみ破壊できるツールをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:wooden_pickaxe,can_destroy=["minecraft:stone","minecraft:cobblestone"],location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {
    "item": "minecraft:wooden_pickaxe",
        "can_destroy": ["minecraft:stone", "minecraft:cobblestone"]
        "location": [0, 0, 0]
    }
```
+++


### 完全にカスタマイズされたアイテム

0, 0, 0に全ての設定を行ったアイテムをスポーンします。

+++ ESON
```mcfunction
/scriptevent capi:spawn_item {item=minecraft:diamond_sword,name=§c§l最強の剣,amount=1,lore=["§7伝説の武器","§7攻撃力 +100","§7クリティカル率 +50%"],enchants=[{name=sharpness,level=10},{name=fire_aspect,level=5},{name=looting,level=3}],keep_on_death=true,location=[100,64,100],dimension=overworld,clear_velocity=true,location=[0,0,0]}
```
+++ JSON
```mcfunction
/scriptevent capi:spawn_item {
    "item": "minecraft:diamond_sword",
    "name": "§c§l最強の剣",
        "amount": 1,
        "lore": [
            "§7伝説の武器",
            "§7攻撃力 +100",
                "§7クリティカル率 +50%"
            ],
            "enchants": [
            {"name": "sharpness", "level": 10},
            {"name": "fire_aspect", "level": 5},
                {"name": "looting", "level": 3}
            ],
            "keep_on_death": true,
        "location": [100, 64, 100],
        "dimension": "overworld",
        "clear_velocity": true,
        "location": [0, 0, 0]
}
```
+++

### マクロを使用したアイテム

0, 0, 0にプレイヤー名を含む名前のアイテムをスポーンします。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:spawn_item {item=minecraft:diamond,name=<!name>のダイヤモンド,location=[0,0,0]}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:spawn_item {
    "item": "minecraft:diamond",
    "name": "<!name>のダイヤモンド",
    "location": [0, 0, 0]
}
```
+++

## 注意事項

- `item`、`location` は必須です
- `amount` のデフォルト値は 1 です
- `dimension` を省略した場合、実行者のディメンションが使用されます
- `clear_velocity` を true にすると、アイテムが静止した状態でスポーンします
- 無効なアイテムIDを指定するとエラーが発生します

## 関連項目

- [spawn_entity](./spawn_entity.md) - エンティティをスポーン
- [get_item](./get_item.md) - アイテムを取得
- [set_item](./set_item.md) - アイテムを設定
