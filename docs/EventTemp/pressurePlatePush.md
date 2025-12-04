---
title: "pressurePlatePush"
---

## 説明
プレイヤーが感圧板を踏んだときにトリガーされるイベントです。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:pressure_push` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:pressure_push_x` | 感圧板のX座標です。 |
| `capi:pressure_push_y` | 感圧板のY座標です。 |
| `capi:pressure_push_z` | 感圧板のZ座標です。 |

## 使用例
感圧板を踏んだプレイヤーを検出する例：

```mcfunction
execute as @a[tag=capi:pressure_push] run say 感圧板を踏みました！
```
