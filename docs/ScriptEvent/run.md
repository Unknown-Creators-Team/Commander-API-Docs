---
title: "run"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**run** は、コマンドを実行する ScriptEvent です。  
マクロを展開してからコマンドを実行できます。

## 構文

```mcfunction
/scriptevent capi:run <コマンド>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `コマンド` | 実行するコマンド（スラッシュなし） |


## 使用例

### シンプルなコマンド実行

コマンドを実行します。

```mcfunction
/execute as @a run scriptevent capi:run say Hello!
```

### プレイヤー名を含むコマンド

マクロを使用してプレイヤー名を含むコマンドを実行します。

```mcfunction
/execute as @a run scriptevent capi:run say <!name> joined the game
```

**実行結果**:
```
Notch joined the game
```

::: !ref ../Macro/Name.md

### スコアを使用したコマンド

スコアに基づいてコマンドを実行します。

```mcfunction
/execute as @a run scriptevent capi:run give @s diamond <!score=reward_count>
```

::: !ref ../Macro/Score.md

### 条件付きコマンド実行

条件に応じてコマンドを実行します。

```mcfunction
/execute as @a run scriptevent capi:run <!if=<!score=health><10>effect @s regeneration 10 1<!endif>
```

::: !ref ../Macro/If.md

### 複雑なコマンドの実行

複数のマクロを組み合わせたコマンドを実行します。

```mcfunction
/scriptevent capi:run tp @s <!calc=floor({x})> <!calc=floor({y})+10> <!calc=floor({z})>
```

::: !ref ../Macro/Calc.md

### タグに基づくコマンド

タグを使用したコマンドを実行します。

```mcfunction
/execute as @a run scriptevent capi:run effect @s <!tag=effect> 30 1
```

::: !ref ../Macro/Tag.md

## 注意事項

- エンティティのみが実行できます
- コマンドにはスラッシュ（/）を付けないでください
- マクロはコマンド実行前に展開されます
- エラーが発生した場合、詳細なエラーメッセージが表示されます

## 関連項目

- [call](./call.md) - 登録されたコマンドセットを呼び出し
