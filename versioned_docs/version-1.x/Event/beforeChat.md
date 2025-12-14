---
title: チャットイベント
last_update:
  date: 2024-07-21
  author: arutaka1220
---

プレイヤーがチャットをしたときにトリガーされます。

## タグ
タグ | 説明
--- | ---
`Capi:chat` | このイベントがトリガーされるとプレイヤーに追加されます。
`chat` | チャットの内容が含まれた状態でプレイヤーに追加されます。<br />例: `chat:チャットの内容`
`mute` | このタグをプレイヤーに追加することで、プレイヤーをミュートにできます。<br />また、ミュートの理由も付け足すことが可能です。<br />例: `mute`<br />例(+理由): `mute:あなたはミュートされています。`

## スコア
オブジェクト | 説明
--- | ---
`Capi:chatLength` | チャットしたメッセージの文字数が入ります。
`Capi:chatCount` | チャットをするたびに1加算された結果が入ります。

## 使用例
### カスタムコマンドを作成する
`!help` を送信したらヘルプを表示
```
/tag @a[tag="chat:!help"] add "tell:ヘルプ{nl}Nobody"
/tag @a remove "chat:!help"
```

[!ref nl変数](../Variable/nl.md)
[!ref tellメソッド](../Method/tell.md)