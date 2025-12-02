---
title: "actionbar"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**actionbar** は、プレイヤーのアクションバーにメッセージを表示する ScriptEvent です。  
アクションバーは、ホットバーの上に表示される一時的なメッセージ領域です。

## 構文

```mcfunction
/scriptevent capi:actionbar <メッセージ>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `メッセージ` | アクションバーに表示するメッセージ |

## 戻り値

なし

## 使用例

### シンプルなメッセージ

プレイヤーのアクションバーにメッセージを表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar こんにちは！
```

**表示例**:
```
こんにちは！
```

### プレイヤー名を表示

プレイヤー名をアクションバーに表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar ようこそ、<!name>さん！
```

**表示例**:
```
ようこそ、Notchさん！
```

[!ref ../Macro/Name.md]

### 体力表示

プレイヤーの体力をアクションバーに表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar §c HP: <!score=capi:health> / 20
```

**表示例**:
```
HP: 18 / 20
```

[!ref ../Macro/Score.md]

### 座標表示

プレイヤーの座標をアクションバーに表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar X: <!calc=floor({x})> Y: <!calc=floor({y})> Z: <!calc=floor({z})>
```

**表示例**:
```
X: 100 Y: 64 Z: -50
```

[!ref ../Macro/Calc.md]

### 複数情報の表示

体力、レベル、経験値を同時に表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar HP: <!score=capi:health> | LV: <!score=capi:level> | XP: <!score=capi:total_xp>
```

**表示例**:
```
HP: 20 | LV: 42 | XP: 1500
```

[!ref ../Macro/Score.md]

## 注意事項

- アクションバーのメッセージは一時的で、数秒後に消えます
- 新しいメッセージを表示すると、前のメッセージは上書きされます
- プレイヤーのみが実行できます（エンティティやブロックからは実行できません）

## 関連項目

- [tell](./tell.md) - プレイヤーにチャットメッセージを送信
- [say](./say.md) - 全体にメッセージを送信
