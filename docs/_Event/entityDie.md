---
title: "entityDie"
last_update:
  date: 2025-11-30
  author: arutaka1220
---

# 💀 entityDie

> エンティティが死亡したときにトリガーされるイベントです。

---

## 🏷️ トリガータグ

イベント発生時にプレイヤーに自動付与されるタグです。

<table>
<tr>
<td width="40%">

### `capi:kill`

</td>
<td>

プレイヤーが何かを倒したときに追加されます。

</td>
</tr>
<tr>
<td>

### `capi:kill_player`

</td>
<td>

プレイヤーが他のプレイヤーを倒したときに追加されます。

</td>
</tr>
<tr>
<td>

### `capi:death`

</td>
<td>

プレイヤーが死亡したときに追加されます。

</td>
</tr>
<tr>
<td>

### `capi:death_player`

</td>
<td>

プレイヤーが他のプレイヤーに倒されたときに追加されます。

</td>
</tr>
<tr>
<td>

### `die_cause:<死因>`

</td>
<td>

死因が含まれた状態でプレイヤーに追加されます。

**例:**
- 溺死 → `die_cause:drowning`
- 落下死 → `die_cause:fall`
- プレイヤーに倒された → `die_cause:entityAttack`

</td>
</tr>
</table>

---

## 📊 トリガースコア

イベント発生時に自動的に設定・更新されるスコアボードです。

### 🎯 キル時のスコア（プレイヤーが何かを倒したとき）

| スコアボード | 説明 |
|------------|------|
| **`capi:kill`** | 倒すたびに1加算されます |
| **`capi:kill_x`** | 倒した相手のX座標が代入されます |
| **`capi:kill_y`** | 倒した相手のY座標が代入されます |
| **`capi:kill_z`** | 倒した相手のZ座標が代入されます |
| **`capi:kill_player`** | プレイヤーを倒すたびに1加算されます |

### ☠️ デス時のスコア（プレイヤーが死亡したとき）

| スコアボード | 説明 |
|------------|------|
| **`capi:death`** | 死亡するたびに1加算されます |
| **`capi:death_x`** | 死亡した地点のX座標が代入されます |
| **`capi:death_y`** | 死亡した地点のY座標が代入されます |
| **`capi:death_z`** | 死亡した地点のZ座標が代入されます |
| **`capi:death_player`** | プレイヤーに倒されるたびに1加算されます |

---

## 📚 使用例

### 🏆 キルカウンターを表示する

10キル達成したプレイヤーに称号を付与:

```mcfunction
/tag @a[scores={capi:kill=10}] add "title:§6キルマスター"
```

---

### 🎖️ PvPキルを記録する

プレイヤーキル数が5以上のプレイヤーを検知:

```mcfunction
/title @a[scores={capi:kill_player=5..}] actionbar §ePvPキル: 5+
```

---

### 🪦 デスペナルティを設定する

死亡時にアイテムをドロップ:

```mcfunction
/execute as @a[tag="capi:death"] run loot spawn ~ ~ ~ loot death_penalty
/tag @a remove "capi:death"
```

---

### 📍 死亡地点にマーカーを設置する

死亡した場所にパーティクルを表示:

```mcfunction
/execute as @a[tag="capi:death"] run particle totem_particle ~ ~ ~
/tag @a remove "capi:death"
```

---

### ⚡ 特定の死因に反応する

落下死したプレイヤーにメッセージを表示:

```mcfunction
/tell @a[tag="die_cause:fall"] §c落下には気をつけましょう！
/tag @a remove "die_cause:fall"
```

---

### 🎯 キル時の座標を記録する

最後にキルした場所にテレポート:

```mcfunction
/execute as @a[scores={capi:kill=1..}] run tp @s @s[scores={capi:kill_x=..}]
```

---

<div align="center">

**💡 ヒント:** `die_cause` タグを使用することで、死因別の処理を実装できます。

**⚠️ 注意:** トリガータグは1tickで自動削除されるため、検知処理は即座に実行してください。

</div>