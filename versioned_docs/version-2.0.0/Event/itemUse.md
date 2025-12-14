---
title: "itemUse"
last_update:
  date: 2025-12-07
  author: Nano191225
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
/execute as @a[tag=capi:item_use] run say アイテムを使用しました！
/tag @a remove capi:item_use
```

### 特定アイテムの使用検出

特定のアイテムが使用されたときの処理：

```mcfunction
# エンダーパールの使用
/execute as @a[tag=item_use.id:minecraft:ender_pearl] run tellraw @s {"rawtext":[{"text":"§5エンダーパールでテレポート！"}]}
/tag @a remove item_use.id:minecraft:ender_pearl

# ポーションの使用
/execute as @a[tag=item_use.id:minecraft:potion] run tellraw @s {"rawtext":[{"text":"§dポーションを飲みました"}]}
/tag @a remove item_use.id:minecraft:potion

# 盾の使用
/execute as @a[tag=item_use.id:minecraft:shield] run scoreboard players add @s shield_uses 1
/tag @a remove item_use.id:minecraft:shield
```

### カスタムアイテムの検出

名前付きアイテムの使用を検出する例：

```mcfunction
# 「魔法の杖」という名前のアイテム
/execute as @a[tag=item_use.name:魔法の杖] run summon lightning_bolt ~ ~ ~
/execute as @a[tag=item_use.name:魔法の杖] run tellraw @s {"rawtext":[{"text":"§6§l魔法の杖の力を解放した！"}]}
/tag @a remove item_use.name:魔法の杖

# 「回復の薬」という名前のアイテム
/execute as @a[tag=item_use.name:回復の薬] run effect give @s instant_health 1 2
/execute as @a[tag=item_use.name:回復の薬] run effect give @s regeneration 10 1
/tag @a remove item_use.name:回復の薬
```

### アイテム使用回数の記録

特定のアイテムの使用回数をカウントする例：

```mcfunction
# エンダーパール使用回数
/execute as @a[tag=item_use.id:minecraft:ender_pearl] run scoreboard players add @s ender_pearl_uses 1
/execute as @a[tag=item_use.id:minecraft:ender_pearl,scores={ender_pearl_uses=100}] run scriptevent capi:tell <!name> §5がエンダーパール使用100回達成！

# トーテム使用回数
/execute as @a[tag=item_use.id:minecraft:totem_of_undying] run scoreboard players add @s totem_uses 1
/execute as @a[tag=item_use.id:minecraft:totem_of_undying] run scriptevent capi:tell <!name> §6がトーテムを使用しました！
```

### クールダウンシステム

アイテムの使用にクールダウンを設定する例：

```mcfunction
# エンダーパールのクールダウン（10秒）
/execute as @a[tag=item_use.id:minecraft:ender_pearl,scores={pearl_cooldown=0}] run scoreboard players set @s pearl_cooldown 200
/execute as @a[tag=item_use.id:minecraft:ender_pearl,scores={pearl_cooldown=1..}] run tellraw @s {"rawtext":[{"text":"§cエンダーパールはクールダウン中です"}]}
/execute as @a[tag=item_use.id:minecraft:ender_pearl,scores={pearl_cooldown=1..}] run give @s ender_pearl 1

# クールダウンを減らす（毎ティック実行）
scoreboard players remove @a[scores={pearl_cooldown=1..}] pearl_cooldown 1
```

### スキルシステム

アイテム使用でスキルを発動する例：

```mcfunction
# テレポート（エンダーアイ使用）
/execute as @a[tag=item_use.id:minecraft:ender_eye] run tp @s ^ ^ ^10
/execute as @a[tag=item_use.id:minecraft:ender_eye] run particle portal ~ ~ ~
/execute as @a[tag=item_use.id:minecraft:ender_eye] run playsound mob.endermen.portal @s
```

### Lore（説明文）を使った特殊効果

特定の説明文を持つアイテムの使用を検出する例：

```mcfunction
# 「レジェンダリー」と説明に書かれたアイテム
/execute as @a[tag=item_use.lore:レジェンダリー] run effect @s strength 60 1
/execute as @a[tag=item_use.lore:レジェンダリー] run effect @s speed 60 1
/execute as @a[tag=item_use.lore:レジェンダリー] run tellraw @s {"rawtext":[{"text":"§6§lレジェンダリーアイテムの力を得た！"}]}

# 「呪われた」と説明に書かれたアイテム
/execute as @a[tag=item_use.lore:呪われた] run effect @s wither 10 1
/execute as @a[tag=item_use.lore:呪われた] run tellraw @s {"rawtext":[{"text":"§4§l呪われたアイテムの呪いが発動した！"}]}
```

### アイテム個数の検出

使用したアイテムの個数に応じた処理：

```mcfunction
# 64個スタックのアイテムを使用
/execute as @a[tag=item_use.amount:64] run tellraw @s {"rawtext":[{"text":"§eフルスタックのアイテムを使用しました"}]}

# 1個のアイテムを使用
/execute as @a[tag=item_use.amount:1] run tellraw @s {"rawtext":[{"text":"§c最後のアイテムを使用しました"}]}
```

### 食べ物の消費統計

食べ物の消費を記録する例：

```mcfunction
# りんごを食べた
/execute as @a[tag=item_use.id:minecraft:apple] run scoreboard players add @s food_eaten 1
/execute as @a[tag=item_use.id:minecraft:apple] run tellraw @s {"rawtext":[{"text":"§e食べ物を食べました"}]}

# 金のりんごを食べた
/execute as @a[tag=item_use.id:minecraft:golden_apple] run scoreboard players add @s golden_apples 1
/execute as @a[tag=item_use.id:minecraft:golden_apple] run tellraw @s {"rawtext":[{"text":"§6金のりんごを消費！"}]}
```

### 使い捨てアイテムシステム

アイテムを使用すると消える特殊アイテム：

```mcfunction
# 「瞬間移動の巻物」
/execute as @a[tag=item_use.name:瞬間移動の巻物] run tp @s 0 100 0
/execute as @a[tag=item_use.name:瞬間移動の巻物] run particle portal ~ ~ ~
/execute as @a[tag=item_use.name:瞬間移動の巻物] run playsound mob.endermen.portal @s
/execute as @a[tag=item_use.name:瞬間移動の巻物] run tellraw @s {"rawtext":[{"text":"§dスポーンにテレポートしました！"}]}
```

### アイテム使用制限

特定の条件下でのみアイテムを使用できるようにする例：

```mcfunction
# VIP専用アイテム
/execute as @a[tag=item_use.name:VIP特典,tag=!vip] run tellraw @s {"rawtext":[{"text":"§cこのアイテムはVIP専用です"}]}

# 特定エリアでのみ使用可能
/execute as @a[tag=item_use.name:エリア限定アイテム,scores={capi:location_x=100..200}] run tellraw @s {"rawtext":[{"text":"§aアイテムを使用しました"}]}
/execute as @a[tag=item_use.name:エリア限定アイテム,scores={capi:location_x=!100..200}] run tellraw @s {"rawtext":[{"text":"§cこのエリアでは使用できません"}]}
```
