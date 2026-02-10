---
title: "kill"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**kill** は、プレイヤーをキルする ScriptEvent です。  
プレイヤーを死亡させ、リスポーン地点に戻します。

## 構文

```mcfunction
/scriptevent capi:kill
```

## パラメータ

なし

## 使用例

### シンプルなキル

プレイヤーをキルします。

```mcfunction
/execute as @a[tag=kill] run scriptevent capi:kill
```

### 条件付きキル

特定の条件でプレイヤーをキルします。

```mcfunction
/execute as @a[y=0,dy=-64] run scriptevent capi:kill
```

### ペナルティとしてのキル

ルール違反時にキルします。

```mcfunction
/execute as @a[tag=penalty] run scriptevent capi:kill
```

### 範囲外に出たプレイヤーをキル

ゲームエリア外に出たプレイヤーをキルします。

```mcfunction
/execute as @a[x=0,y=0,z=0,distance=100..] run scriptevent capi:kill
```

### ゲーム終了時にキル

ゲーム終了時に全プレイヤーをキルします。

```mcfunction
/execute as @a run scriptevent capi:kill
```

## 注意事項

- プレイヤーのみが実行できます
- 実行前にゲームモードを Adventure に変更し、実行後に元に戻します
- これにより、クリエイティブモードでもキルが機能します
- アイテムは通常通りドロップします
- キープインベントリのルールに従います

## 関連項目

- [kick](./kick.md) - プレイヤーをキック
- [tp](./tp.md) - プレイヤーをテレポート
