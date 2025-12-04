---
title: "projectileHitBlock"
---

## 説明
プレイヤーが発射した飛び道具がブロックに当たったときにトリガーされるイベントです。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:projectile_hit_block` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `projectile_hit_block.with:{飛び道具ID}` | 使用した飛び道具のIDがタグとして付与されます。 |
| `projectile_hit_block.to:{ブロックID}` | 当たったブロックのIDがタグとして付与されます。 |
| `projectile_hit_block.from:{プレイヤー名}` | 発射したプレイヤーの名前がタグとして付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:projectile_hit_block_x` | 飛び道具が当たったブロックのX座標です。 |
| `capi:projectile_hit_block_y` | 飛び道具が当たったブロックのY座標です。 |
| `capi:projectile_hit_block_z` | 飛び道具が当たったブロックのZ座標です。 |

## 使用例
矢がブロックに当たったプレイヤーを検出する例：

```mcfunction
execute as @a[tag=projectile_hit_block.with:minecraft:arrow] run say 矢がブロックに当たりました！
```
