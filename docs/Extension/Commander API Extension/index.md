---
title: "Commander API Extension"
last_update:
  date: 2025-12-07
  author: wako
---

## 概要

**Commander API Extension** は、Commander API の機能を拡張するための公式拡張機能です。ScriptAPI だけでは実装できない高度な機能を提供します。

この拡張機能により、プレイヤーのゲーム内パラメータをカスタマイズし、チーム機能などの高度な機能を実装することができます。

## 主な機能

Commander API Extension では、以下の機能を利用できます：

- **プレイヤーの大きさ変更**: イベントコマンドでプレイヤーのサイズをカスタマイズ
- **プレイヤーの体力変更**: イベントコマンドで最大体力を調整
- **プレイヤーの攻撃力変更**: イベントコマンドで攻撃ダメージを調整
- **チーム機能**: スクリプトイベントでフレンドリーファイア（味方攻撃）を無効化したチーム機能

---

## インストール方法

Commander API Extension を使用するには、以下の手順を実行してください：

1. Commander API がインストールされていることを確認
2. Commander API Extension パッケージをワールドに追加
3. ワールドを再読み込み（`/reload` コマンド）

---

## 機能詳細

### プレイヤーの大きさ変更

プレイヤーのサイズを変更する機能です。小さくしたり大きくしたりすることで、ゲームプレイに変化を加えることができます。

#### 構文

```mcfunction
/event entity @s capi:size_<倍率>
```

#### パラメータ

| パラメータ | 説明 | デフォルト値 | 範囲 |
|-----------|------|-------------|------|
| `倍率` | プレイヤーのサイズ倍率 | `1.0` | `0.1` ～ `10.0` |

#### 使用例

##### 通常サイズに設定

プレイヤーを通常のサイズ（1.0倍）に設定します。

```mcfunction
/event entity @s capi:size_1.0
```

##### 小さいサイズに設定

プレイヤーを通常の半分のサイズ（0.5倍）に設定します。

```mcfunction
/event entity @s capi:size_0.5
```

##### 大きいサイズに設定

プレイヤーを通常の2倍のサイズに設定します。

```mcfunction
/event entity @s capi:size_2.0
```

##### 複数プレイヤーに適用

すべてのプレイヤーのサイズを1.5倍に設定します。

```mcfunction
/execute as @a run event entity @s capi:size_1.5
```

##### タグに基づいてサイズ変更

特定のタグを持つプレイヤーのサイズを変更します。

```mcfunction
# 小さいプレイヤー
/execute as @a[tag=small] run event entity @s capi:size_0.5

# 大きいプレイヤー
/execute as @a[tag=large] run event entity @s capi:size_2.0
```

##### スコアに基づいてサイズ変更

スコアの値に応じてサイズを変更します。

```mcfunction
# レベルに応じてサイズ変更（レベルが高いほど大きくなる）
/execute as @a[scores={level=1}] run event entity @s capi:size_0.8
/execute as @a[scores={level=2}] run event entity @s capi:size_1.0
/execute as @a[scores={level=3}] run event entity @s capi:size_1.2
/execute as @a[scores={level=4}] run event entity @s capi:size_1.5
/execute as @a[scores={level=5}] run event entity @s capi:size_2.0
```

:::info
サイズの倍率は小数で指定します。  
`0.5` の場合、プレイヤーは通常の半分のサイズになります。  
`2.0` の場合、プレイヤーは通常の2倍のサイズになります。
:::

:::warning 注意事項
極端に小さい値（0.1未満）や大きい値（10.0以上）を設定すると、ゲームプレイに支障をきたす可能性があります。
:::

---

### プレイヤーの体力変更

プレイヤーの最大体力を変更する機能です。難易度調整やロールプレイに活用できます。

#### 構文

```mcfunction
/event entity @s capi:health_<体力値>
```

#### パラメータ

| パラメータ | 説明 | デフォルト値 | 範囲 |
|-----------|------|-------------|------|
| `体力値` | プレイヤーの最大体力 | `20` | `1` ～ `1024` |

