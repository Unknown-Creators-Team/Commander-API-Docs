---
title: "鬼ごっこ"
last_update:
  date: 2025-12-07
  author: Nano191225
---


## 仕様

- 鬼には `it` タグを追加する。
- 鬼がほかのプレイヤーを殴ったら、殴られたプレイヤーに `it` タグを追加し、鬼から `it` タグを削除する。
- 殴ったの検知には entityHurt イベントを使用する。

::: !ref ../Event/entityHurt

::: !ref ../ScriptEvent/say

::: !ref ../ScriptEvent/run

::: !ref ../Macro/Selector

::: !ref ../Macro/At

## コマンド

### 鬼ごっこ開始コマンド

```
/tag @a remove it
/tag @r add it
/scriptevent capi:say §c鬼は §l<!selector={tag=it}> §r§cだ！
/execute as @a[tag=it] run scriptevent capi:tell あなたは鬼だ！<!nl>ほかのプレイヤーを倒そう。
/execute as @a[tag=!it] run scriptevent capi:tell 鬼に捕まらないように逃げろ！
```

### 鬼ごっこ処理コマンド

+++ コマンドブロックで処理

特に遅延など必要ないですが、すべてのコマンドをrunで実行する必要があります。
```mcfunction
/execute as @a[tag=it,tag=capi:damage] run scriptevent capi:say §l§c<!selector={tags=[it,capi:damage]}> §r§cが §l<!selector={tag=capi:hurt}> §r§cを捕まえた！
/execute as @a[tag=it,tag=capi:damage] run scriptevent capi:run tag @a[tag=capi:hurt] add it
/execute as @a[tag=it,tag=capi:damage] run scriptevent capi:run tag @s remove it
/scriptevent capi:run tag <!at>a remove capi:attack
/scriptevent capi:run tag <!at>a remove capi:hurt
```
+++ Callで処理

以下のような長いコマンド（100文字以上）はコマンドを分割する必要があります。

::: !ref ../Tool/calls

```mcfunction
/execute as @a[tag=it,tag=capi:damage] run say §l§c<!selector={tags=[it,capi:damage]}> §r§cが §l<!se
# コマンドの最初に + を付けて前のコマンドに連結
+lector={tag=capi:hurt}> §r§cを捕まえた！
/execute as @a[tag=it,tag=capi:damage] run tag @a[tag=capi:hurt] add it
/execute as @a[tag=it,tag=capi:damage] run tag @s remove it
/tag @a remove capi:attack
/tag @a remove capi:hurt
```

+++
