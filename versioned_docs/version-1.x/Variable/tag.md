---
title: tag変数
last_update:
  date: 2024-06-15
  author: Nano
sidebar_position: 400
---

実行者のタグをいい感じに代入します。

テキストが使用できる場所で以下のように使用します。
```
{tag:rank}
```
`rank:Admin` タグが付いているとき、以下のように表示されます。
```
Admin
```
このように、`{tag:}`内にタグ名を入れることで、そのタグを代入します。

### 例

+++ tell
tellメソッドを使用した例です。
自分についているランクを表示します。
##### 例１
```
/tag @s add rank:Admin
/tag @s add "tell:{tag:rank}"
```
出力
```
Admin
```
***
##### 例２
```
/tag @s add rank:Member
/tag @s add "tell:{tag:rank}"
```
出力
```
Member
```
+++ rename
renameメソッドを使用した例です。
自分についているランクを表示します。
##### 例１
```
/tag @s add rank:Admin
/tag @s add "rename:[{tag:rank}] {name}"
```
Notchが実行者の場合、以下のように表示されます。
```
[Admin] Notch
```
***
##### 例２
```
/tag @s add rank:Member
/tag @s add "rename:[{tag:rank}] {name}"
```
Notchが実行者の場合、以下のように表示されます。
```
[Member] Notch
```
[!ref name変数](./name.md)
+++
