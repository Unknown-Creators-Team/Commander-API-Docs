---
title: "スクリプトイベント / ScriptEvent"
last_update:
  date: 2025-12-02
  author: Nano191225
sidebar_position: 4
---

## 概要

**ScriptEvent** は、Commander API が提供する強力なイベントシステムです。  
`/scriptevent` コマンドを使用して、様々な機能を実行できます。

## 基本構文

```mcfunction
/scriptevent capi:<イベント名> <パラメータ>
```

## 利用可能な ScriptEvent

### メッセージ表示系

- **[actionbar](./actionbar.md)** - アクションバーにメッセージを表示
- **[tell](./tell.md)** - プレイヤーにメッセージを送信
- **[say](./say.md)** - 全体にメッセージを送信

### プレイヤー操作系

- **[rename](./rename.md)** - プレイヤーのネームタグを変更
- **[reset_name](./reset_name.md)** - プレイヤーのネームタグをリセット
- **[kick](./kick.md)** - プレイヤーをキック
- **[kill](./kill.md)** - プレイヤーをキル
- **[tp](./tp.md)** - プレイヤーをテレポート

### ワールド操作系

- **[explosion](./explosion.md)** - 爆発を生成
- **[spawn_entity](./spawn_entity.md)** - エンティティをスポーン
- **[spawn_item](./spawn_item.md)** - アイテムをスポーン

### アイテム操作系

- **[get_item](./get_item.md)** - アイテムを取得
- **[set_item](./set_item.md)** - アイテムを設定
- **[set_slot](./set_slot.md)** - スロットを設定

### 高度な機能

- **[form](./form/form.md)** - フォームUIを表示
  - **[action](./form/action.md)** - アクションフォーム
  - **[message](./form/message.md)** - メッセージフォーム
  - **[modal](./form/modal.md)** - モーダルフォーム
- **[call](./call.md)** - 他のスクリプトイベントを呼び出し
- **[run](./run.md)** - コマンドを実行
- **[test](./test.md)** - テスト機能
- **[impulse](./impulse.md)** - エンティティに衝撃を与える
- **[knockback](./knockback.md)** - エンティティをノックバック
- **[shoot](./shoot.md)** - 発射物を発射
- **[title](./title.md)** - 画面操作
- **[team](./team.md)** - チーム操作

## マクロの使用

全ての ScriptEvent でマクロを使用できます。マクロについての詳細は [Macro](../Macro/) を参照してください。
