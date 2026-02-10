---
title: "playerSpawn"
last_update:
  date: 2025-12-07
  author: Nano191225
---

## 説明
プレイヤーがスポーン（リスポーン）したときにトリガーされるイベントです。初回スポーンとリスポーンを区別できます。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:spawn` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `capi:spawn_initial` | プレイヤーが初回スポーンしたときのみ付与されます。 |

:::info
`capi:spawn_initial`タグは、ワールドに参加するたびに付与されます。
:::

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:spawn_x` | スポーンしたX座標です。 |
| `capi:spawn_y` | スポーンしたY座標です。 |
| `capi:spawn_z` | スポーンしたZ座標です。 |

## 使用例

### 初回参加時のウェルカムメッセージ

初回スポーンしたプレイヤーにウェルカムメッセージを送信する例：

```mcfunction
/execute as @a[tag=capi:spawn_initial] run say ようこそ！
/tag @a remove capi:spawn_initial
```

### 初回参加特典

初めてサーバーに参加したプレイヤーにアイテムを配布する例：

```mcfunction
# スターターキットを配布
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run give @s bread 10
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run give @s wooden_pickaxe 1
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run give @s wooden_axe 1
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run tellraw @s {"rawtext":[{"text":"§aスターターキットを受け取りました！"}]}

# 初回参加記念品
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run give @s diamond 1
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run tellraw @s {"rawtext":[{"text":"§b初回参加特典：ダイヤモンド×1"}]}

/tag @a[tag=capi:spawn_initial,tag=!welcome] add welcome
/tag @a remove capi:spawn_initial
```

### スポーン位置の記録

スポーン位置を記録して管理する例：

```mcfunction
# スポーン位置を記録
/execute as @a[tag=capi:spawn] run scoreboard players operation @s last_spawn_x = @s capi:spawn_x
/execute as @a[tag=capi:spawn] run scoreboard players operation @s last_spawn_y = @s capi:spawn_y
/execute as @a[tag=capi:spawn] run scoreboard players operation @s last_spawn_z = @s capi:spawn_z

# スポーン通知
/execute as @a[tag=capi:spawn] run tellraw @s {"rawtext":[{"text":"§7スポーン位置を記録しました"}]}

/tag @a remove capi:spawn
```

### リスポーン時の効果付与

リスポーン時に一時的な保護効果を付与する例：

```mcfunction
# リスポーン保護
/execute as @a[tag=capi:spawn] run effect give @s resistance 10 4
/execute as @a[tag=capi:spawn] run effect give @s regeneration 5 1
/execute as @a[tag=capi:spawn] run title @s subtitle "§610秒間無敵状態"
/execute as @a[tag=capi:spawn] run title @s title "§eリスポーン保護"
```

### 初回参加チュートリアル

初めてのプレイヤーにチュートリアルを開始する例：

```mcfunction
# チュートリアル開始
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run tp @s 0 100 0
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run tellraw @s {"rawtext":[{"text":"§6§l===== チュートリアル ====="}]}
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run tellraw @s {"rawtext":[{"text":"§eサーバーへようこそ！"}]}
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run tellraw @s {"rawtext":[{"text":"§e基本的な操作を学びましょう。"}]}
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run tag @s add tutorial_mode
# チュートリアルフラグを設定
/execute as @a[tag=capi:spawn_initial,tag=!welcome] run scoreboard players set @s tutorial_step 1

/tag @a[tag=capi:spawn_initial,tag=!welcome] add welcome
/tag @a remove capi:spawn_initial
```

### スポーン回数のカウント

スポーン回数を記録する例：

```mcfunction
# スポーン回数をカウント
/execute as @a[tag=capi:spawn] run scoreboard players add @s spawn_count 1

# マイルストーン
/execute as @a[tag=capi:spawn,scores={spawn_count=10}] run tellraw @s {"rawtext":[{"text":"§a10回目のスポーン！"}]}
/execute as @a[tag=capi:spawn,scores={spawn_count=100}] run tellraw @s {"rawtext":[{"text":"§6100回目のスポーン達成！"}]}
```

### 初回参加時のルール表示

サーバールールを表示する例：

```mcfunction
/execute as @a[tag=capi:spawn_initial] run tellraw @s {"rawtext":[{"text":"§c§l===== サーバールール ====="}]}
/execute as @a[tag=capi:spawn_initial] run tellraw @s {"rawtext":[{"text":"§f1. 他のプレイヤーを尊重しましょう"}]}
/execute as @a[tag=capi:spawn_initial] run tellraw @s {"rawtext":[{"text":"§f2. グリーフィング禁止"}]}
/execute as @a[tag=capi:spawn_initial] run tellraw @s {"rawtext":[{"text":"§f3. チート・改造クライアント禁止"}]}
/execute as @a[tag=capi:spawn_initial] run tellraw @s {"rawtext":[{"text":"§a4. 楽しくプレイしましょう！"}]}

# ルール確認フラグ
/execute as @a[tag=capi:spawn_initial] run tag @s add rules_shown
```

### ランダムスポーン地点システム

初回スポーン時にランダムな場所にテレポートする例：

```mcfunction
# ランダムスポーン（spreadplayersコマンドを使用）
/execute as @a[tag=capi:spawn_initial] run spreadplayers 0 0 100 500 @s
/execute as @a[tag=capi:spawn_initial] run tellraw @s {"rawtext":[{"text":"§eランダムな場所にスポーンしました！"}]}

# または特定の複数地点から選択
/execute as @a[tag=capi:spawn_initial] run scriptevent capi:run tp @s <!match=[<!calc=floor(rand() * 4)>, 100 64 100, -100 64 100, 100 64 -100, -100 64 -100]>
```

:::tip
`<!calc=floor(rand() * 4)>` は0から3のランダムな整数を生成します。
:::

::: !ref ../Macro/Match

### スポーン時の状態リセット

リスポーン時にプレイヤーの状態をリセットする例：

```mcfunction
# 体力を全回復
/execute as @a[tag=capi:spawn] run effect give @s instant_health 1 10

# 空腹度を回復
/execute as @a[tag=capi:spawn] run effect give @s saturation 1 10

# 全ての負の効果を削除
/execute as @a[tag=capi:spawn] run effect clear @s

# インベントリのクリア（初回のみ）
/execute as @a[tag=capi:spawn_initial] run clear @s
```

### PvPアリーナでのリスポーン管理

アリーナでのリスポーンを管理する例：

```mcfunction
# アリーナ内でのスポーン
/execute as @a[tag=capi:spawn,scores={capi:spawn_x=-100..100,capi:spawn_z=-100..100}] run gamemode adventure @s
/execute as @a[tag=capi:spawn,scores={capi:spawn_x=-100..100,capi:spawn_z=-100..100}] run give @s iron_sword 1
/execute as @a[tag=capi:spawn,scores={capi:spawn_x=-100..100,capi:spawn_z=-100..100}] run give @s bow 1
/execute as @a[tag=capi:spawn,scores={capi:spawn_x=-100..100,capi:spawn_z=-100..100}] run give @s arrow 32
/execute as @a[tag=capi:spawn,scores={capi:spawn_x=-100..100,capi:spawn_z=-100..100}] run tellraw @s {"rawtext":[{"text":"§c§lアリーナバトルスタート！"}]}
```
