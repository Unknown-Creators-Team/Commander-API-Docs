<br /><br /><br />
このページはリニューアルされました。<br />
詳細は[ドキュメント](https://c-api.docs.un-known.xyz/variable/)をご覧ください。<br />
下記の情報は更新されていないため、誤っている可能性があります。<br />
<br /><br /><br />
***
<br /><br /><br />
テキストを置き換えます

## 使用例
### name - プレイヤー名を挿入します
```
/tag "Notch" add "setItem:{item=minecraft:diamond_sword,name='{name} の剣'}"
```
剣の名前: `Notchの剣`

### nl - 改行を挿入します
```
/tag "Notch" add "setItem:{item=minecraft:diamond_sword,name='{name} の剣{nl}v2'}"
```
剣の名前: `Notchの剣`<br />
`v2`

### tag - 持っているタグのコロンの右側を挿入します
```
/tag "Notch" add "rank:Admin"
/tag "Notch" add "setItem:{item=minecraft:diamond_sword,name='{tag:rank:Admin} の剣'}"
```
剣の名前: `Admin の剣`

### score - スコアを挿入します
```
/scoreboard players set "Notch" money 100
/tag "Notch" add "rename:{name}[{score:money}money]"
```
Notchの名前: `Notch[100money]`<br />
Version1.3.0から`{score:{name=name,object=object}}`のような構文でダミーオブジェクトを挿入できます。
### calc - 数値を計算します
```
/tag "Notch" add "tell:{calc:1 + 1}, {calc:2 * 3}, {calc:2 ** 10}"
```
送信されるメッセージ: `2, 6, 1024`

### dimension - ディメンション名を挿入します
```
/tag "Notch" add "tell:あなたは {dimension:{score:Capi:dimension}} にいます。"
```
オーバーワールドにいるときに送信されるメッセージ: `あなたは overworld にいます。`