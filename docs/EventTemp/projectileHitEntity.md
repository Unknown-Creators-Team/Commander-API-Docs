---
title: "projectileHitEntity"
---

## 説明
プレイヤーが発射した飛び道具がエンティティに当たったときにトリガーされるイベントです。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:projectile_hit_entity` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `projectile_hit_entity.with:{飛び道具ID}` | 使用した飛び道具のIDがタグとして付与されます。 |
| `projectile_hit_entity.to:{エンティティID}` | 当たったエンティティのIDがタグとして付与されます。 |
| `projectile_hit_entity.from:{プレイヤー名}` | 発射したプレイヤーの名前がタグとして付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:projectile_hit_entity_x` | 飛び道具が当たったエンティティのX座標です。 |
| `capi:projectile_hit_entity_y` | 飛び道具が当たったエンティティのY座標です。 |
| `capi:projectile_hit_entity_z` | 飛び道具が当たったエンティティのZ座標です。 |

## 使用例
矢がエンティティに当たったプレイヤーを検出する例：

```mcfunction
execute as @a[tag=projectile_hit_entity.with:minecraft:arrow] run say 矢がエンティティに当たりました！
```
