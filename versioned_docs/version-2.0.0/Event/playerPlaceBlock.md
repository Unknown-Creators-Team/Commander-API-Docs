---
title: "playerPlaceBlock"
last_update:
  date: 2025-12-07
  author: Nano191225
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
/execute as @a[tag=place:minecraft:tnt] run say TNTを設置しました！
/tag @a remove place:minecraft:tnt
```

### 危険ブロックの監視

危険なブロックの設置を検出して警告する例：

```mcfunction
# TNTの設置を警告
/execute as @a[tag=place:minecraft:tnt] run scriptevent capi:say <!name>§c がTNTを設置しました！
/execute as @a[tag=place:minecraft:tnt] run playsound random.pop @a ~ ~ ~ 1 0.5
/tag @a remove place:minecraft:tnt

# 溶岩の設置を記録
/execute as @a[tag=place:minecraft:lava] run scoreboard players add @s lava_placed 1
/execute as @a[tag=place:minecraft:lava] run tellraw @s {"rawtext":[{"text":"§6溶岩設置注意！周囲に注意してください"}]}
/tag @a remove place:minecraft:lava

# TNTの設置を制限
/execute as @a[tag=place:minecraft:tnt] run tellraw @s {"rawtext":[{"text":"§cTNTの設置は禁止されています"}]}
/execute as @a[tag=place:minecraft:tnt] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/tag @a remove place:minecraft:tnt
```

### 建築統計の記録

設置したブロックの統計を記録する例：

```mcfunction
# 全てのブロック設置をカウント
/execute as @a[tag=capi:place] run scoreboard players add @s blocks_placed 1

# マイルストーン達成
/execute as @a[tag=capi:place,scores={blocks_placed=1000}] run tellraw @s {"rawtext":[{"text":"§6§l1000ブロック設置達成！"}]}
/execute as @a[tag=capi:place,scores={blocks_placed=10000}] run tellraw @s {"rawtext":[{"text":"§6§l10000ブロック設置達成！マスタービルダー！"}]}

# 特定ブロックのカウント
/execute as @a[tag=place:minecraft:stone_bricks] run scoreboard players add @s stone_bricks_placed 1
/execute as @a[tag=place:minecraft:oak_planks] run scoreboard players add @s planks_placed 1
```

### 保護エリアでの設置制限

特定エリアでのブロック設置を制限する例：

```mcfunction
# スポーンエリアでの設置を禁止（座標: -50~50, Y: 60~100, -50~50）
/execute as @a[tag=capi:place,scores={capi:place_x=-50..50,capi:place_z=-50..50}] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/execute as @a[tag=capi:place,scores={capi:place_x=-50..50,capi:place_z=-50..50}] run tellraw @s {"rawtext":[{"text":"§cスポーンエリアでは建築できません"}]}

# VIPエリアでの設置許可
/execute as @a[tag=capi:place,tag=!vip,scores={capi:place_x=100..200,capi:place_z=100..200}] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/execute as @a[tag=capi:place,tag=!vip,scores={capi:place_x=100..200,capi:place_z=100..200}] run tellraw @s {"rawtext":[{"text":"§cこのエリアはVIP専用です"}]}
```

### 自動建築アシスト

ブロック設置時に便利な機能を提供する例：

```mcfunction
# 松明を設置したら周囲も明るくする
/execute as @a[tag=place:minecraft:torch] run scriptevent capi:run execute positioned <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> run fill ~-2 ~ ~-2 ~2 ~ ~2 torch replace air
/execute as @a[tag=place:minecraft:torch] run tellraw @s {"rawtext":[{"text":"§e周囲に松明を自動設置しました"}]}

