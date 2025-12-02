---
title: "rename"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**rename** は、プレイヤーのネームタグを変更する ScriptEvent です。  
プレイヤーの頭上に表示される名前を変更できます。

:::warning プレイヤー名は変わりません！
rename によって変更できるのはネームタグのみです。  
チャットなどのプレイヤー名を変更することはできません。
:::

## 構文

```mcfunction
/scriptevent capi:rename <ネームタグ>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `ネームタグ` | 設定するネームタグ |


## 使用例

### ネームタグを変更する

シンプルにネームタグを変更します。

```mcfunction
/execute as @a run scriptevent capi:rename Notch
```

**実行後の名前**:
```
Notch
```

### ネームタグの色を変更する

name マクロを活用し、既存の名前に色を付けます。

```mcfunction
/execute as @a run scriptevent capi:rename §c<!name>
```

**Notchが実行したときの実行後の名前**:
```
Notch (赤色)
```

::: !ref ../Macro/Name.md

### タグに応じて色を変更する

tag マクロを活用し、タグによって色が変わるようにします。

```mcfunction
/tag @s add color:c
/execute as @a run scriptevent capi:rename §<!tag=color><!name>
```

**Notchが実行したときの実行後の名前**:
```
Notch (赤色)
```

::: !ref ../Macro/Name.md
::: !ref ../Macro/Tag.md

### ネームタグに体力を表示する

name マクロと score マクロを活用し、体力を表示します。

```mcfunction
/execute as @a run scriptevent capi:rename <!name><!nl>§c HP: <!score=capi:health>
```

**Notchが実行者で、体力がハート10個分のときの名前**:
```
Notch
HP: 20
```

::: !ref ../Macro/Name.md
::: !ref ../Macro/NewLine.md
::: !ref ../Macro/Score.md

### ネームタグにレベルを表示する

プレイヤーのレベルを名前の下に表示します。

```mcfunction
/execute as @a run scriptevent capi:rename <!name><!nl>§6 Lv.<!score=capi:level>
```

**実行後の名前**:
```
Notch
Lv.42
```

::: !ref ../Macro/Name.md
::: !ref ../Macro/NewLine.md
::: !ref ../Macro/Score.md

### 条件付きネームタグ

特定の条件でネームタグを変更します。

```mcfunction
/execute as @a run scriptevent capi:rename <!name><!if=score:capi:health<10><!nl>§c [危険]<!endif>
```

**体力が10未満の場合の表示**:
```
Notch
[危険]
```

::: !ref ../Macro/Name.md
::: !ref ../Macro/If.md

### 称号を表示する

プレイヤーに称号を付けます。

```mcfunction
/execute as @a[tag=admin] run scriptevent capi:rename §6[管理者]§f <!name>
```

**実行後の名前**:
```
[管理者] Notch
```

::: !ref ../Macro/Name.md

## 注意事項

- プレイヤーのみが実行できます
- ネームタグは永続的に保存されます
- 元の名前に戻すには [reset_name](./reset_name.md) を使用してください
- チャット欄のプレイヤー名は変更されません

## 関連項目

- [reset_name](./reset_name.md) - ネームタグをリセット