#### 使用例

##### 通常の体力に設定

プレイヤーの体力を通常（20、ハート10個分）に設定します。

```mcfunction
/event entity @s capi:health_20
```

##### 低い体力に設定

プレイヤーの体力を10（ハート5個分）に設定します。

```mcfunction
/event entity @s capi:health_10
```

##### 高い体力に設定

プレイヤーの体力を40（ハート20個分）に設定します。

```mcfunction
/event entity @s capi:health_40
```

##### クラスシステムでの体力設定

クラスに応じて体力を設定します。

```mcfunction
# 戦士クラス - 高い体力
/execute as @a[tag=warrior] run event entity @s capi:health_40

# 魔法使いクラス - 低い体力
/execute as @a[tag=mage] run event entity @s capi:health_12

# タンククラス - 非常に高い体力
/execute as @a[tag=tank] run event entity @s capi:health_60

# 盗賊クラス - 中程度の体力
/execute as @a[tag=rogue] run event entity @s capi:health_16
```

##### スポーン時に体力設定

初回スポーン時にクラスを選択して体力を設定します。

```mcfunction
# クラス選択後に体力を設定
/execute as @a[tag=capi:spawn_initial,tag=class_warrior] run event entity @s capi:health_40
/execute as @a[tag=capi:spawn_initial,tag=class_mage] run event entity @s capi:health_12
```

:::info
デフォルトの体力は `20`（ハート10個分）です。  
`40` を指定すると、ハート20個分の体力になります。
:::

:::tip ロールプレイへの活用
- **戦士**: `health_40` - 高い耐久力
- **魔法使い**: `health_12` - 低い耐久力
- **タンク**: `health_60` - 非常に高い耐久力
:::

---

### プレイヤーの攻撃力変更

プレイヤーの攻撃ダメージを変更する機能です。バランス調整やクラスシステムの実装に使用できます。

#### 構文

```mcfunction
/event entity @s capi:attack_<倍率>
```

#### パラメータ

| パラメータ | 説明 | デフォルト値 | 範囲 |
|-----------|------|-------------|------|
| `倍率` | プレイヤーの攻撃力倍率 | `1.0` | `0.1` ～ `10.0` |

#### 使用例

##### 通常の攻撃力に設定

プレイヤーの攻撃力を通常（1.0倍）に設定します。

```mcfunction
/event entity @s capi:attack_1.0
```

##### 低い攻撃力に設定

プレイヤーの攻撃力を半分（0.5倍）に設定します。

```mcfunction
/event entity @s capi:attack_0.5
```

##### 高い攻撃力に設定

プレイヤーの攻撃力を2倍に設定します。

```mcfunction
/event entity @s capi:attack_2.0
```

##### クラスシステムでの攻撃力設定

クラスに応じて攻撃力を設定します。

```mcfunction
# 戦士クラス - 高い攻撃力
/execute as @a[tag=warrior] run event entity @s capi:attack_2.0

# 盗賊クラス - 中程度の攻撃力
/execute as @a[tag=rogue] run event entity @s capi:attack_1.5

# 支援役クラス - 低い攻撃力
/execute as @a[tag=support] run event entity @s capi:attack_0.7

# 魔法使いクラス - 低い物理攻撃力
/execute as @a[tag=mage] run event entity @s capi:attack_0.8
```

##### 武器に応じた攻撃力変更

持っている武器に応じて攻撃力を変更します。

```mcfunction
# 木の剣を持っている場合
/execute as @a[hasitem={item=wooden_sword}] run event entity @s capi:attack_1.0

# 石の剣を持っている場合
/execute as @a[hasitem={item=stone_sword}] run event entity @s capi:attack_1.2

# 鉄の剣を持っている場合
/execute as @a[hasitem={item=iron_sword}] run event entity @s capi:attack_1.5

# ダイヤの剣を持っている場合
/execute as @a[hasitem={item=diamond_sword}] run event entity @s capi:attack_2.0
```

