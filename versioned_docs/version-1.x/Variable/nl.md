---
title: nl変数
last_update:
  date: 2024-06-15
  author: Nano
sidebar_position: 500
---

テキストに改行を挿入します。
通常の改行コードである `\n` は使用できません。

テキストが使用できる場所で以下のように使用します。
```
upper{nl}lower
```
この場合、`upper` と `lower` の間に改行が挿入されます。
```
upper
lower
```

### 例

+++ tell
tellメソッドを使用した例です。
```
/tag @s add "tell:Hello{nl}World"
```
この場合、`Hello` と `World` の間に改行が挿入されます。
```
Hello
World
```
+++ setItem
setItemメソッドを使用した例です。
```
/tag @s add "setItem:{item=minecraft:diamond_sword,name='Diamond{nl}Sword'}"
```
この場合、`Diamond` と `Sword` の間に改行が挿入されます。
```
Diamond
Sword
```
+++ rename
renameメソッドを使用した例です。
```
/tag @s add "rename:{name}{nl}{score:Capi:health} HP"
```
この場合、`name` と `score:Capi:health` の間に改行が挿入されます。<br />
Notchを実行者とし、体力はハート10個の場合、以下のように表示されます。
```
Notch
20 HP
```
[!ref name変数](./name.md)
[!ref score変数](./score.md)
+++