---
label: renameメソッド
authors:
  - name: Nano
    email: nano@un-known.xyz
    link: https://twitter.com/Nano191225
    avatar: /images/nano-icon.png
date: 2024-06-16T22:00
description: renameメソッドについて説明します。
layout: default
order: 100
---

プレイヤーのネームタグを変更します。

!!!warning プレイヤー名は変わりません！
renameによって変更できるのはネームタグのみです。<br />
チャットなどのプレイヤー名を変更することはできません。
[!ref チャットでのプレイヤー名を変更する](/config/chatui.md)
!!!

## 使用例

### ネームタグを変更する
```
/scriptevent capi:rename Notch
```
実行後の名前
```
Notch
```

### ネームタグの色を変更する
name変数を活用し、既存の名前に新しいものを付け加える。
```
/scriptevent capi:rename §c{name}
```
:::red
Notchが実行したときの実行後の名前
```
Notch
```
:::
[!ref name変数](../Variable/name.md)

### ネームタグの色を変更する [!badge variant="dark" text="上級"]
name変数とtag変数を活用し、付いているタグによって色が変わるようにする。
+++ 赤
```
/tag @s add color:c
/scriptevent capi:rename §{tag:color}{name}
```
:::red
Notchが実行したときの実行後の名前
```
Notch
```
:::
+++ 青
```
/tag @s add color:b
/scriptevent capi:rename §{tag:color}{name}
```
:::blue
Notchが実行したときの実行後の名前
```
Notch
```
:::
+++ 緑
```
/tag @s add color:a
/scriptevent capi:rename §{tag:color}{name}
```
:::green
Notchが実行したときの実行後の名前
```
Notch
```
:::
+++
[!ref name変数](../Variable/name.md)
[!ref tag変数](../Variable/tag.md)

### ネームタグに体力を表示する
name変数とscore変数を活用し、scoreboardのbelownameよりもカスタマイズします。
```
/scriptevent capi:rename {name}{nl}{score:Capi:health} HP
```
Notchが実行者で、体力がハート10個分のときの名前
```
Notch
20 HP
```
[!ref name変数](../Variable/name.md)
[!ref nl変数](../Variable/nl.md)
[!ref score変数](../Variable/score.md)

### ネームタグに移動速度を表示する
!!!info
今後、実装予定がある機能を使用しています。
!!!
name変数とcalc変数、velocity変数を活用し、移動速度を小数第二位まで表示します。
```
/scriptevent capi:rename {name}{nl}{calc:floor(sqrt(({velocity:x}**2) + ({velocity:y}**2) + ({velocity:z}**2)) * 100) / 100 * 20} block/s
```
!!!danger
calc変数で小数点が使用できる日がくるまで、動作しません。<br />
幸いなことに、velocity変数と同時期にcalc変数が剰余(%)と整数除算(//)、べき乗(^)、少数をサポートします。（秘密ですよ！）
!!!
[!ref name変数](../Variable/name.md)
[!ref nl変数](../Variable/nl.md)
:::note
velocity変数は移行予定のため未実装です。
:::

<!-- Removed inline style block to avoid MDX parsing issues -->