:::info
攻撃力の倍率は小数で指定します。  
`1.0` の場合、通常の攻撃力です。  
`2.0` の場合、攻撃力が2倍になります。  
`0.5` の場合、攻撃力が半分になります。
:::

:::tip クラスシステムへの活用
- **戦士**: `attack_2.0` - 高い攻撃力
- **盗賊**: `attack_1.5` - 中程度の攻撃力
- **支援役**: `attack_0.7` - 低い攻撃力
:::

---

### チーム機能

プレイヤーをチームに分け、フレンドリーファイア（味方攻撃）を無効化する機能です。協力プレイやPvPゲームモードの実装に活用できます。

#### 構文

```mcfunction
# チームに所属させる
/scriptevent capi:team <チーム番号>

# チームをリセット（チームなしにする）
/scriptevent capi:team
```

#### パラメータ

| パラメータ | 説明 | デフォルト値 |
|-----------|------|-------------|
| `チーム番号` | プレイヤーが所属するチーム番号（整数） | なし（チーム未所属） |

#### チーム機能の特徴

- **フレンドリーファイア無効化**: 同じチームのプレイヤー同士は攻撃できません
- **チーム識別**: チーム番号で簡単にプレイヤーをグループ化
- **柔軟な設定**: 任意の整数をチーム番号として使用可能

#### 使用例

##### チーム1に所属させる

プレイヤーをチーム1に所属させます。

```mcfunction
/execute as @a run scriptevent capi:team 1
```

##### チーム2に所属させる

特定のタグを持つプレイヤーをチーム2に所属させます。

```mcfunction
/execute as @a[tag=team_blue] run scriptevent capi:team 2
```

##### チームをリセット

プレイヤーのチーム所属をリセットします（チームなしの状態にします）。

```mcfunction
/execute as @a run scriptevent capi:team
```

##### 2チーム対戦の設定

赤チームと青チームに分けます。

```mcfunction
# 赤チーム（チーム1）
/execute as @a[tag=red] run scriptevent capi:team 1

# 青チーム（チーム2）
/execute as @a[tag=blue] run scriptevent capi:team 2
```

##### 協力プレイの設定

全プレイヤーを同じチームに所属させて協力プレイモードにします。

```mcfunction
# 全員をチーム1（味方チーム）に所属させる
/execute as @a run scriptevent capi:team 1
```

##### スコアに基づいてチーム分け

スコアの値に応じてチームを分けます。

```mcfunction
# スコアが偶数のプレイヤーはチーム1
/execute as @a[scores={team_score=0}] run scriptevent capi:team 1
/execute as @a[scores={team_score=2}] run scriptevent capi:team 1
/execute as @a[scores={team_score=4}] run scriptevent capi:team 1

# スコアが奇数のプレイヤーはチーム2
/execute as @a[scores={team_score=1}] run scriptevent capi:team 2
/execute as @a[scores={team_score=3}] run scriptevent capi:team 2
/execute as @a[scores={team_score=5}] run scriptevent capi:team 2
```

##### マクロを使用したチーム設定

マクロを使用してスコアから直接チーム番号を設定します。

```mcfunction
/execute as @a run scriptevent capi:team <!score=team_number>
```

::: !ref ../../Macro/Score.md

##### ランダムなチーム分け

ランダムにチームを割り当てます。

```mcfunction
# 1～4のランダムなチームに分ける
/execute as @a run scriptevent capi:team <!calc=floor(rand()*4)+1>
```

::: !ref ../../Macro/Calc.md

:::info
チーム番号は任意の整数が使用できます（例: 1, 2, 3, 4 など）。  
同じチーム番号を持つプレイヤーは、互いに攻撃できなくなります。  
パラメータを省略すると、チーム所属がリセットされます。
:::

:::warning 注意事項
- チームを設定していないプレイヤーは、すべてのプレイヤーを攻撃できます
- チーム番号は整数である必要があります
:::

---

## 複合設定の例

複数の機能を組み合わせて、より高度なゲームプレイを実現できます。

### RPGクラスシステム

クラス選択時にプレイヤーの能力を設定します。

