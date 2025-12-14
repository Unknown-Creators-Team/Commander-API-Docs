---
label: dimension変数
authors:
  - name: Nano
    email: nano@un-known.xyz
    link: https://twitter.com/Nano191225
    avatar: /images/nano-icon.png
date: 2024-06-16T12:00
description: dimension変数について説明します。
layout: default
order: 100
---

与えられた数値をディメンションに変換して代入します。
存在意義が不明であるため、今後のアップデートで削除される可能性があります。

テキストが使用できる場所で以下のように使用します。
```
{dimension:数値}
```
`数値` にはディメンションに変換したい数値を入れます。
`数値` が `0` の場合、以下のように表示されます。
```
overworld
```

### 例

+++ tell
tellメソッドを使用した例です。
ディメンションを表示します。
```
/tag @s add "tell:{dimension:{score:Capi:dimension}}"
```
実行者がネザーにいる場合、以下のように表示されます。
```
nether
```
[!ref score変数](./score.md)
+++