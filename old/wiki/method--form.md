formを使ってプレイヤーにフォームを送信します

## 使用例

### フォームを送信する
```
/tag @s add "form:{buttons=[{text=ボタン}]}"
```
<img src="https://cdn.discordapp.com/attachments/1029008466913792050/1037070677594882178/unknown.png" alt="image"/>

***

```
/tag @s add "form:{title=タイトル,body=ボディ,buttons=[{text=ボタン１,textures=textures/blocks/dirt,tag=タグ１},{text=ボタン２,textures=textures/blocks/diamond_block,tag=タグ２}]}"
```
<img src="https://cdn.discordapp.com/attachments/1029008466913792050/1037069666977337374/unknown.png" alt="image"/><br />
「ボタン１」をクリックしたときにNotchにつくタグ : `タグ１`<br />
「ボタン２」をクリックしたときにNotchにつくタグ : `タグ２`

***

```
/tag @s add "form:{title=ルール,body='１．スパムをしない。{nl}２．暴言を言わない。{nl}３．不正行為をしない。{nl}{nl}{nl}{nl}{nl}{nl}{nl}',buttons=[{text=同意する,textures=textures/ui/realms_green_check.png,tag=agree},{text=同意しない,textures=textures/ui/realms_red_x.png}]}"
```
<img src="https://cdn.discordapp.com/attachments/1029008466913792050/1037072734926147584/unknown.png" alt="image"/><br />
「同意する」をクリックしたときにNotchにつくタグ : `agree`<br />

## 変数
[変数](https://github.com/191225/Commander-API/wiki/Variable) を使用することができます