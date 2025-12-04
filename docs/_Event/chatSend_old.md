---
title: "chatSend - old"
last_update:
  date: 2025-11-30
  author: arutaka1220
---

# 💬 chatSend

> プレイヤーがチャットを送信したときにトリガーされるイベントです。

---

## 🏷️ トリガータグ

イベント発生時にプレイヤーに自動付与されるタグです。

<table>
<tr>
<td width="40%">

### `capi:chat`

</td>
<td>

このイベントがトリガーされたときにプレイヤーに追加されます。

</td>
</tr>
<tr>
<td>

### `chat:<メッセージ>`

</td>
<td>

チャットの内容が含まれた状態でプレイヤーに追加されます。

**例:**
- 「Hello」と送信 → `chat:Hello`
- 「!help」と送信 → `chat:!help`

</td>
</tr>
</table>

---

## 📊 トリガースコア

イベント発生時に自動的に設定・更新されるスコアボードです。

| スコアボード | 説明 |
|------------|------|
| **`capi:chat_len`** | メッセージの文字数が代入されます |
| **`capi:chat_cnt`** | チャットを送信するたびに1加算されます |

---

## 🎛️ コントロールタグ

管理者が任意で付与できるタグです。

### 🔇 `mute`

このタグをプレイヤーに付与すると、プレイヤーの発言権をなくすことができます。

```
デフォルトメッセージ: §cYou have been muted.
```

### 🔇 `mute:<カスタムメッセージ>`

コロンの後にメッセージを追加すると、プレイヤーがチャットしようとした際にそのメッセージが表示されます。

**例:** `mute:§cスパム行為のため発言が制限されています`

---

## 📚 使用例

### ✨ カスタムコマンドを作成する

`!help` を送信したらヘルプを表示:

```mcfunction
/tag @a[tag="chat:!help"] add "tell:ヘルプ{nl}Nobody"
/tag @a remove "chat:!help"
```

---

### 📈 チャット頻度を監視する

10回以上チャットしたプレイヤーに警告:

```mcfunction
/tag @a[scores={capi:chat_cnt=10..}] add spam_warning
```

---

### 📏 長文メッセージを検知する

100文字以上のメッセージを送信したプレイヤーに通知:

```mcfunction
/tell @a[scores={capi:chat_len=100..}] §eメッセージが長すぎます
```

---

### プレイヤーをミュートする

**ミュート設定:**

```mcfunction
/tag @a[name="PlayerName"] add "mute:§cスパム行為のため一時的にミュートされています"
```

**ミュート解除:**

```mcfunction
/tag @a[name="PlayerName"] remove "mute:§cスパム行為のため一時的にミュートされています"
```

---

<div align="center">

**💡 ヒント:** トリガータグは1tickで自動削除されるため、検知処理は即座に実行してください。

</div>