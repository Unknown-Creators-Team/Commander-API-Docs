---
title: "entityFromViewDirection（視線先のエンティティ）"
---

## 説明
プレイヤーの視線の先にあるエンティティの情報を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:entity_from_view_direction_distance` | 視線先のエンティティまでの距離です。 |
| `capi:entity_from_view_direction_x` | 視線先のエンティティのX座標です。 |
| `capi:entity_from_view_direction_y` | 視線先のエンティティのY座標です。 |
| `capi:entity_from_view_direction_z` | 視線先のエンティティのZ座標です。 |

## 注意事項
- 視線の先にエンティティがない場合、スコアはリセットされます。

## 使用例
近くのエンティティを見ているプレイヤーを検出する例：

```mcfunction
execute as @a[scores={capi:entity_from_view_direction_distance=..10}] run say 近くのエンティティを見ています！
```
