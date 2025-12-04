---
title: "playerInteractWithBlock"
---

## 説明
プレイヤーがブロックをインタラクトしたときにトリガーされるイベントです。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:interact_block` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `interact_block:{ブロックID}` | インタラクトしたブロックのIDがタグとして付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:interact_block_x` | インタラクトしたブロックのX座標です。 |
| `capi:interact_block_y` | インタラクトしたブロックのY座標です。 |
| `capi:interact_block_z` | インタラクトしたブロックのZ座標です。 |

## 使用例
特定のブロックをインタラクトしたプレイヤーを検出する例：

```mcfunction
execute as @a[tag=interact_block:minecraft:chest] run say チェストを開きました！
```
