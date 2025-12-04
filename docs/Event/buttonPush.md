---
title: "buttonPush"
last_update:
  date: 2025-12-04
  author: Copilot
---

## 説明
プレイヤーがボタンを押したときにトリガーされるイベントです。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:button` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:button_x` | プレイヤーが押したボタンのX座標です。 |
| `capi:button_y` | プレイヤーが押したボタンのY座標です。 |
| `capi:button_z` | プレイヤーが押したボタンのZ座標です。 |

## 使用例

### 基本的な検出

ボタンを押したプレイヤーにメッセージを送信する例：

```mcfunction
/execute as @a[tag=capi:button] run say ボタンを押しました！
```

### 特定座標のボタン検出

特定の座標にあるボタンを押したときの処理：

```mcfunction
# スポーン地点のボタン（座標: 0, 64, 0）
/execute as @a[tag=capi:button,scores={capi:button_x=0,capi:button_y=64,capi:button_z=0}] run tp @s 100 64 100
/execute as @a[tag=capi:button,scores={capi:button_x=0,capi:button_y=64,capi:button_z=0}] run tellraw @s "§aワープしました！"

# ショップのボタン（座標: 50, 64, 50）
/execute as @a[tag=capi:button,scores={capi:button_x=50,capi:button_y=64,capi:button_z=50}] run tellraw @s "§6ショップへようこそ！"
```

### ドアシステム

ボタンでドアを開閉する例：

```mcfunction
# ボタンでドアを開く（座標範囲指定）
/execute as @a[tag=capi:button,scores={capi:button_x=10,capi:button_y=64,capi:button_z=10}] run fill 10 64 11 10 66 11 air
/execute as @a[tag=capi:button,scores={capi:button_x=10,capi:button_y=64,capi:button_z=10}] run tellraw @s "§aドアを開きました"
/execute as @a[tag=capi:button,scores={capi:button_x=10,capi:button_y=64,capi:button_z=10}] run playsound block.iron_door.open @s

# 5秒後にドアを閉じる（100ティック = 5秒）
/execute as @a[tag=capi:button,scores={capi:button_x=10,capi:button_y=64,capi:button_z=10}] run scriptevent capi:delay {ticks=100,command=fill 10 64 11 10 66 11 stone}
```

### ミニゲーム開始ボタン

ボタンでミニゲームを開始する例：

```mcfunction
# ゲーム開始ボタン
/execute as @a[tag=capi:button,scores={capi:button_x=0,capi:button_y=70,capi:button_z=0}] run tellraw @a "§6§lミニゲームを開始します！"
/execute as @a[tag=capi:button,scores={capi:button_x=0,capi:button_y=70,capi:button_z=0}] run scoreboard players set game_status active 1
/execute as @a[tag=capi:button,scores={capi:button_x=0,capi:button_y=70,capi:button_z=0}] run tp @a[tag=player] 0 80 0
/execute as @a[tag=capi:button,scores={capi:button_x=0,capi:button_y=70,capi:button_z=0}] run gamemode adventure @a[tag=player]
```

### 投票システム

ボタンで投票を集める例：

```mcfunction
# 賛成ボタン（座標: 10, 64, 0）
/execute as @a[tag=capi:button,scores={capi:button_x=10,capi:button_y=64,capi:button_z=0}] run scoreboard players add vote yes 1
/execute as @a[tag=capi:button,scores={capi:button_x=10,capi:button_y=64,capi:button_z=0}] run tellraw @s "§a賛成票を投じました"

# 反対ボタン（座標: -10, 64, 0）
/execute as @a[tag=capi:button,scores={capi:button_x=-10,capi:button_y=64,capi:button_z=0}] run scoreboard players add vote no 1
/execute as @a[tag=capi:button,scores={capi:button_x=-10,capi:button_y=64,capi:button_z=0}] run tellraw @s "§c反対票を投じました"

# 投票結果を表示（スコアボード表示を使用）
/execute as @a[tag=capi:button] run scoreboard objectives setdisplay sidebar vote
```

