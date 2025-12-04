---
title: "itemUse"
---

## 説明
プレイヤーがアイテムを使用したときにトリガーされるイベントです。使用したアイテムの詳細情報を取得できます。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:item_use` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `item_use.id:{アイテムID}` | 使用したアイテムのIDがタグとして付与されます。 |
| `item_use.name:{アイテム名}` | 使用したアイテムの名前がタグとして付与されます。 |
| `item_use.amount:{個数}` | 使用したアイテムの個数がタグとして付与されます。 |
| `item_use.lore:{説明文}` | 使用したアイテムの説明文（Lore）がタグとして付与されます。 |

## 使用例

### 基本的な検出

特定のアイテムを使用したプレイヤーを検出する例：

```mcfunction
execute as @a[tag=capi:item_use] run say アイテムを使用しました！
```

### 特定アイテムの使用検出

特定のアイテムが使用されたときの処理：

```mcfunction
# エンダーパールの使用
execute as @a[tag=item_use.id:minecraft:ender_pearl] run tellraw @s {"text":"エンダーパールでテレポート！","color":"dark_purple"}

# ポーションの使用
execute as @a[tag=item_use.id:minecraft:potion] run tellraw @s {"text":"ポーションを飲みました","color":"light_purple"}

# 盾の使用
execute as @a[tag=item_use.id:minecraft:shield] run scoreboard players add @s shield_uses 1
```

### カスタムアイテムの検出

名前付きアイテムの使用を検出する例：

```mcfunction
# 「魔法の杖」という名前のアイテム
execute as @a[tag=item_use.name:魔法の杖] run summon lightning_bolt ~ ~ ~
execute as @a[tag=item_use.name:魔法の杖] run tellraw @s {"text":"魔法の杖の力を解放した！","color":"gold","bold":true}

# 「回復の薬」という名前のアイテム
execute as @a[tag=item_use.name:回復の薬] run effect give @s instant_health 1 2
execute as @a[tag=item_use.name:回復の薬] run effect give @s regeneration 10 1
```

### アイテム使用回数の記録

特定のアイテムの使用回数をカウントする例：

```mcfunction
# エンダーパール使用回数
execute as @a[tag=item_use.id:minecraft:ender_pearl] run scoreboard players add @s ender_pearl_uses 1
execute as @a[tag=item_use.id:minecraft:ender_pearl,scores={ender_pearl_uses=100}] run tellraw @s {"text":"エンダーパール使用100回達成！","color":"dark_purple"}

# トーテム使用回数
execute as @a[tag=item_use.id:minecraft:totem_of_undying] run scoreboard players add @s totem_uses 1
execute as @a[tag=item_use.id:minecraft:totem_of_undying] run tellraw @a [{"selector":"@s"},{"text":" がトーテムを使用しました！","color":"gold"}]
```

### クールダウンシステム

アイテムの使用にクールダウンを設定する例：

```mcfunction
# エンダーパールのクールダウン（10秒）
execute as @a[tag=item_use.id:minecraft:ender_pearl,scores={pearl_cooldown=0}] run scoreboard players set @s pearl_cooldown 200
execute as @a[tag=item_use.id:minecraft:ender_pearl,scores={pearl_cooldown=1..}] run tellraw @s {"text":"エンダーパールはクールダウン中です","color":"red"}
execute as @a[tag=item_use.id:minecraft:ender_pearl,scores={pearl_cooldown=1..}] run give @s ender_pearl 1

# クールダウンを減らす（毎ティック実行）
scoreboard players remove @a[scores={pearl_cooldown=1..}] pearl_cooldown 1
```

### スキルシステム

アイテム使用でスキルを発動する例：

```mcfunction
# ファイアボール（火薬使用）
execute as @a[tag=item_use.id:minecraft:gunpowder] run summon fireball ^ ^1 ^3 {direction:[0.0,-0.1,0.0],power:[0.0,0.0,0.1]}
execute as @a[tag=item_use.id:minecraft:gunpowder] run playsound entity.blaze.shoot @s
execute as @a[tag=item_use.id:minecraft:gunpowder] run tellraw @s {"text":"ファイアボール！","color":"red","bold":true}

