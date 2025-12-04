---
title: "playerBreakBlock"
---

## 説明
プレイヤーがブロックを破壊したときにトリガーされるイベントです。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:break` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `break:{ブロックID}` | 破壊したブロックのIDがタグとして付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:break_x` | 破壊したブロックのX座標です。 |
| `capi:break_y` | 破壊したブロックのY座標です。 |
| `capi:break_z` | 破壊したブロックのZ座標です。 |

## 使用例

### 基本的な検出

特定のブロックを破壊したプレイヤーを検出する例：

```mcfunction
/execute as @a[tag=break:minecraft:diamond_ore] run say ダイヤモンド鉱石を破壊しました！
```

### 複数のブロックタイプの検出

貴重な鉱石を破壊したプレイヤーを検出する例：

```mcfunction
/execute as @a[tag=break:minecraft:diamond_ore] run tellraw @s "§bダイヤモンド鉱石を発見！"
/execute as @a[tag=break:minecraft:emerald_ore] run tellraw @s "§aエメラルド鉱石を発見！"
/execute as @a[tag=break:minecraft:ancient_debris] run tellraw @s "§6古代の残骸を発見！"
```

### 座標情報の利用

破壊したブロックの座標を記録する例：

```mcfunction
# 座標を記録（スコアボードで管理）
/execute as @a[tag=capi:break] run tellraw @s "§eブロック破壊位置を記録しました"
```

### 特定エリアでの破壊を検出

Y座標を使って地下での採掘を検出する例：

```mcfunction
# 深い場所での採掘
/execute as @a[tag=capi:break,scores={capi:break_y=..16}] run title @s actionbar "§5深層採掘中..."

# 地表での作業
/execute as @a[tag=capi:break,scores={capi:break_y=60..}] run title @s actionbar "§a地表作業中"
```

### ブロック破壊カウンター

特定のブロックの破壊数をカウントする例：

```mcfunction
# 石ブロック破壊カウント
/execute as @a[tag=break:minecraft:stone] run scoreboard players add @s stone_broken 1
/execute as @a[tag=break:minecraft:stone,scores={stone_broken=1000..}] run tellraw @s "§6石ブロック1000個破壊達成！"

# 原木破壊カウント
/execute as @a[tag=break:minecraft:oak_log] run scoreboard players add @s wood_broken 1
/execute as @a[tag=break:minecraft:birch_log] run scoreboard players add @s wood_broken 1
/execute as @a[tag=break:minecraft:spruce_log] run scoreboard players add @s wood_broken 1
```

### 禁止ブロックの破壊検出

特定のブロックの破壊を制限する例：

```mcfunction
# スポーナーの破壊を検出
/execute as @a[tag=break:minecraft:spawner] run tellraw @s "§c警告：スポーナーを破壊しました！"
/execute as @a[tag=break:minecraft:spawner] run scoreboard players add @s warning 1

# 重要な建築物の保護
/execute as @a[tag=break:minecraft:bedrock] run tellraw @a [{"selector":"@s"},"§c が岩盤を破壊しようとしました！"]
```

### 実績システムとの連携

ブロック破壊に基づく実績を付与する例：

```mcfunction
# 初めてのダイヤモンド
/execute as @a[tag=break:minecraft:diamond_ore,scores={diamond_found=0}] run tellraw @s "§b§l実績解除：最初のダイヤモンド！"
/execute as @a[tag=break:minecraft:diamond_ore] run scoreboard players add @s diamond_found 1

# マスターマイナー
/execute as @a[tag=capi:break,scores={total_blocks_broken=10000}] run tellraw @s "§6§l実績解除：マスターマイナー（10000ブロック破壊）"
```

### 時間帯による制限

特定の時間帯のみ特定のブロックの破壊を許可する例：

```mcfunction
# 夜間のみ特殊鉱石を破壊可能
/execute as @a[tag=break:minecraft:diamond_ore] if predicate {"condition":"minecraft:time_check","value":{"min":13000,"max":23000}} run give @s diamond 1
/execute as @a[tag=break:minecraft:diamond_ore] unless predicate {"condition":"minecraft:time_check","value":{"min":13000,"max":23000}} run tellraw @s "§cこの鉱石は夜間のみ採掘できます"
```

### ツールの使用状況を記録

どのツールで破壊したかを記録する例：

```mcfunction
# ダイヤモンドのピッケルで破壊
/execute as @a[tag=capi:break,nbt={SelectedItem:{id:"minecraft:diamond_pickaxe"}}] run scoreboard players add @s diamond_tool_use 1

# 素手で破壊
/execute as @a[tag=capi:break,nbt=!{SelectedItem:{}}] run tellraw @s "§e素手での破壊は効率が悪いです！"
```
