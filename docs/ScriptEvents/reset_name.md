---
title: "reset_name"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**reset_name** は、プレイヤーのネームタグを元の名前に戻す ScriptEvent です。  
[rename](./rename.md) で変更したネームタグをリセットします。

## 構文

```mcfunction
/scriptevent capi:reset_name
```

## パラメータ

なし

## 使用例

### ネームタグをリセット

変更したネームタグを元に戻します。

```mcfunction
/execute as @a run scriptevent capi:reset_name
```

**実行後**:
```
元のプレイヤー名に戻ります
```

### 条件付きリセット

特定の条件でネームタグをリセットします。

```mcfunction
/execute as @a[tag=reset] run scriptevent capi:reset_name
```

**実行後**:
```
タグが "reset" のプレイヤーの名前が元に戻ります
```

### タイマー付きリセット

一定時間後にネームタグをリセットします。

```mcfunction
# ネームタグを変更
/execute as @a run scriptevent capi:rename §c<!name>

# 10秒後にリセット
/schedule on_area 10s run scriptevent capi:reset_name
```

### イベント終了時にリセット

イベント終了時に全員の名前をリセットします。

```mcfunction
/execute as @a run scriptevent capi:reset_name
/say イベントが終了しました
```

## 注意事項

- プレイヤーのみが実行できます
- パラメータは不要です
- ネームタグが変更されていない場合でも実行できます（エラーは発生しません）

## 関連項目

- [rename](./rename.md) - ネームタグを変更
