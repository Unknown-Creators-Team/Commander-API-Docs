---
title: "playerPlaceBlock"
---

## 説明
プレイヤーがブロックを設置したときにトリガーされるイベントです。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:place` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `place:{ブロックID}` | 設置したブロックのIDがタグとして付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:place_x` | 設置したブロックのX座標です。 |
| `capi:place_y` | 設置したブロックのY座標です。 |
| `capi:place_z` | 設置したブロックのZ座標です。 |

## 使用例

### 基本的な検出

特定のブロックを設置したプレイヤーを検出する例：

```mcfunction
execute as @a[tag=place:minecraft:tnt] run say TNTを設置しました！
```

### 危険ブロックの監視

危険なブロックの設置を検出して警告する例：

```mcfunction
# TNTの設置を警告
execute as @a[tag=place:minecraft:tnt] run tellraw @a [{"selector":"@s"},{"text":" がTNTを設置しました！","color":"red"}]
execute as @a[tag=place:minecraft:tnt] run playsound block.note_block.pling @a ~ ~ ~ 1 0.5

# 溶岩の設置を記録
execute as @a[tag=place:minecraft:lava] run scoreboard players add @s lava_placed 1
execute as @a[tag=place:minecraft:lava] run tellraw @s {"text":"溶岩設置注意！周囲に注意してください","color":"gold"}

# 火の設置を制限
execute as @a[tag=place:minecraft:fire] run tellraw @s {"text":"火の設置は禁止されています","color":"red"}
execute as @a[tag=place:minecraft:fire] run fill ~ ~ ~ ~ ~ ~ air replace fire
```

### 建築統計の記録

設置したブロックの統計を記録する例：

```mcfunction
# 全てのブロック設置をカウント
execute as @a[tag=capi:place] run scoreboard players add @s blocks_placed 1

# マイルストーン達成
execute as @a[tag=capi:place,scores={blocks_placed=1000}] run tellraw @s {"text":"1000ブロック設置達成！","color":"gold","bold":true}
execute as @a[tag=capi:place,scores={blocks_placed=10000}] run tellraw @s {"text":"10000ブロック設置達成！マスタービルダー！","color":"gold","bold":true}

# 特定ブロックのカウント
execute as @a[tag=place:minecraft:stone_bricks] run scoreboard players add @s stone_bricks_placed 1
execute as @a[tag=place:minecraft:oak_planks] run scoreboard players add @s planks_placed 1
```

### 保護エリアでの設置制限

特定エリアでのブロック設置を制限する例：

```mcfunction
# スポーンエリアでの設置を禁止（座標: -50~50, Y: 60~100, -50~50）
execute as @a[tag=capi:place,scores={capi:place_x=-50..50,capi:place_y=60..100,capi:place_z=-50..50}] run fill ~ ~ ~ ~ ~ ~ air
execute as @a[tag=capi:place,scores={capi:place_x=-50..50,capi:place_y=60..100,capi:place_z=-50..50}] run tellraw @s {"text":"スポーンエリアでは建築できません","color":"red"}

# VIPエリアでの設置許可
execute as @a[tag=capi:place,tag=!vip,scores={capi:place_x=100..200,capi:place_z=100..200}] run fill ~ ~ ~ ~ ~ ~ air
execute as @a[tag=capi:place,tag=!vip,scores={capi:place_x=100..200,capi:place_z=100..200}] run tellraw @s {"text":"このエリアはVIP専用です","color":"red"}
```

### 自動建築アシスト

ブロック設置時に便利な機能を提供する例：

```mcfunction
# 松明を設置すると周囲も明るくする
execute as @a[tag=place:minecraft:torch] run fill ~-2 ~ ~-2 ~2 ~ ~2 torch replace air
execute as @a[tag=place:minecraft:torch] run tellraw @s {"text":"周囲に松明を自動設置しました","color":"yellow"}

# ガラスを設置すると自動的に窓枠を作る
execute as @a[tag=place:minecraft:glass] run fill ~-1 ~ ~ ~1 ~ ~ oak_planks
execute as @a[tag=place:minecraft:glass] run fill ~ ~-1 ~ ~ ~1 ~ oak_planks
```

### 建築コンテストシステム

建築コンテスト用のブロック設置カウント：

```mcfunction
# コンテスト中のブロック設置をカウント
execute as @a[tag=capi:place,tag=contest_participant] run scoreboard players add @s contest_blocks 1
execute as @a[tag=capi:place,tag=contest_participant] run title @s actionbar [{"text":"設置ブロック数: ","color":"gold"},{"score":{"name":"@s","objective":"contest_blocks"},"color":"yellow"}]

# 使用可能なブロック制限
execute as @a[tag=capi:place,tag=contest_participant,scores={contest_blocks=1000..}] run tellraw @s {"text":"ブロック設置上限に達しました","color":"red"}
execute as @a[tag=capi:place,tag=contest_participant,scores={contest_blocks=1000..}] run fill ~ ~ ~ ~ ~ ~ air
```

