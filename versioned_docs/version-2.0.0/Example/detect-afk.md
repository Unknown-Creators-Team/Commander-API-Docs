---
title: "AFK検知"
last_update:
  date: 2025-12-09
  author: arutaka1220
---


## 仕様

- `capi:velocity_xyz` を用いて、プレイヤーが動いているか確認する
- プレイヤーが30秒止まっていたら `afk` タグを付与する
- 30秒のカウントには `detect_afk` スコアボードを作成し、そこに動いていないtick数を保存する

::: !ref ../Event/velocity

## コマンド

### スコアボードを作成
動いていないtick数をカウントするため、スコアボードを作成します。

```
/scoreboard objectives add detect_afk dummy
```

### 動いていないtick数をカウント
`capi:velocity_xyz` が0であるプレイヤー (静止しているプレイヤー)は `detect_afk` を1増加させます。  
`capi:velocity_xyz` が1以上であるプレイヤー (静止していないプレイヤー)は `detect_afk` を0に設定します。  
`detect_afk` の値に基づいて、`afk` タグの付与または消去を行います。

```mcfunction
/execute as @a[scores={capi:velocity_xyz=0}] run scoreboard players add @s detect_afk 1
/execute as @a[scores={capi:velocity_xyz=1..}] run scoreboard players set @s detect_afk 0
/execute as @a[scores={detect_afk=..0},tag=afk] run tag @s remove afk
/execute as @a[scores={detect_afk=600..},tag=!afk] run tag @s add afk
```

### (おまけ) 一定時間動いていないプレイヤーをkickする
`detect_afk` が12000 (10分)を超えたとき、プレイヤーを切断します。

```mcfunction
/execute as @a[scores={detect_afk=12000..},tag=afk] run kick @s 放置を検知！
```

### (おまけ) 放置しているプレイヤーのアクションバーに放置分数を表示する


```mcfunction
/execute as @a[tag=afk] run scriptevent capi:actionbar AFK!<!nl><!calc=floor(<!score=detect_afk>/20)>s
```