# テレポート（エンダーアイ使用）
execute as @a[tag=item_use.id:minecraft:ender_eye] run tp @s ^ ^ ^10
execute as @a[tag=item_use.id:minecraft:ender_eye] run particle portal ~ ~ ~ 1 1 1 1 100
execute as @a[tag=item_use.id:minecraft:ender_eye] run playsound entity.enderman.teleport @s
```

### Lore（説明文）を使った特殊効果

特定の説明文を持つアイテムの使用を検出する例：

```mcfunction
# 「レジェンダリー」と説明に書かれたアイテム
execute as @a[tag=item_use.lore:レジェンダリー] run effect give @s strength 60 1
execute as @a[tag=item_use.lore:レジェンダリー] run effect give @s speed 60 1
execute as @a[tag=item_use.lore:レジェンダリー] run tellraw @s {"text":"レジェンダリーアイテムの力を得た！","color":"gold","bold":true}

# 「呪われた」と説明に書かれたアイテム
execute as @a[tag=item_use.lore:呪われた] run effect give @s wither 10 1
execute as @a[tag=item_use.lore:呪われた] run tellraw @s {"text":"呪いを受けた...","color":"dark_gray"}
```

### アイテム個数の検出

使用したアイテムの個数に応じた処理：

```mcfunction
# 64個スタックのアイテムを使用
execute as @a[tag=item_use.amount:64] run tellraw @s {"text":"フルスタックのアイテムを使用しました","color":"yellow"}

# 1個のアイテムを使用
execute as @a[tag=item_use.amount:1] run tellraw @s {"text":"最後のアイテムを使用しました","color":"red"}
```

### 食べ物の消費統計

食べ物の消費を記録する例：

```mcfunction
# りんごを食べた
execute as @a[tag=item_use.id:minecraft:apple] run scoreboard players add @s food_eaten 1
execute as @a[tag=item_use.id:minecraft:apple] run tellraw @s [{"text":"食べた食べ物: ","color":"yellow"},{"score":{"name":"@s","objective":"food_eaten"}}]

# 金のりんごを食べた
execute as @a[tag=item_use.id:minecraft:golden_apple] run scoreboard players add @s golden_apples 1
execute as @a[tag=item_use.id:minecraft:golden_apple] run tellraw @s {"text":"金のりんごを消費！","color":"gold"}
```

### 使い捨てアイテムシステム

アイテムを使用すると消える特殊アイテム：

```mcfunction
# 「瞬間移動の巻物」
execute as @a[tag=item_use.name:瞬間移動の巻物] run tp @s 0 100 0
execute as @a[tag=item_use.name:瞬間移動の巻物] run particle portal ~ ~ ~ 1 2 1 1 200
execute as @a[tag=item_use.name:瞬間移動の巻物] run playsound entity.enderman.teleport @s
execute as @a[tag=item_use.name:瞬間移動の巻物] run tellraw @s {"text":"スポーンにテレポートしました！","color":"light_purple"}
```

### アイテム使用制限

特定の条件下でのみアイテムを使用できるようにする例：

```mcfunction
# VIP専用アイテム
execute as @a[tag=item_use.name:VIP特典,tag=!vip] run tellraw @s {"text":"このアイテムはVIP専用です","color":"red"}
execute as @a[tag=item_use.name:VIP特典,tag=!vip] run give @s paper{display:{Name:'{"text":"VIP特典"}'}} 1

# 特定エリアでのみ使用可能
execute as @a[tag=item_use.name:エリア限定アイテム,scores={capi:location_x=100..200}] run tellraw @s {"text":"アイテムを使用しました","color":"green"}
execute as @a[tag=item_use.name:エリア限定アイテム,scores={capi:location_x=..99}] run tellraw @s {"text":"このエリアでは使用できません","color":"red"}
execute as @a[tag=item_use.name:エリア限定アイテム,scores={capi:location_x=..99}] run give @s paper{display:{Name:'{"text":"エリア限定アイテム"}'}} 1
```