### クリエイティブモード制限

サバイバルでの特定ブロック設置を制限：

```mcfunction
# クリエイティブ限定ブロック
execute as @a[tag=place:minecraft:bedrock,gamemode=!creative] run fill ~ ~ ~ ~ ~ ~ air
execute as @a[tag=place:minecraft:bedrock,gamemode=!creative] run tellraw @s {"text":"岩盤はクリエイティブモードでのみ設置できます","color":"red"}

execute as @a[tag=place:minecraft:barrier,gamemode=!creative] run fill ~ ~ ~ ~ ~ ~ air
execute as @a[tag=place:minecraft:barrier,gamemode=!creative] run tellraw @s {"text":"バリアブロックはクリエイティブモードでのみ設置できます","color":"red"}
```

### 設置位置の記録

重要なブロックの設置位置を記録する例：

```mcfunction
# ビーコンの設置位置を記録
execute as @a[tag=place:minecraft:beacon] run tellraw @a [{"text":"[ビーコン設置] ","color":"aqua","bold":true},{"selector":"@s"},{"text":" が座標 "},{"score":{"name":"@s","objective":"capi:place_x"}},{"text":", "},{"score":{"name":"@s","objective":"capi:place_y"}},{"text":", "},{"score":{"name":"@s","objective":"capi:place_z"}},{"text":" にビーコンを設置しました"}]

# チェストの設置を記録
execute as @a[tag=place:minecraft:chest] run scoreboard players add @s chests_placed 1
execute as @a[tag=place:minecraft:chest] run tellraw @s [{"text":"チェスト設置数: ","color":"yellow"},{"score":{"name":"@s","objective":"chests_placed"}}]
```

### 季節イベント用の設置制限

特定の期間のみ設置可能なブロック：

```mcfunction
# クリスマスイベント期間のみ設置可能
execute as @a[tag=place:minecraft:snow_block,scores={event_christmas=0}] run fill ~ ~ ~ ~ ~ ~ air
execute as @a[tag=place:minecraft:snow_block,scores={event_christmas=0}] run tellraw @s {"text":"雪ブロックはクリスマスイベント期間のみ設置できます","color":"red"}

# イベント期間中
execute as @a[tag=place:minecraft:snow_block,scores={event_christmas=1}] run tellraw @s {"text":"素敵なクリスマスデコレーション！","color":"aqua"}
```

### 設置禁止ブロックリスト

グリーフィング防止のためのブロック制限：

```mcfunction
# 設置禁止ブロック
execute as @a[tag=place:minecraft:tnt] run fill ~ ~ ~ ~ ~ ~ air
execute as @a[tag=place:minecraft:obsidian] run fill ~ ~ ~ ~ ~ ~ air
execute as @a[tag=place:minecraft:water] run fill ~ ~ ~ ~ ~ ~ air
execute as @a[tag=place:minecraft:lava] run fill ~ ~ ~ ~ ~ ~ air

# 違反を記録
execute as @a[tag=place:minecraft:tnt] run scoreboard players add @s violations 1
execute as @a[tag=place:minecraft:tnt] run tellraw @s {"text":"警告：禁止ブロックの設置が検出されました","color":"red","bold":true}
```

### 資材使用効率の追跡

設置したブロックの価値を計算する例：

```mcfunction
# ダイヤモンドブロックの設置
execute as @a[tag=place:minecraft:diamond_block] run scoreboard players add @s wealth 9000
execute as @a[tag=place:minecraft:diamond_block] run tellraw @s [{"text":"資産価値: ","color":"aqua"},{"score":{"name":"@s","objective":"wealth"},"color":"gold"}]

# 金ブロックの設置
execute as @a[tag=place:minecraft:gold_block] run scoreboard players add @s wealth 1000

# エメラルドブロックの設置
execute as @a[tag=place:minecraft:emerald_block] run scoreboard players add @s wealth 2000
```

### 自動アイテム返却

誤設置時に自動でアイテムを返却する例：

```mcfunction
# 水中での松明設置を防止してアイテムを返却
execute as @a[tag=place:minecraft:torch] if block ~ ~ ~ water run give @s torch 1
execute as @a[tag=place:minecraft:torch] if block ~ ~ ~ water run fill ~ ~ ~ ~ ~ ~ air replace torch
execute as @a[tag=place:minecraft:torch] if block ~ ~ ~ water run tellraw @s {"text":"水中に松明は設置できません","color":"yellow"}
```
