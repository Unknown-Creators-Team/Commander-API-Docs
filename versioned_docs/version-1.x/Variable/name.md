---
title: name変数
last_update:
  date: 2024-06-15
  author: Nano
sidebar_position: 700
---

実行者の名前を代入します。<br />
renameメソッドで名前が変更されていても、元の名前が代入されます。

テキストが使用できる場所で以下のように使用します。
```
{name}
```
Notchが実行者のとき、以下のように表示されます。
```
Notch
```

### 例

+++ tell
tellメソッドを使用した例です。
自分の名前を含めて、挨拶をします。
```
/tag @s add "tell:Hello {name}!"
```
Notchが実行者のとき、以下のように表示されます。
```
Hello Notch!
```
+++ setItem
setItemメソッドを使用した例です。
自分の名前を含むダイヤモンドの剣を持たせます。
```
/tag @s add "setItem:{item=minecraft:diamond_sword,name='{name} の剣'}"
```
Notchが実行者のとき、ダイヤモンドの剣の名前は以下のように表示されます。
```
Notch の剣
```
+++ rename
renameメソッドを使用した例です。
自分の名前の色を変更します。
```
/tag @s add "rename:§a{name}"
```
Notchが実行者のとき、以下のように表示されます。
++ 
```
Notch
```
+++