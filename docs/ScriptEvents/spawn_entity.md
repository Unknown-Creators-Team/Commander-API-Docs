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
/scriptevent capi:spawn_entity <JSON形式のパラメータ>
```

## パラメータ

JSON形式でパラメータを指定します：

```json
{
    "id": "エンティティID",
    "name": "名前",
    "location": [x, y, z],
    "dimension": "ディメンション名",
    "set_on_fire": 秒数
}
```

| パラメータ | 説明 | 必須 |
|---|---|---|
| `id` | エンティティID | ✓ |
| `name` | エンティティの名前 | × |
| `location` | スポーン座標 [x, y, z] | × |
| `dimension` | ディメンション名 | × |
| `set_on_fire` | 炎上させる秒数 | × |


## 使用例

### シンプルなスポーン

クリーパーをスポーンします。

```mcfunction
/scriptevent capi:spawn_entity {"id": "minecraft:creeper"}
```

### 名前付きエンティティ

名前を付けてゾンビをスポーンします。

```mcfunction
/scriptevent capi:spawn_entity {"id": "minecraft:zombie", "name": "ボスゾンビ"}
```

### 座標を指定してスポーン

特定の座標にスケルトンをスポーンします。

```mcfunction
/scriptevent capi:spawn_entity {"id": "minecraft:skeleton", "location": [100, 64, 100]}
```

### 相対座標でスポーン

プレイヤーの前方にエンダーマンをスポーンします。

```mcfunction
/execute as @a run scriptevent capi:spawn_entity {"id": "minecraft:enderman", "location": ["~", "~", "~5"]}
```

### 炎上状態でスポーン

炎上した状態でゾンビをスポーンします。

```mcfunction
/scriptevent capi:spawn_entity {"id": "minecraft:zombie", "set_on_fire": 10}
```

### ネザーでスポーン

ネザーディメンションでブレイズをスポーンします。

```mcfunction
/scriptevent capi:spawn_entity {"id": "minecraft:blaze", "location": [0, 64, 0], "dimension": "nether"}
```

### 完全にカスタマイズされたスポーン

全てのオプションを設定してスポーンします。

```mcfunction
/scriptevent capi:spawn_entity {
    "id": "minecraft:wither_skeleton",
    "name": "§4炎の戦士",
    "location": [100, 64, 100],
    "dimension": "overworld",
    "set_on_fire": 999
}
```

### マクロを使用したスポーン

プレイヤー名を含む名前でスポーンします。

```mcfunction
/execute as @a run scriptevent capi:spawn_entity {"id": "minecraft:zombie", "name": "<!name>のゾンビ"}
```

::: !ref ../Macro/Name.md

### 複数のエンティティをスポーン

繰り返しコマンドで複数のエンティティをスポーンします。

```mcfunction
/execute as @a run scriptevent capi:spawn_entity {"id": "minecraft:chicken", "location": ["~", "~", "~"]}
```

## よく使われるエンティティID

| エンティティ | ID |
|---|---|
| クリーパー | `minecraft:creeper` |
| ゾンビ | `minecraft:zombie` |
| スケルトン | `minecraft:skeleton` |
| エンダーマン | `minecraft:enderman` |
| ウィザースケルトン | `minecraft:wither_skeleton` |
| ブレイズ | `minecraft:blaze` |
| ガスト | `minecraft:ghast` |
| ファントム | `minecraft:phantom` |
| ウィザー | `minecraft:wither` |
| エンダードラゴン | `minecraft:ender_dragon` |
| 牛 | `minecraft:cow` |
| 豚 | `minecraft:pig` |
| 羊 | `minecraft:sheep` |
| 鶏 | `minecraft:chicken` |
| 馬 | `minecraft:horse` |
| オウム | `minecraft:parrot` |
| 村人 | `minecraft:villager` |
| アイアンゴーレム | `minecraft:iron_golem` |

## 注意事項

- `id` パラメータは必須です
- `location` を省略した場合、実行者の位置が使用されます
- 実行者がいない場合、`location` の省略時は [0, 0, 0] が使用されます
- `dimension` を省略した場合、実行者のディメンションが使用されます
- `set_on_fire` は秒数で指定します（1秒 = 20tick）
- 無効なエンティティIDを指定するとエラーが発生します

## 関連項目

- [spawn_item](./spawn_item.md) - アイテムをスポーン
- [explosion](./explosion.md) - 爆発を生成
- [tp](./tp.md) - エンティティをテレポート
