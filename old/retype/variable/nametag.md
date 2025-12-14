---
label: nametag変数
authors:
  - name: Nano
    email: nano@un-known.xyz
    link: https://twitter.com/Nano191225
    avatar: /images/nano-icon.png
date: 2024-06-15T19:00
description: nametag変数について説明します。
layout: default
order: 600
---

実行者のネームタグを代入します。<br />
renameメソッドで名前が変更された場合、変更後の名前が使用されます。

テキストが使用できる場所で以下のように使用します。
```
{nametag}
```
Notchが実行者でネームタグがMarkusの場合、以下のように表示されます。
```
Markus
```

### 例

+++ tell
tellメソッドを使用した例です。
自分のネームタグを含めて、挨拶をします。
```
/tag @s add "tell:Hello {nametag}!"
```
Notchが実行者でネームタグがNotchの場合、以下のように表示されます。
```
Hello Notch!
```
+++ setItem
setItemメソッドを使用した例です。
自分のネームタグを含むダイヤモンドの剣を持たせます。
```
/tag @s add "setItem:{item=minecraft:diamond_sword,name='{nametag} の剣'}"
```
Notchが実行者でネームタグがPerssonの場合、ダイヤモンドの剣の名前は以下のように表示されます。
```
Persson の剣
```
+++