# ガラスを設置すると自動的に窓枠を作る
/execute as @a[tag=place:minecraft:glass] run scriptevent capi:run execute positioned <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> run fill ~-1 ~-1 ~ ~1 ~1 ~ oak_planks keep
```

### 建築コンテストシステム

建築コンテスト用のブロック設置カウント：

```mcfunction
# コンテスト中のブロック設置をカウント
/execute as @a[tag=capi:place,tag=contest_participant] run scoreboard players add @s contest_blocks 1
/execute as @a[tag=capi:place,tag=contest_participant] run title @s actionbar "§6設置ブロック数をカウント中"

# 使用可能なブロック制限
/execute as @a[tag=capi:place,tag=contest_participant,scores={contest_blocks=1000..}] run tellraw @s {"rawtext":[{"text":"§cブロック設置上限に達しました"}]}
/execute as @a[tag=capi:place,tag=contest_participant,scores={contest_blocks=1000..}] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
```

### クリエイティブモード制限

サバイバルでの特定ブロック設置を制限：

```mcfunction
# クリエイティブ限定ブロック
/execute as @a[tag=place:minecraft:bedrock,m=!c] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/execute as @a[tag=place:minecraft:bedrock,m=!c] run tellraw @s {"rawtext":[{"text":"§c岩盤はクリエイティブモードでのみ設置できます"}]}

/execute as @a[tag=place:minecraft:barrier,m=!c] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/execute as @a[tag=place:minecraft:barrier,m=!c] run tellraw @s {"rawtext":[{"text":"§cバリアブロックはクリエイティブモードでのみ設置できます"}]}
```

### 設置位置の記録

重要なブロックの設置位置を記録する例：

```mcfunction
# ビーコンの設置位置を記録
/execute as @a[tag=place:minecraft:beacon] run tellraw @a {"rawtext":[{"text":"§b§lビーコンが設置されました"}]}

# チェストの設置を記録
/execute as @a[tag=place:minecraft:chest] run scoreboard players add @s chests_placed 1
/execute as @a[tag=place:minecraft:chest] run tellraw @s {"rawtext":[{"text":"§eチェストを設置しました"}]}
```

### 季節イベント用の設置制限

特定の期間のみ設置可能なブロック：

```mcfunction
# クリスマスイベント期間のみ設置可能
/execute as @a[tag=place:minecraft:snow_block,scores={event_christmas=0}] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/execute as @a[tag=place:minecraft:snow_block,scores={event_christmas=0}] run tellraw @s {"rawtext":[{"text":"§c雪ブロックはクリスマスイベント期間のみ設置できます"}]}

# イベント期間中
/execute as @a[tag=place:minecraft:snow_block,scores={event_christmas=1}] run tellraw @s {"rawtext":[{"text":"§b素敵なクリスマスデコレーション！"}]}
```

### 設置禁止ブロックリスト

グリーフィング防止のためのブロック制限：

```mcfunction
# 設置禁止ブロック
/execute as @a[tag=place:minecraft:tnt] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/execute as @a[tag=place:minecraft:obsidian] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/execute as @a[tag=place:minecraft:water] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air
/execute as @a[tag=place:minecraft:lava] run scriptevent capi:run setblock <!score=capi:place_x> <!score=capi:place_y> <!score=capi:place_z> air

# 違反を記録
/execute as @a[tag=place:minecraft:tnt] run scoreboard players add @s violations 1
/execute as @a[tag=place:minecraft:tnt] run tellraw @s {"rawtext":[{"text":"§c§l警告：禁止ブロックの設置が検出されました"}]}
```

### 資材使用効率の追跡

設置したブロックの価値を計算する例：

```mcfunction
# ダイヤモンドブロックの設置
/execute as @a[tag=place:minecraft:diamond_block] run scoreboard players add @s wealth 9000
/execute as @a[tag=place:minecraft:diamond_block] run tellraw @s {"rawtext":[{"text":"§b資産価値を記録しました"}]}

# 金ブロックの設置
/execute as @a[tag=place:minecraft:gold_block] run scoreboard players add @s wealth 1000

# エメラルドブロックの設置
/execute as @a[tag=place:minecraft:emerald_block] run scoreboard players add @s wealth 2000
```