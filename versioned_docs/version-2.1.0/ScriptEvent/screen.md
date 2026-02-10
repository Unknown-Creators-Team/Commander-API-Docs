---
title: "Screen スクリプトイベント"
last_update:
  date: 2025-12-22
  author: Nano191225
---

## 概要

**Screen スクリプトイベント** は、画面の様々な位置にテキストを表示する機能を提供します。  
Commander API Screen 拡張アドオンが必要です。

:::warning 拡張アドオンが必要
このスクリプトイベントを使用するには、**Commander API Screen** 拡張アドオンが導入されている必要があります。
:::

## 構文

パラメータはJSON形式またはESON形式で指定できます：

### 左右の表示

+++ ESON
```plaintext
{type=l|r,text=テキスト}
```
+++ JSON
```json
{"type": "l"|"r", "text": "テキスト"}
```
+++

### 上下左右の表示（インデックス付き）

+++ ESON
```plaintext
{type=tl|t|tr|bl|br,index=1-5,text=テキスト}
```
+++ JSON
```json
{"type": "tl"|"t"|"tr"|"bl"|"br", "index": 1-5, "text": "テキスト"}
```
+++

### すべてクリア

+++ ESON
```plaintext
{type=ca}
```
+++ JSON
```json
{"type": "ca"}
```
+++

## パラメータ

### 表示位置タイプ

| タイプ | 位置 | インデックス |
|---|---|---|
| `l` | 左 (Left) | 不要 |
| `r` | 右 (Right) | 不要 |
| `tl` | 左上 (Top-Left) | 1-5 |
| `t` | 上 (Top) | 1-5 |
| `tr` | 右上 (Top-Right) | 1-5 |
| `bl` | 左下 (Bottom-Left) | 1-5 |
| `br` | 右下 (Bottom-Right) | 1-5 |
| `ca` | すべてクリア (Clear All) | - |

### その他のパラメータ

| パラメータ | 型 | 説明 |
|---|---|---|
| `type` | string | 表示位置のタイプ（必須） |
| `index` | number | 表示インデックス（`tl`, `t`, `tr`, `bl`, `br` の場合必須、1-5） |
| `text` | string | 表示するテキスト（オプション、省略時は非表示） |

## 使用例

### 左側にテキストを表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=l,text=左側のテキスト}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "l", "text": "左側のテキスト"}
```
+++

### 右側にテキストを表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=r,text=右側のテキスト}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "r", "text": "右側のテキスト"}
```
+++

### 左上に複数のテキストを表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=tl,index=1,text=1行目}
/scriptevent capi:screen {type=tl,index=2,text=2行目}
/scriptevent capi:screen {type=tl,index=3,text=3行目}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "tl", "index": 1, "text": "1行目"}
/scriptevent capi:screen {"type": "tl", "index": 2, "text": "2行目"}
/scriptevent capi:screen {"type": "tl", "index": 3, "text": "3行目"}
```
+++

### 上部中央にテキストを表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=t,index=1,text=§l§6タイトル}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "t", "index": 1, "text": "§l§6タイトル"}
```
+++

### 右上にステータス情報を表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=tr,index=1,text=HP: <!score=health>}
/scriptevent capi:screen {type=tr,index=2,text=所持金: <!score=money>円}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "tr", "index": 1, "text": "HP: <!score=health>"}
/scriptevent capi:screen {"type": "tr", "index": 2, "text": "所持金: <!score=money>円"}
```
+++

### 左下にミニマップ風の情報を表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=bl,index=1,text=座標: <!pos=capi:location>}
/scriptevent capi:screen {type=bl,index=2,text=ディメンション: <!score=capi:dimension>}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "bl", "index": 1, "text": "座標: <!pos=capi:location>"}
/scriptevent capi:screen {"type": "bl", "index": 2, "text": "ディメンション: <!score=capi:dimension>"}
```
+++

