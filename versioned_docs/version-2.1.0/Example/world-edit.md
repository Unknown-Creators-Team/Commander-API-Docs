---
title: ワールドエディット
last_update:
  date: 2025-12-09
  author: Nano191225
---

## 仕様

- 左クリック（ブロック破壊）で位置1を設定する。
- 右クリック（アイテム使用）で位置2を設定する。
- 両方の位置が設定されているとき、チャットにブロックIDを送信することで、その範囲を指定したブロックで埋める。

## コマンド

### 初期化

イベントの検知以降は反復で実行する想定です。

一番最初に一度だけ実行するコマンドです。

```mcfunction
/scoreboard objectives add pos1_x dummy
/scoreboard objectives add pos1_y dummy
/scoreboard objectives add pos1_z dummy
/scoreboard objectives add pos2_x dummy
/scoreboard objectives add pos2_y dummy
/scoreboard objectives add pos2_z dummy
```

### イベントの検知

```mcfunction
/tag @a[tag=capi:break,hasitem={item=wooden_axe,location=slot.weapon.mainhand}] add we_pos1
/tag @a[tag=capi:item_use,scores={capi:view_distance=..7},hasitem={item=wooden_axe,location=slot.weapon.mainhand}] add we_pos2
/tag @a remove capi:break
/tag @a remove capi:item_use
```

### 位置1の設定

```mcfunction
/execute as @a[tag=we_pos1] run scoreboard players operation @s pos1_x = @s capi:break_x
/execute as @a[tag=we_pos1] run scoreboard players operation @s pos1_y = @s capi:break_y
/execute as @a[tag=we_pos1] run scoreboard players operation @s pos1_z = @s capi:break_z
/execute as @a[tag=we_pos1] run scriptevent capi:run setblock <!score=pos1_x> <!score=pos1_y> <!score=pos1_z> <!tag=break>
/execute as @a[tag=we_pos1] run scriptevent capi:tell §r[WE] First position set to (<!score=pos1_x>, <!score=pos1_y>, <!score=pos1_z>)
/tag @a[tag=we_pos1] add we_pos1_set
/tag @a[tag=we_pos1] remove we_pos1
```

### 位置2の設定

```mcfunction
/execute as @a[tag=we_pos2] run scoreboard players operation @s pos2_x = @s capi:view_x
/execute as @a[tag=we_pos2] run scoreboard players operation @s pos2_y = @s capi:view_y
/execute as @a[tag=we_pos2] run scoreboard players operation @s pos2_z = @s capi:view_z
/execute as @a[tag=we_pos2] run scriptevent capi:tell §r[WE] Second position set to (<!score=pos2_x>, <!score=pos2_y>, <!score=pos2_z>)
/tag @a[tag=we_pos2] add we_pos2_set
/tag @a[tag=we_pos2] remove we_pos2
```

### チャットでブロック設置

```mcfunction
/execute as @a[tag=capi:chat,tag=we_pos1_set,tag=we_pos2_set] run scriptevent capi:run fill <!score=pos1_x> <!score=pos1_y> <!score=pos1_z> <!score=pos2_x> <!score=pos2_y> <!score=pos2_z> <!tag=chat>
/execute as @a[tag=capi:chat,tag=we_pos1_set,tag=we_pos2_set] run scriptevent capi:tell §r[WE] Filled area from (<!score=pos1_x>, <!score=pos1_y>, <!score=pos1_z>) to (<!score=pos2_x>, <!score=pos2_y>, <!score=pos2_z>)
/tag @a[tag=capi:chat] remove we_pos1_set
/tag @a[tag=capi:chat] remove we_pos2_set
/tag @a remove capi:chat
```