---
title: "entityDie"
last_update:
  date: 2025-12-04
  author: Copilot
---

## 説明
エンティティが死亡したときにトリガーされるイベントです。プレイヤーによるキルや、プレイヤーの死亡を検出できます。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:kill` | エンティティをキルしたプレイヤーに付与されます。 |
| `capi:kill_player` | プレイヤーをキルしたプレイヤーに付与されます。 |
| `capi:death` | 死亡したプレイヤーに付与されます。 |
| `capi:death_player` | プレイヤーによって倒されたプレイヤーに付与されます。 |
| `die_cause:{原因}` | 死亡原因がタグとして付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

### キル時（攻撃側プレイヤー）
| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:kill` | エンティティをキルした回数です。（累積） |
| `capi:kill_player` | プレイヤーをキルした回数です。（累積） |
| `capi:kill_x` | キルしたエンティティのX座標です。 |
| `capi:kill_y` | キルしたエンティティのY座標です。 |
| `capi:kill_z` | キルしたエンティティのZ座標です。 |

### 死亡時（死亡したプレイヤー）
| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:death` | 死亡回数です。（累積） |
| `capi:death_player` | プレイヤーによって倒された回数です。（累積） |
| `capi:death_x` | 死亡時のX座標です。 |
| `capi:death_y` | 死亡時のY座標です。 |
| `capi:death_z` | 死亡時のZ座標です。 |

## 使用例

### 基本的な検出

プレイヤーをキルしたプレイヤーにメッセージを送信する例：

```mcfunction
/execute as @a[tag=capi:kill_player] run say プレイヤーを倒しました！
```

### PvP統計の記録

プレイヤー間の戦闘統計を記録する例：

```mcfunction
# キル数を記録
/execute as @a[tag=capi:kill_player] run scoreboard players add @s pvp_kills 1
/execute as @a[tag=capi:kill_player] run tellraw @s {"rawtext":[{"text":"§6PvPキルを記録しました"}]}

# デス数を記録
/execute as @a[tag=capi:death_player] run scoreboard players add @s pvp_deaths 1
/execute as @a[tag=capi:death_player] run tellraw @s {"rawtext":[{"text":"§7デスを記録しました"}]}
```

### キルストリークシステム

連続キルに応じて報酬を与える例：

```mcfunction
# キルストリークをカウント
/execute as @a[tag=capi:kill_player] run scoreboard players add @s killstreak 1

# ストリークボーナス
/execute as @a[tag=capi:kill_player,scores={killstreak=3}] run tellraw @s {"rawtext":[{"text":"§6§lトリプルキル！"}]}
/execute as @a[tag=capi:kill_player,scores={killstreak=5}] run tellraw @s {"rawtext":[{"text":"§c§lキリングスプリー！"}]}
/execute as @a[tag=capi:kill_player,scores={killstreak=10}] run tellraw @s {"rawtext":[{"text":"§4§lアンストッパブル！"}]}

# 死亡時にストリークをリセット
/execute as @a[tag=capi:death_player] run scoreboard players set @s killstreak 0
```

### モブキル統計

モブの討伐数を記録する例：

```mcfunction
# エンティティキルをカウント
/execute as @a[tag=capi:kill] run scoreboard players add @s total_kills 1

# マイルストーン達成
/execute as @a[tag=capi:kill,scores={total_kills=100}] run tellraw @s {"rawtext":[{"text":"§a100体のエンティティを倒しました！"}]}
/execute as @a[tag=capi:kill,scores={total_kills=1000}] run tellraw @s {"rawtext":[{"text":"§61000体のエンティティを倒しました！"}]}
```

### 死亡原因の分析

死亡原因に応じたメッセージを表示する例：

```mcfunction
# 落下死
/execute as @a[tag=die_cause:fall] run tellraw @s {"rawtext":[{"text":"§e落下に注意しましょう！"}]}

# 溶岩死
/execute as @a[tag=die_cause:lava] run tellraw @s {"rawtext":[{"text":"§c溶岩は危険です！水バケツを持ち歩きましょう。"}]}

# 爆発死
/execute as @a[tag=die_cause:explosion] run tellraw @s {"rawtext":[{"text":"§aクリーパーに注意！"}]}

# 窒息死
/execute as @a[tag=die_cause:suffocation] run tellraw @s {"rawtext":[{"text":"§7ブロックに埋まらないように注意！"}]}
```

### デスペナルティシステム

死亡時にペナルティを与える例：

```mcfunction
# 死亡時にスコアを減少
/execute as @a[tag=capi:death] run scoreboard players remove @s points 10
/execute as @a[tag=capi:death] run tellraw @s {"rawtext":[{"text":"§c-10 ポイント（死亡ペナルティ）"}]}

# PvP死のみペナルティ
/execute as @a[tag=capi:death_player] run scoreboard players remove @s pvp_rating 5
```

### リスポーン地点の記録

死亡位置を記録してリスポーン地点を設定する例：

```mcfunction
# 死亡位置を記録
/execute as @a[tag=capi:death] run scoreboard players operation @s last_death_x = @s capi:death_x
/execute as @a[tag=capi:death] run scoreboard players operation @s last_death_y = @s capi:death_y
/execute as @a[tag=capi:death] run scoreboard players operation @s last_death_z = @s capi:death_z

# 死亂位置を通知
/execute as @a[tag=capi:death] run tellraw @s {"rawtext":[{"text":"§7死亂位置が記録されました"}]}
```

### アリーナPvPシステム

アリーナでのPvPを管理する例：

```mcfunction
# アリーナ内でのキル
/execute as @a[tag=capi:kill_player,scores={capi:kill_x=-100..100,capi:kill_y=60..70,capi:kill_z=-100..100}] run scoreboard players add @s arena_wins 1
/execute as @a[tag=capi:kill_player,scores={arena_wins=10}] run tellraw @s {"rawtext":[{"text":"§6§lアリーナマスター達成！"}]}

# アリーナでの死亡
/execute as @a[tag=capi:death_player,scores={capi:death_x=-100..100,capi:death_y=60..70,capi:death_z=-100..100}] run tp @s 0 65 0
```

### ボスキル報酬

特定のエンティティキルに報酬を与える例：

```mcfunction
# キル位置が特定エリア（ボス部屋）の場合
/execute as @a[tag=capi:kill,scores={capi:kill_x=100..200,capi:kill_y=50..60,capi:kill_z=100..200}] run give @s diamond 5
/execute as @a[tag=capi:kill,scores={capi:kill_x=100..200,capi:kill_y=50..60,capi:kill_z=100..200}] run tellraw @s {"rawtext":[{"text":"§6ボス謎夺報酬：ダイヤモンド×5"}]}
```

### チーム戦統計

チーム対戦の統計を記録する例：

```mcfunction
# 赤チームのキル
/execute as @a[tag=capi:kill_player,team=red] run scoreboard players add red_team kills 1

# 青チームのキル
/execute as @a[tag=capi:kill_player,team=blue] run scoreboard players add blue_team kills 1

# チームスコアを表示（サイドバーに表示）
/execute as @a[tag=capi:kill_player] run scoreboard objectives setdisplay sidebar kills
```