### エレベーターシステム

複数階へのワープボタン：

```mcfunction
# 1階ボタン（Y=64）
/execute as @a[tag=capi:button,scores={capi:button_y=64}] run tp @s ~ 64 ~
/execute as @a[tag=capi:button,scores={capi:button_y=64}] run tellraw @s "§a1階に移動しました"

# 2階ボタン（Y=70）
/execute as @a[tag=capi:button,scores={capi:button_y=70}] run tp @s ~ 70 ~
/execute as @a[tag=capi:button,scores={capi:button_y=70}] run tellraw @s "§a2階に移動しました"

# 3階ボタン（Y=76）
/execute as @a[tag=capi:button,scores={capi:button_y=76}] run tp @s ~ 76 ~
/execute as @a[tag=capi:button,scores={capi:button_y=76}] run tellraw @s "§a3階に移動しました"
```

### クールダウンシステム

ボタンの連打を防ぐクールダウン：

```mcfunction
# ボタンを押したプレイヤーにクールダウンを設定
/execute as @a[tag=capi:button,scores={button_cooldown=0}] run tellraw @s "§a機能を実行しました"
/execute as @a[tag=capi:button,scores={button_cooldown=0}] run scoreboard players set @s button_cooldown 100

# クールダウン中のプレイヤー
/execute as @a[tag=capi:button,scores={button_cooldown=1..}] run tellraw @s "§cクールダウン中です..."

# クールダウンを減らす（別の関数で毎ティック実行）
scoreboard players remove @a[scores={button_cooldown=1..}] button_cooldown 1
```

### 報酬ボタン

ボタンを押すと報酬がもらえる例：

```mcfunction
# デイリー報酬ボタン
/execute as @a[tag=capi:button,scores={capi:button_x=20,capi:button_y=64,capi:button_z=20,daily_claimed=0}] run give @s diamond 1
/execute as @a[tag=capi:button,scores={capi:button_x=20,capi:button_y=64,capi:button_z=20,daily_claimed=0}] run tellraw @s "§6デイリー報酬を受け取りました！"
/execute as @a[tag=capi:button,scores={capi:button_x=20,capi:button_y=64,capi:button_z=20,daily_claimed=0}] run scoreboard players set @s daily_claimed 1

# 既に受け取り済み
/execute as @a[tag=capi:button,scores={capi:button_x=20,capi:button_y=64,capi:button_z=20,daily_claimed=1}] run tellraw @s "§c今日の報酬は既に受け取りました"
```

### セキュリティドア

特定の権限を持つプレイヤーのみ開けられるドア：

```mcfunction
# VIPエリアのボタン
/execute as @a[tag=capi:button,scores={capi:button_x=30,capi:button_y=64,capi:button_z=30},tag=vip] run tp @s 35 64 35
/execute as @a[tag=capi:button,scores={capi:button_x=30,capi:button_y=64,capi:button_z=30},tag=vip] run tellraw @s "§6VIPエリアへようこそ"

# VIPでない場合
/execute as @a[tag=capi:button,scores={capi:button_x=30,capi:button_y=64,capi:button_z=30},tag=!vip] run tellraw @s "§cこのエリアにはVIP権限が必要です"
/execute as @a[tag=capi:button,scores={capi:button_x=30,capi:button_y=64,capi:button_z=30},tag=!vip] run playsound block.note_block.bass @s
```

### カウンターシステム

ボタンが押された回数をカウント：

```mcfunction
# 特定のボタンの押下回数をカウント
/execute as @a[tag=capi:button,scores={capi:button_x=0,capi:button_y=64,capi:button_z=10}] run scoreboard players add button_counter count 1
/execute as @a[tag=capi:button,scores={capi:button_x=0,capi:button_y=64,capi:button_z=10}] run tellraw @a "§eボタンが押されました"

# 100回でイベント発生
/execute if score button_counter count matches 100 run tellraw @a "§6§l100回達成！特別イベント開始！"
/execute if score button_counter count matches 100 run scoreboard players set button_counter count 0
```
