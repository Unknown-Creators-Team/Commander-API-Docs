---
title: "test"
last_update:
  date: 2025-12-04
  author: arutaka1220
---

## 概要

**test** は、テストを実行する ScriptEvent です。  
Commander-APIが正しく動作していることを確認するためのコマンドです。  
このコマンドを利用するためには `/scriptevent capi:config` を実行し `基本設定` から `テスト` を有効にしてください。

## 構文

```mcfunction
/scriptevent capi:test <テスト名>
```

## パラメータ

| パラメータ | 説明 | 必須 |
|---|---|---|
| `テスト名` | 実行するテストの名前 | × |

## 使用例

### 全てのテストを実行

テスト名を省略すると、**全てのテスト**が実行されます。
:::danger 建築物が破壊される可能性があります。
**全てのテスト**を実行すると多くの範囲を利用するため、建築物が破壊される可能性があります。  
**必ず周囲に大きな土地を確保した上で実行**してください。
:::

```mcfunction
/scriptevent capi:test
```

### 特定のテストを実行

特定のテストのみを実行します。
:::warning 建築物が破壊される可能性があります。
全てのテストに比べると利用する範囲は小規模ですが、建築物が破壊される可能性があります。   
**必ず周囲に10x10ほど土地を確保した上で実行**してください。
:::

```mcfunction
/scriptevent capi:test テスト名
```

## テスト一覧

<details>
<summary>一覧を開く</summary>

+++ イベント

| テスト名 | 説明 |
|---|---|
|`button_push`|プレイヤーがボタンを押したときのイベントをテストします|
|`chat_send`|プレイヤーがチャットメッセージを送信したときのイベントをテストします|
|`entity_die`|エンティティが死亡したときのイベントをテストします|
|`entity_hit_block`|エンティティがブロックに衝突したときのイベントをテストします|
|`entity_hit_entity`|エンティティが別のエンティティに衝突したときのイベントをテストします|
|`entity_hurt`|エンティティがダメージを受けたときのイベントをテストします|
|`item_use`|アイテムが使用されたときのイベントをテストします|
|`item_use_on`|アイテムがブロックに対して使用されたときのイベントをテストします|
|`player_break_block`|プレイヤーがブロックを破壊したときのイベントをテストします|
|`player_interact_with_block`|プレイヤーがブロックと対話したときのイベントをテストします|
|`player_interact_with_entity`|プレイヤーがエンティティと対話したときのイベントをテストします|
|`player_place_block`|プレイヤーがブロックを設置したときのイベントをテストします|
|`player_spawn`|プレイヤーがスポーンしたときのイベントをテストします|
|`pressure_plate_pop`|圧力板がポップしたときのイベントをテストします|
|`pressure_plate_push`|圧力板が押されたときのイベントをテストします|
|`projectile_hit_block`|発射物がブロックに衝突したときのイベントをテストします|
|`projectile_hit_entity`|発射物がエンティティに衝突したときのイベントをテストします|
|`trip_wire_trip`|トリップワイヤーが発動したときのイベントをテストします|

+++ ScriptEvent

| テスト名 | 説明 |
|---|---|
|`scriptevent_actionbar`|アクションバーを表示するテストです|
|`scriptevent_call`|コマンド呼び出しのテストです|
|`scriptevent_explosion`|爆発を生成するテストです|
|`scriptevent_form`|フォームを表示するテストです|
|`scriptevent_get_item`|アイテムを取得するテストです|
|`scriptevent_impulse`|インパルスコマンドのテストです|
|`scriptevent_kick`|プレイヤーをキックするテストです|
|`scriptevent_kill`|エンティティを消滅させるテストです|
|`scriptevent_knockback`|ノックバック効果のテストです|
|`scriptevent_rename`|エンティティ名を変更するテストです|
|`scriptevent_reset_name`|エンティティ名をリセットするテストです|
|`scriptevent_run`|コマンド実行のテストです|
|`scriptevent_say`|チャットメッセージを送信するテストです|
|`scriptevent_screen`|スクリーン表示のテストです|
|`scriptevent_set_item`|アイテムを設定するテストです|
|`scriptevent_set_slot`|スロットを設定するテストです|
|`scriptevent_shoot`|発射物を生成するテストです|
|`scriptevent_spawn_entity`|エンティティをスポーンするテストです|
|`scriptevent_spawn_item`|アイテムをスポーンするテストです|
|`scriptevent_team`|チーム操作のテストです|
|`scriptevent_tell`|プレイヤーにメッセージを送信するテストです|
|`scriptevent_tp`|テレポートコマンドのテストです|

+++

</details>

## 注意事項

- 建築物が破壊されるおそれがあるため、周りの環境には**非常に注意して**行うようにしてください。
- この機能を利用するためには `/scriptevent capi:config` を実行し `基本設定` から `テスト` を有効にしてください。
- 公式サポートを受けるとき、テストの実行結果を見せてくれたらスタッフは大喜びするかもしれないな...?

## 関連項目

なし