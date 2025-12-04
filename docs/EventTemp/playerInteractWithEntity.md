---
title: "playerInteractWithEntity"
---

## 説明
プレイヤーがエンティティをインタラクション（操作）したときにトリガーされるイベントです。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:interact_entity` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `interact_entity:{エンティティID}` | インタラクトしたエンティティのIDがタグとして付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:interact_entity_x` | インタラクトしたエンティティのX座標です。 |
| `capi:interact_entity_y` | インタラクトしたエンティティのY座標です。 |
| `capi:interact_entity_z` | インタラクトしたエンティティのZ座標です。 |

## 使用例
村人をインタラクトしたプレイヤーを検出する例：

```mcfunction
execute as @a[tag=interact_entity:minecraft:villager] run say 村人と取引しました！
```
