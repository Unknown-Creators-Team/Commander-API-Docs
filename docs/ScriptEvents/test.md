---
title: "test"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**test** は、テストを実行する ScriptEvent です。  
開発中の機能をテストするために使用されます。

## 構文

```mcfunction
/scriptevent capi:test <テスト名>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `テスト名` | 実行するテストの名前（省略可） |

## 戻り値

なし

## 使用例

### 全てのテストを実行

テスト名を省略すると、全てのテストが実行されます。

```mcfunction
/scriptevent capi:test
```

### 特定のテストを実行

特定のテストのみを実行します。

```mcfunction
/scriptevent capi:test my_test
```

### エンティティの位置でテスト

プレイヤーの位置でテストを実行します。

```mcfunction
/execute as @a run scriptevent capi:test
```

### ブロックの位置でテスト

特定のブロックの位置でテストを実行します。

```mcfunction
/execute positioned 100 64 100 run scriptevent capi:test
```

## 注意事項

- 実行者または実行位置が必要です
- テストは開発者向けの機能です
- 本番環境では使用を避けてください
- テストはコードで事前に定義されている必要があります

## 関連項目

このコマンドは主に開発者向けの機能です。
