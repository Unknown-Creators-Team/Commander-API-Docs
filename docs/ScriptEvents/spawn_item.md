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

+++ JSON
```json
{
    "item": "アイテムID",
    "name": "アイテム名",
    "amount": 数量,
    "lore": ["説明文1", "説明文2"],
    "enchants": [{"name": "エンチャント名", "level": レベル}],
    "can_place_on": ["ブロックID"],
    "can_destroy": ["ブロックID"],
    "lock": "ロックモード",
    "keep_on_death": true/false,
    "location": [x, y, z],
    "dimension": "ディメンション名",
    "clear_velocity": true/false
}
```
+++ ESON
```plaintext
{item=アイテムID,name=アイテム名,amount=数量,lore=[説明文1,説明文2],enchants=[{name=エンチャント名,level=レベル}],can_place_on=[ブロックID],can_destroy=[ブロックID],lock=ロックモード,keep_on_death=true,location=[x,y,z],dimension=ディメンション名,clear_velocity=true}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `item` | アイテムID | ✓ |
| `name` | アイテムの表示名 | × |
| `amount` | 数量 | × |
| `lore` | 説明文の配列 | × |
| `enchants` | エンチャントの配列 | × |
| `can_place_on` | 設置可能なブロック | × |
| `can_destroy` | 破壊可能なブロック | × |
| `lock` | アイテムロックモード | × |
| `keep_on_death` | 死亡時に保持 | × |
| `location` | スポーン座標 [x, y, z] | × |
| `dimension` | ディメンション名 | × |
| `clear_velocity` | 速度をクリア | × |


## 使用例

### シンプルなアイテムスポーン

ダイヤモンドをスポーンします。

```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:diamond"}
```

### 数量を指定してスポーン

64個の土ブロックをスポーンします。

```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:dirt", "amount": 64}
```

### 名前付きアイテム

カスタム名を付けたダイヤモンドの剣をスポーンします。

```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:diamond_sword", "name": "§6伝説の剣"}
```

### 説明文付きアイテム

説明文を付けたアイテムをスポーンします。

```mcfunction
/scriptevent capi:spawn_item {
    "item": "minecraft:diamond_sword",
    "name": "§6勇者の剣",
    "lore": ["§7伝説の武器", "§7攻撃力 +10"]
}
```

### エンチャント付きアイテム

エンチャントを付けたダイヤモンドの剣をスポーンします。

```mcfunction
/scriptevent capi:spawn_item {
    "item": "minecraft:diamond_sword",
    "enchants": [
        {"name": "sharpness", "level": 5},
        {"name": "fire_aspect", "level": 2}
    ]
}
```

### 座標を指定してスポーン

特定の座標にアイテムをスポーンします。

```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:diamond", "location": [100, 64, 100]}
```

### 相対座標でスポーン

プレイヤーの前方にアイテムをスポーンします。

```mcfunction
/execute as @a run scriptevent capi:spawn_item {"item": "minecraft:apple", "location": ["~", "~1", "~2"]}
```

### 速度なしでスポーン

その場に静止した状態でアイテムをスポーンします。

```mcfunction
/scriptevent capi:spawn_item {"item": "minecraft:diamond", "clear_velocity": true}
```

### 死亡時に保持するアイテム

死亡時に失わないアイテムをスポーンします。

```mcfunction
/scriptevent capi:spawn_item {
    "item": "minecraft:totem_of_undying",
    "keep_on_death": true
}
```

### 特定のブロックにのみ設置可能

特定のブロックにのみ設置できるアイテムをスポーンします。

```mcfunction
/scriptevent capi:spawn_item {
    "item": "minecraft:stone",
    "can_place_on": ["minecraft:dirt", "minecraft:grass_block"]
}
```

### 特定のブロックのみ破壊可能

特定のブロックのみ破壊できるツールをスポーンします。

```mcfunction
/scriptevent capi:spawn_item {
    "item": "minecraft:wooden_pickaxe",
    "can_destroy": ["minecraft:stone", "minecraft:cobblestone"]
}
```

### 完全にカスタマイズされたアイテム

全ての設定を行ったアイテムをスポーンします。

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
    "clear_velocity": true
}
```

### マクロを使用したアイテム

プレイヤー名を含む名前のアイテムをスポーンします。

```mcfunction
/execute as @a run scriptevent capi:spawn_item {
    "item": "minecraft:diamond",
    "name": "<!name>のダイヤモンド"
}
```

::: !ref ../Macro/Name.md

## よく使われるアイテムID

| アイテム | ID |
|---|---|
| ダイヤモンド | `minecraft:diamond` |
| エメラルド | `minecraft:emerald` |
| 金インゴット | `minecraft:gold_ingot` |
| 鉄インゴット | `minecraft:iron_ingot` |
| ダイヤモンドの剣 | `minecraft:diamond_sword` |
| ダイヤモンドのツルハシ | `minecraft:diamond_pickaxe` |
| ダイヤモンドの斧 | `minecraft:diamond_axe` |
| ダイヤモンドのシャベル | `minecraft:diamond_shovel` |
| エンチャントの本 | `minecraft:enchanted_book` |
| 不死のトーテム | `minecraft:totem_of_undying` |
| ネザライトインゴット | `minecraft:netherite_ingot` |

## エンチャント名

| エンチャント | 名前 |
|---|---|
| 鋭さ | `sharpness` |
| アンデッド特効 | `smite` |
| 虫特効 | `bane_of_arthropods` |
| ノックバック | `knockback` |
| 火属性 | `fire_aspect` |
| ドロップ増加 | `looting` |
| 効率強化 | `efficiency` |
| シルクタッチ | `silk_touch` |
| 耐久力 | `unbreaking` |
| 修繕 | `mending` |

## 注意事項

- `item` パラメータは必須です
- `amount` のデフォルト値は 1 です
- `location` を省略した場合、実行者の位置が使用されます
- `dimension` を省略した場合、実行者のディメンションが使用されます
- `clear_velocity` を true にすると、アイテムが静止した状態でスポーンします
- 無効なアイテムIDを指定するとエラーが発生します
- エンチャントレベルは通常の上限を超えることができます

## 関連項目

- [spawn_entity](./spawn_entity.md) - エンティティをスポーン
- [get_item](./get_item.md) - アイテムを取得
- [set_item](./set_item.md) - アイテムを設定
