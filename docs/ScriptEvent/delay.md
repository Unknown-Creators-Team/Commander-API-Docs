---
title: "delay"
last_update:
  date: 2025-12-04
  author: Nano191225
---

## 概要

**delay** は、指定したティック数後にコマンドを実行する ScriptEvent です。  
`schedule` コマンドを使用せずに遅延実行を実現できます。

## 構文

```mcfunction
/scriptevent capi:delay <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ ESON
```plaintext
{ticks=ティック数,command=コマンド}
```
+++ JSON
```json
{
    "ticks": ティック数,
    "command": "コマンド"
}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `ticks` | 遅延させるティック数（1秒 = 20ティック） | ✓ |
| `command` | 実行するコマンド | ✓ |


## 使用例

### 5秒後にコマンドを実行

5秒（100ティック）後にコマンドを実行します。

+++ ESON
```mcfunction
/scriptevent capi:delay {ticks=100,command=say 5秒経過しました！}
```
+++ JSON
```mcfunction
/scriptevent capi:delay {"ticks": 100, "command": "say 5秒経過しました！"}
```
+++

### 3秒後にプレイヤーをテレポート

3秒（60ティック）後にプレイヤーをテレポートします。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:delay {ticks=60,command=tp @s 0 100 0}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:delay {"ticks": 60, "command": "tp @s 0 100 0"}
```
+++

### 10秒後にドアを閉じる

ボタンでドアを開き、10秒（200ティック）後に自動で閉じます。

+++ ESON
```mcfunction
# ドアを開く
/execute as @a[tag=capi:button] run fill 10 64 11 10 66 11 air

# 10秒後にドアを閉じる
/execute as @a[tag=capi:button] run scriptevent capi:delay {ticks=200,command=fill 10 64 11 10 66 11 stone}
```
+++ JSON
```mcfunction
# ドアを開く
/execute as @a[tag=capi:button] run fill 10 64 11 10 66 11 air

# 10秒後にドアを閉じる
/execute as @a[tag=capi:button] run scriptevent capi:delay {"ticks": 200, "command": "fill 10 64 11 10 66 11 stone"}
```
+++

### カウントダウンタイマー

1秒ごとにカウントダウンメッセージを表示します。

+++ ESON
```mcfunction
/scriptevent capi:delay {ticks=0,command=say §c3}
/scriptevent capi:delay {ticks=20,command=say §c2}
/scriptevent capi:delay {ticks=40,command=say §c1}
/scriptevent capi:delay {ticks=60,command=say §aスタート！}
```
+++ JSON
```mcfunction
/scriptevent capi:delay {"ticks": 0, "command": "say §c3"}
/scriptevent capi:delay {"ticks": 20, "command": "say §c2"}
/scriptevent capi:delay {"ticks": 40, "command": "say §c1"}
/scriptevent capi:delay {"ticks": 60, "command": "say §aスタート！"}
```
+++

### 遅延爆発

5秒後に爆発を発生させます。

+++ ESON
```mcfunction
/execute as @a run scriptevent capi:delay {ticks=100,command=scriptevent capi:explosion {radius=3}}
```
+++ JSON
```mcfunction
/execute as @a run scriptevent capi:delay {"ticks": 100, "command": "scriptevent capi:explosion {\"radius\": 3}"}
```
+++

### 複数のコマンドを順番に実行

複数のコマンドを時間差で実行します。

+++ ESON
```mcfunction
/scriptevent capi:delay {ticks=0,command=say §6イベント開始準備中...}
/scriptevent capi:delay {ticks=40,command=say §e2秒後に開始します}
/scriptevent capi:delay {ticks=60,command=say §c1秒後に開始します}
/scriptevent capi:delay {ticks=80,command=say §aイベント開始！}
/scriptevent capi:delay {ticks=80,command=gamemode adventure @a}
```
+++ JSON
```mcfunction
/scriptevent capi:delay {"ticks": 0, "command": "say §6イベント開始準備中..."}
/scriptevent capi:delay {"ticks": 40, "command": "say §e2秒後に開始します"}
/scriptevent capi:delay {"ticks": 60, "command": "say §c1秒後に開始します"}
/scriptevent capi:delay {"ticks": 80, "command": "say §aイベント開始！"}
/scriptevent capi:delay {"ticks": 80, "command": "gamemode adventure @a"}
```
+++

### 効果の自動解除

一時的な効果を付与し、一定時間後に解除します。

+++ ESON
```mcfunction
# 即座に効果を付与
/execute as @a run effect @s speed 999 1

# 30秒（600ティック）後に効果を解除
/execute as @a run scriptevent capi:delay {ticks=600,command=effect @s speed 0}
```
+++ JSON
```mcfunction
# 即座に効果を付与
/execute as @a run effect @s speed 999 1

# 30秒（600ティック）後に効果を解除
/execute as @a run scriptevent capi:delay {"ticks": 600, "command": "effect @s speed 0"}
```
+++

### 警告メッセージ

警告後、一定時間経過してからアクションを実行します。

+++ ESON
```mcfunction
# 警告を表示
/execute as @a[tag=violator] run tellraw @s §c警告：10秒後にキックされます

# 10秒（200ティック）後にキック
/execute as @a[tag=violator] run scriptevent capi:delay {ticks=200,command=kick @s ルール違反のためキックされました}
```
+++ JSON
```mcfunction
# 警告を表示
/execute as @a[tag=violator] run tellraw @s §c警告：10秒後にキックされます

# 10秒（200ティック）後にキック
/execute as @a[tag=violator] run scriptevent capi:delay {"ticks": 200, "command": "kick @s ルール違反のためキックされました"}
```
+++

## 注意事項

- `ticks` パラメータは必須です
- `command` パラメータは必須です
- 1秒 = 20ティックです（例：5秒 = 100ティック）
- 実行元のエンティティまたはブロックが消失した場合でもコマンドは実行されます
- 実行者がいない場合、オーバーワールドで実行されます
- `schedule` コマンドと異なり、ファンクションファイルは不要です

## 関連項目

- [run](./run.md) - コマンドを実行
- [call](./call.md) - 登録されたコマンドセットを呼び出し
