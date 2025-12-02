---
title: "call"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**call** は、事前に登録されたコマンドセットを呼び出す ScriptEvent です。  
複数のコマンドをまとめて実行し、引数を渡すこともできます。

## 構文

```mcfunction
/scriptevent capi:call <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ JSON
```json
{
    "name": "呼び出し名",
    "args": {
        "arg1": "値1",
        "arg2": "値2"
    }
}
```
+++ ESON
```plaintext
{name=呼び出し名,args={arg1=値1,arg2=値2}}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `name` | 呼び出すコマンドセットの名前 | ✓ |
| `args` | 引数のオブジェクト | × |


## 使用例

### シンプルな呼び出し

登録されたコマンドセットを呼び出します。

+++ JSON
```mcfunction
/scriptevent capi:call {"name": "welcome"}
```
+++ ESON
```mcfunction
/scriptevent capi:call {name=welcome}
```
+++

### 引数付きで呼び出し

引数を渡してコマンドセットを呼び出します。

+++ JSON
```mcfunction
/scriptevent capi:call {
    "name": "give_items",
    "args": {
        "item": "diamond",
        "amount": "10"
    }
}
```
+++ ESON
```mcfunction
/scriptevent capi:call {name=give_items,args={item=diamond,amount=10}}
```
+++

### マクロと組み合わせて使用

マクロを使用して動的に呼び出します。

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:call {
    "name": "player_setup",
    "args": {
        "player": "<!name>"
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:call {name=player_setup,args={player=<!name>}}
```
+++

::: !ref ../Macro/Name.md

### スコアを引数として渡す

スコアを引数として渡します。

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:call {
    "name": "level_up",
    "args": {
        "level": "<!score=player_level>"
    }
}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:call {name=level_up,args={level=<!score=player_level>}}
```
+++

::: !ref ../Macro/Score.md

## コマンドセットの登録方法

コマンドセットは `CAPI_CALLS` というスコアボードデータベースに保存されます。

### UI での登録

コマンド登録画面を表示するには：

```mcfunction
/scriptevent capi:call
```

このコマンドを実行すると、コマンドセットの登録・編集・削除ができるUIが表示されます。

### コードでの登録

TypeScript/JavaScriptで直接登録することもできます。

```javascript
// 登録例
const db = new ScoreboardDatabase<string, string[]>("CAPI_CALLS");
db.set("welcome", [
    "say Welcome to the server!",
    "give @s bread 5",
    "effect @s regeneration 10 1"
]);
```

### 引数の使用

登録時に `{arg_name}` を使用して引数を受け取れます。

```javascript
db.set("give_items", [
    "give @s {item} {amount}"
]);
```

## 注意事項

- `name` パラメータは必須です
- 存在しないコマンドセット名を指定するとエラーが発生します
- 引数は `{arg_name}` の形式でコマンド内に記述します
- マクロは各コマンド実行前に展開されます
- コマンドセットは事前に登録されている必要があります

## 関連項目

- [run](./run.md) - 単一のコマンドを実行
