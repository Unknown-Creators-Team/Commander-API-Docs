---
title: "ワールド情報スコア"
last_update:
  date: 2025-12-07
  author: Nano191225
---

## 説明
ワールドやシステムに関する情報を毎ティック取得し、`capi:world` スコアボードに保存するイベント群です。

---

## トリガースコア
毎ティック自動で更新されるスコアボードです。
全てのスコアは `capi:world` というダミープレイヤー（またはエンティティ）に対して保存されます。

### ワールド情報

| スコアボード名 | 説明 |
| ----- | ----- |
| `time` | ワールドの現在の時刻（0-23999）です。 |
| `day` | ワールドの経過日数です。 |
| `absolute_time` | ワールドの絶対時間です。 |
| `default_spawn_location_x` | 初期スポーン地点のX座標です。 |
| `default_spawn_location_y` | 初期スポーン地点のY座標です。 |
| `default_spawn_location_z` | 初期スポーン地点のZ座標です。 |
| `difficulty` | ワールドの難易度です。(0: Peaceful, 1: Easy, 2: Normal, 3: Hard) |
| `hardcore` | ワールドがハードコアモードかどうかを表します。(1: True, 0: False) |

### システム情報

| スコアボード名 | 説明 |
| ----- | ----- |
| `current_tick` | 現在のシステムティックです。 |
| `editor_world` | エディターモードかどうかを表します。(1: True, 0: False) |
| `memory_tier` | サーバーのシステムメモリティアです。(0-4) |

:::info
これらのスコアを使用するには、`capi:world` を対象として指定してください。
例: `/execute if score time capi:world matches 13000..14000 run ...`
:::