### 右下にクエスト情報を表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=br,index=1,text=§e§lクエスト}
/scriptevent capi:screen {type=br,index=2,text=§7進行度: <!score=quest_progress>/10}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "br", "index": 1, "text": "§e§lクエスト"}
/scriptevent capi:screen {"type": "br", "index": 2, "text": "§7進行度: <!score=quest_progress>/10"}
```
+++

### 特定の位置のテキストをクリア

+++ ESON
```mcfunction
/scriptevent capi:screen {type=tl,index=1,text=''}
```

または

```mcfunction
/scriptevent capi:screen {type=tl,index=1}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "tl", "index": 1, "text": ""}
```

または

```mcfunction
/scriptevent capi:screen {"type": "tl", "index": 1}
```
+++

### すべての表示をクリア

+++ ESON
```mcfunction
/scriptevent capi:screen {type=ca}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "ca"}
```
+++

## マクロとの組み合わせ

Commander API の各種マクロと組み合わせることで、動的な情報を表示できます。

### プレイヤー情報の表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=tl,index=1,text=プレイヤー: <!name>}
 /scriptevent capi:screen {type=tl,index=2,text=体力: <!score=capi:health>/20}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "tl", "index": 1, "text": "プレイヤー: <!name>"}
/scriptevent capi:screen {"type": "tl", "index": 2, "text": "体力: <!score=capi:health>/20"}
```
+++

### リアルタイム座標表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=bl,index=1,text=<!pos=capi:location>}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "bl", "index": 1, "text": "<!pos=capi:location>"}
```
+++

### 計算結果の表示

+++ ESON
```mcfunction
/scriptevent capi:screen {type=tr,index=1,text=速度: <!velocity=xz> m/s}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "tr", "index": 1, "text": "速度: <!velocity=xz> m/s"}
```
+++

## 実装例

### ステータスHUDの作成

プレイヤーの各種ステータスを常に表示するシステム。

+++ ESON
```mcfunction
# 1tickごとに更新
/execute as @a run scriptevent capi:screen {type=tr,index=1,text=§c❤ <!score=capi:health>}
/execute as @a run scriptevent capi:screen {type=tr,index=2,text=§e⭐ <!score=level>}
/execute as @a run scriptevent capi:screen {type=tr,index=3,text=§a💰 <!score=money>}
```
+++ JSON
```mcfunction
# 1tickごとに更新
/execute as @a run scriptevent capi:screen {"type": "tr", "index": 1, "text": "§c❤ <!score=capi:health>"}
/execute as @a run scriptevent capi:screen {"type": "tr", "index": 2, "text": "§e⭐ <!score=level>"}
/execute as @a run scriptevent capi:screen {"type": "tr", "index": 3, "text": "§a💰 <!score=money>"}
```
+++

### クエストトラッカー

進行中のクエストを画面左側に表示。

+++ ESON
```mcfunction
# クエスト開始時
/scriptevent capi:screen {type=l,text=§e§l[クエスト]<!nl>§r§7森を探索する}

# クエスト完了時
/scriptevent capi:screen {type=l,text=§a§l[完了]<!nl>§r§7森を探索する}
```
+++ JSON
```mcfunction
# クエスト開始時
/scriptevent capi:screen {"type": "l", "text": "§e§l[クエスト]<!nl>§r§7森を探索する"}

# クエスト完了時
/scriptevent capi:screen {"type": "l", "text": "§a§l[完了]<!nl>§r§7森を探索する"}
```
+++

### カスタムボスバー

上部中央にボス情報を表示。

+++ ESON
```mcfunction
/scriptevent capi:screen {type=t,index=1,text=§c§lドラゴン}
/scriptevent capi:screen {type=t,index=2,text=§c█████§7█████ 50%}
```
+++ JSON
```mcfunction
/scriptevent capi:screen {"type": "t", "index": 1, "text": "§c§lドラゴン"}
/scriptevent capi:screen {"type": "t", "index": 2, "text": "§c█████§7█████ 50%"}
```
+++

## 注意事項

- 同じ位置・インデックスに複数回送信した場合、最新のテキストが表示されます
- 前回と同じテキストを送信した場合、パフォーマンスのため処理がスキップされます
- 表示は `/title` コマンドと同じシステムを使用しているため、タイトルと併用する場合は注意が必要です
- `index` は 1 から 5 までの範囲で指定する必要があります
- プレイヤーがログアウトすると、そのプレイヤーの表示データは自動的にクリアされます
- `/title` 表示中に Screen スクリプトイベントを使用すると、`/title` の表示が消えます。（仕様です）

## 関連リンク

- [Commander API Screen 拡張アドオン](../Extension/Commander-API-Screen/)
- [Actionbar スクリプトイベント](./actionbar.md)
- [Tell スクリプトイベント](./tell.md)
