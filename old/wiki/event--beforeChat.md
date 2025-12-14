プレイヤーがチャットしたときにトリガーされます。
## tags
* **Capi:chat**
> このイベントがトリガーされたときプレイヤーに追加されます。
* **chat**
> チャットの内容が含まれた状態でプレイヤーに追加されます。<br />
> **例:**<br />
> `chat:Hello`<br />
> `chat:!help`<br />
* **mute**
> タグをプレイヤーに追加することで、プレイヤーをミュートできます。<br />
> **例:**<br />
> `mute`<br />
> `mute:You are muted for spamming.`<br />

## scores
* **Capi:chatLength**
> メッセージの文字数が代入されます。
* **Capi:chatCount**
> チャットをするたびに1加算されます。

## 使用例
### カスタムコマンドを作成する。
`!help`を送信したらヘルプを表示
```
/tag @a[tag="chat:!help"] add "tell:ヘルプ{nl}Nobody"
/tag @a remove "chat:!help"
```