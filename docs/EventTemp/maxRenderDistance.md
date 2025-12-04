---
title: "maxRenderDistance（最大描画距離）"
---

## 説明
プレイヤーのクライアント設定の最大描画距離を毎ティック取得するイベントです。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:max_render_distance` | プレイヤーの最大描画距離（チャンク単位）です。 |

## 使用例
描画距離が長いプレイヤーを検出する例：

```mcfunction
/execute as @a[scores={capi:max_render_distance=16..}] run say 描画距離が長いです！
```