```mcfunction
# 戦士クラス
/execute as @a[tag=class_warrior] run event entity @s capi:size_1.2
/execute as @a[tag=class_warrior] run event entity @s capi:health_40
/execute as @a[tag=class_warrior] run event entity @s capi:attack_2.0
/execute as @a[tag=class_warrior] run scriptevent capi:team 1

# 魔法使いクラス
/execute as @a[tag=class_mage] run event entity @s capi:size_0.9
/execute as @a[tag=class_mage] run event entity @s capi:health_12
/execute as @a[tag=class_mage] run event entity @s capi:attack_0.8
/execute as @a[tag=class_mage] run scriptevent capi:team 1

# タンククラス
/execute as @a[tag=class_tank] run event entity @s capi:size_1.5
/execute as @a[tag=class_tank] run event entity @s capi:health_60
/execute as @a[tag=class_tank] run event entity @s capi:attack_1.2
/execute as @a[tag=class_tank] run scriptevent capi:team 1

# 盗賊クラス
/execute as @a[tag=class_rogue] run event entity @s capi:size_0.8
/execute as @a[tag=class_rogue] run event entity @s capi:health_16
/execute as @a[tag=class_rogue] run event entity @s capi:attack_1.8
/execute as @a[tag=class_rogue] run scriptevent capi:team 1
```

### PvPバトルアリーナ

2チームに分けて、各チームに異なる役割を設定します。

```mcfunction
# 赤チーム - タンク役
/execute as @a[tag=red_tank] run event entity @s capi:size_1.3
/execute as @a[tag=red_tank] run event entity @s capi:health_50
/execute as @a[tag=red_tank] run event entity @s capi:attack_1.5
/execute as @a[tag=red_tank] run scriptevent capi:team 1

# 赤チーム - アタッカー役
/execute as @a[tag=red_attacker] run event entity @s capi:size_1.0
/execute as @a[tag=red_attacker] run event entity @s capi:health_25
/execute as @a[tag=red_attacker] run event entity @s capi:attack_2.5
/execute as @a[tag=red_attacker] run scriptevent capi:team 1

# 青チーム - タンク役
/execute as @a[tag=blue_tank] run event entity @s capi:size_1.3
/execute as @a[tag=blue_tank] run event entity @s capi:health_50
/execute as @a[tag=blue_tank] run event entity @s capi:attack_1.5
/execute as @a[tag=blue_tank] run scriptevent capi:team 2

# 青チーム - アタッカー役
/execute as @a[tag=blue_attacker] run event entity @s capi:size_1.0
/execute as @a[tag=blue_attacker] run event entity @s capi:health_25
/execute as @a[tag=blue_attacker] run event entity @s capi:attack_2.5
/execute as @a[tag=blue_attacker] run scriptevent capi:team 2
```

### 動的な能力変更システム

ゲームの進行に応じて能力を動的に変更します。

```mcfunction
# レベルに応じてサイズと能力を変更
/execute as @a[scores={level=1}] run event entity @s capi:size_0.8
/execute as @a[scores={level=1}] run event entity @s capi:health_20
/execute as @a[scores={level=1}] run event entity @s capi:attack_1.0

/execute as @a[scores={level=5}] run event entity @s capi:size_1.0
/execute as @a[scores={level=5}] run event entity @s capi:health_30
/execute as @a[scores={level=5}] run event entity @s capi:attack_1.5

/execute as @a[scores={level=10}] run event entity @s capi:size_1.2
/execute as @a[scores={level=10}] run event entity @s capi:health_40
/execute as @a[scores={level=10}] run event entity @s capi:attack_2.0
```

---

## 関連ドキュメント

- [team スクリプトイベント](../../ScriptEvents/team.md) - チーム機能の詳細
- [Commander API イベント](../../Event/)
- [Commander API 設定](../../Config/)
- [Commander API スクリプトイベント](../../ScriptEvents/)

---

## フィードバック・サポート

Commander API Extension に関するフィードバックやサポートが必要な場合は、公式リポジトリの Issues セクションでお知らせください。
