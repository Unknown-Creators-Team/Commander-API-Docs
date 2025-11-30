---
title: "entityHitBlock"
last_update:
  date: 2025-11-30
  author: arutaka1220
---

# 🎯 entityHitBlock

> プレイヤーがブロックを殴ったときにトリガーされるイベントです。

---

## 🏷️ トリガータグ

イベント発生時にプレイヤーに自動付与されるタグです。

<table>
<tr>
<td width="40%">

### `capi:entityHitBlock`

</td>
<td>

このイベントがトリガーされたときにプレイヤーに追加されます。

</td>
</tr>
<tr>
<td>

### `entityHitBlock:<ブロックID>`

</td>
<td>

殴ったブロックのIDが含まれた状態でプレイヤーに追加されます。

**例:**
- 石を殴った → `entityHitBlock:minecraft:stone`
- 土を殴った → `entityHitBlock:minecraft:dirt`
- オークの原木を殴った → `entityHitBlock:minecraft:oak_log`

</td>
</tr>
</table>

---

## 📊 トリガースコア

イベント発生時に自動的に設定・更新されるスコアボードです。

| スコアボード | 説明 |
|------------|------|
| **`capi:entityHitBlock`** | ブロックを殴るたびに1加算されます |
| **`capi:entityHitBlock_x`** | 殴ったブロックのX座標が代入されます |
| **`capi:entityHitBlock_y`** | 殴ったブロックのY座標が代入されます |
| **`capi:entityHitBlock_z`** | 殴ったブロックのZ座標が代入されます |

---

## 📚 使用例

### 🪨 特定のブロックを殴ったときの処理

ダイヤモンド鉱石を殴ったときにメッセージを表示:

```mcfunction
/tell @a[tag="entityHitBlock:minecraft:diamond_ore"] §bダイヤモンドを発見！
/tag @a remove "entityHitBlock:minecraft:diamond_ore"
```

---

### 🔔 ベルを殴ってカスタム機能を実装

ベルを殴ったらショップメニューを開く:

```mcfunction
/tag @a[tag="entityHitBlock:minecraft:bell"] add "open_shop_menu"
/tag @a remove "entityHitBlock:minecraft:bell"
```

---

### 🎮 クリック検知システム

特定の場所のボタンを殴ったときにイベントを発動:

```mcfunction
/execute as @a[tag="entityHitBlock:minecraft:stone_button",scores={capi:entityHitBlock_x=100,capi:entityHitBlock_y=64,capi:entityHitBlock_z=200}] run function custom:event_trigger
/tag @a remove "entityHitBlock:minecraft:stone_button"
```

---

### 📈 ブロック殴打回数を記録

100回以上ブロックを殴ったプレイヤーを検知:

```mcfunction
/title @a[scores={capi:entityHitBlock=100..}] actionbar §e殴打回数: 100+
```

---

### 🎨 カスタムパーティクルエフェクト

金ブロックを殴ったときにパーティクルを表示:

```mcfunction
/execute as @a[tag="entityHitBlock:minecraft:gold_block"] at @s run particle minecraft:lava_particle ~ ~1 ~
/tag @a remove "entityHitBlock:minecraft:gold_block"
```

---

### 🗺️ 座標ベースの判定

特定のエリア内でブロックを殴ったときの処理:

```mcfunction
/execute as @a[tag="capi:entityHitBlock",scores={capi:entityHitBlock_x=0..100,capi:entityHitBlock_y=60..80,capi:entityHitBlock_z=0..100}] run say 保護エリア内でブロックを殴りました
/tag @a remove "capi:entityHitBlock"
```

---

<div align="center">

**💡 ヒント:** ブロックIDタグを使用することで、特定のブロックに対する処理を簡単に実装できます。

**⚠️ 注意:** トリガータグは1tickで自動削除されるため、検知処理は即座に実行してください。

</div>