---
title: "chatSend"
---

## 説明
プレイヤーがチャットメッセージを送信したときにトリガーされるイベントです。メッセージの長さや内容に関する情報を取得できます。

---

## トリガータグ
イベントがトリガーされたとき、プレイヤーに自動付与されるタグです。

| タグ名 | 説明 |
| ----- | ----- |
| `capi:chat` | このイベントがトリガーされたとき、プレイヤーに自動付与されます。 |
| `chat:{メッセージ}` | 送信されたメッセージがタグとして付与されます。 |

## トリガースコア
イベントがトリガーされたとき、自動で更新されるスコアボードです。

| スコアボード名 | 説明 |
| ----- | ----- |
| `capi:chat_len` | 送信されたメッセージの長さ（文字数）です。 |
| `capi:chat_cnt` | プレイヤーが送信したメッセージの総数です。（累積） |

## 特殊機能
- `mute` タグを持つプレイヤーはチャットの送信がキャンセルされます。
- `mute:{メッセージ}` タグでミュート時のカスタムメッセージを設定できます。
- `chat:` で始まるタグは自動的に削除されます。

## 使用例

### 基本的な検出

長いメッセージを送信したプレイヤーを検出する例：

```mcfunction
/execute as @a[tag=capi:chat,scores={capi:chat_len=50..}] run say 長いメッセージを送信しました！
```

### 短いメッセージの検出

短いメッセージを送信したプレイヤーを検出する例：

```mcfunction
/execute as @a[tag=capi:chat,scores={capi:chat_len=..5}] run tellraw @s "§cメッセージが短すぎます！"
```

### チャット回数のカウント

多くのメッセージを送信したプレイヤーを検出する例：

```mcfunction
/execute as @a[tag=capi:chat,scores={capi:chat_cnt=100..}] run title @s actionbar "§6チャット100回達成！"
```

### 特定のメッセージの検出

特定のメッセージを送信したプレイヤーを検出する例：

```mcfunction
/execute as @a[tag=chat:help] run tellraw @s "§bヘルプコマンド: /help"
/execute as @a[tag=chat:hello] run say こんにちは！
```

### プレイヤーのミュート

プレイヤーをミュートする例：

```mcfunction
# ミュートを設定
tag @a[name="PlayerName"] add mute

# カスタムメッセージ付きミュート
tag @a[name="PlayerName"] add mute:§cあなたは5分間ミュートされています。
```

### チャット統計の管理

チャット統計をリセットする例：

```mcfunction
# 全プレイヤーのチャット回数をリセット
scoreboard players reset @a capi:chat_cnt

# 特定のプレイヤーのみリセット
scoreboard players reset @a[name="PlayerName"] capi:chat_cnt
```

### メッセージ長に応じた処理

メッセージの長さに応じて異なる処理を実行する例：

```mcfunction
# 非常に長いメッセージ
/execute as @a[tag=capi:chat,scores={capi:chat_len=100..}] run tellraw @s "§cメッセージが長すぎます！"

# 適切な長さのメッセージ
/execute as @a[tag=capi:chat,scores={capi:chat_len=10..50}] run scoreboard players add @s good_message 1
```

### チャットイベントを使った報酬システム

チャット参加者に報酬を与える例：

```mcfunction
# 10回チャットごとにポイント付与
/execute as @a[tag=capi:chat,scores={capi:chat_cnt=10}] run scoreboard players add @s points 1
/execute as @a[tag=capi:chat,scores={capi:chat_cnt=10}] run scoreboard players set @s capi:chat_cnt 0

# 初回チャットボーナス
/execute as @a[tag=capi:chat,scores={capi:chat_cnt=1}] run give @s diamond 1
```
