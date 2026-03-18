---
title: "viewDirection"
last_update:
  date: 2026-03-19
  author: Nano191225
---

## 説明
プレイヤーの視線方向（見ている方向のベクトル）を毎ティック取得するイベントです。また、視線の先にあるブロック・エンティティ・プレイヤーの情報も取得できます。このページには、blockFromViewDirection と entityFromViewDirection も含まれています。

---

## トリガータグ
毎ティック自動で更新されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `view.block:{ブロックID}` | 視線先にあるブロックのIDがタグとして付与されます。 |
| `view.entity:{エンティティID}` | 視線先にあるエンティティのIDがタグとして付与されます。 |
| `view.player:{プレイヤー名}` | 視線先にいるプレイヤーの名前がタグとして付与されます。 |

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:direction_x` | 視線方向のX成分です。（×100） |
| `capi:direction_y` | 視線方向のY成分です。（×100） |
| `capi:direction_z` | 視線方向のZ成分です。（×100） |
| `capi:view.block_distance` | 視線先のブロックまでの距離です。 |
| `capi:view.block_x` | 視線先のブロックのX座標です。 |
| `capi:view.block_y` | 視線先のブロックのY座標です。 |
| `capi:view.block_z` | 視線先のブロックのZ座標です。 |
| `capi:view.entity_distance` | 視線先のエンティティまでの距離です。 |
| `capi:view.entity_x` | 視線先のエンティティのX座標です。 |
| `capi:view.entity_y` | 視線先のエンティティのY座標です。 |
| `capi:view.entity_z` | 視線先のエンティティのZ座標です。 |

## 注意事項
- 視線方向の値は100倍されて保存されます。
- 実際の値を取得するには、スコアの値を100で割る必要があります。
- 視線の先に何もない場合、`view.*` タグは付与されず、`capi:view.block_*` / `capi:view.entity_*` スコアはリセットされます。
- `view.block:`・`view.entity:`・`view.player:` のいずれか一方のみが付与されます。

## 使用例

### 上を向いているプレイヤーを検出

```mcfunction
/execute as @a[scores={capi:direction_y=50..}] run say 上を向いています！
```

### 特定のブロックを見ているプレイヤーを検出

```mcfunction
/execute as @a[tag=view.block:minecraft:diamond_ore] run say ダイヤモンド鉱石を見ています！
```

### 近くのエンティティを見ているプレイヤーを検出

```mcfunction
/execute as @a[tag=view.entity:minecraft:creeper,scores={capi:view_entity_distance=..5}] run say クリーパーが近くにいます！
```

### 特定のプレイヤーを見ているプレイヤーを検出

```mcfunction
/execute as @a[tag=view.player:Steve] run say Steveを見ています！
```
