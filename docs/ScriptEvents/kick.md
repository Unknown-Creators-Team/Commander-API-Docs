---
title: "kick"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**kick** は、プレイヤーをサーバーからキックする ScriptEvent です。  
キック理由を指定することもできます。

## 構文

```mcfunction
/scriptevent capi:kick <理由>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `理由` | キックの理由（省略可） |

## 戻り値

なし

## 使用例

### シンプルなキック

プレイヤーをキックします。

```mcfunction
/execute as @a[tag=ban] run scriptevent capi:kick
```

### 理由を付けてキック

キック理由を表示してキックします。

```mcfunction
/execute as @a[tag=ban] run scriptevent capi:kick ルール違反のため
```

**キック画面に表示される理由**:
```
ルール違反のため
```

### プレイヤー名を含む理由

マクロを使用して、キック理由にプレイヤー名を含めます。

```mcfunction
/execute as @a[tag=afk] run scriptevent capi:kick <!name>さんは長時間操作がありませんでした
```

**キック画面に表示される理由**:
```
Notchさんは長時間操作がありませんでした
```

[!ref ../Macro/Name.md]

### 条件付きキック

スコアに基づいてキックします。

```mcfunction
/execute as @a[scores={violations=3..}] run scriptevent capi:kick 違反回数が上限に達しました
```

### タイムアウトキック

一定時間操作がないプレイヤーをキックします。

```mcfunction
/execute as @a[scores={afk_time=6000..}] run scriptevent capi:kick AFK タイムアウト
```

## 注意事項

- プレイヤーのみが実行できます
- キック後、プレイヤーは再度参加できます（BANとは異なります）
- 理由に特殊文字が含まれる場合、キックが失敗することがあります
- キック失敗時は理由なしでキックが試行されます

## 関連項目

- [kill](./kill.md) - プレイヤーをキル
