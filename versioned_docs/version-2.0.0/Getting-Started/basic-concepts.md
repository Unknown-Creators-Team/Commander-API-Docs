---
title: "基本概念 / Basic Concepts"
last_update:
  date: 2025-12-12
  author: Nano191225
sidebar_position: 3
---

# Commander API の基本概念

Commander API を効果的に使うために、3つの主要な概念を理解しましょう。

## 1. イベント (Event)

**イベント**は、ワールド内で何かが起こったときに自動的に情報を提供する仕組みです。

### イベントの種類

Commander API のイベントは、大きく2つのタイプに分けられます。

#### トリガーイベント

特定のアクションが発生したときに**タグ**を付与します。

**例：ボタンを押したとき**
```mcfunction
/execute as @a[tag=capi:button] run say ボタンが押されました！
```

プレイヤーがボタンを押すと、`capi:button` タグが自動的に付与されます。このタグを持つプレイヤーに対してコマンドを実行できます。

**主なトリガーイベント:**
- [buttonPush](../Event/buttonPush.md) - ボタンを押したとき
- [playerBreakBlock](../Event/playerBreakBlock.md) - ブロックを壊したとき
- [itemUse](../Event/itemUse.md) - アイテムを使ったとき
- [chatSend](../Event/chatSend.md) - チャットを送信したとき

:::tip
タグは自動的に削除されますが、手動で削除することもできます。
また、Configでタグを削除するタイミングを変更することも可能です。
```mcfunction
/tag @s remove capi:button
```
:::

#### ティックイベント

毎ティック（約0.05秒ごと）情報を更新し、**スコアボード**または**タグ**で値を提供します。

**例：プレイヤーの体力を表示**
```mcfunction
/execute as @a run scriptevent capi:actionbar HP: <!score=capi:health>
```

`capi:health` というスコアボードに、プレイヤーの現在の体力が常に記録されています。

**主なティックイベント（スコアベース）**
- [health](../Event/health.md) - 体力
- [location](../Event/location.md) - 座標（x, y, z）
- [velocity](../Event/velocity.md) - 移動速度
- [level](../Event/level.md) - レベル

**主なティックイベント（タグベース）**
- [playerStateTags](../Event/playerStateTags.md) - プレイヤーの状態（泳いでいる、飛んでいる、など）

:::info イベントの詳細
すべてのイベントの一覧と使い方は、[イベントページ](../Event/)を参照してください。
:::

---

## 2. マクロ (Macro)

**マクロ**は、コマンド内で動的な値を扱うための機能です。`<!...>` の形式で記述します。

### マクロの基本構文

```plaintext
<!マクロ名>
<!マクロ名=値>
```

### よく使うマクロ

#### `<!name>` - プレイヤー名

コマンド実行者の名前に置き換わります。

```mcfunction
/scriptevent capi:actionbar こんにちは、<!name>さん！
```

#### `<!calc=計算式>` - 計算

数式を計算して結果を表示します。

```mcfunction
/scriptevent capi:actionbar 答え: <!calc=10 * 5 + 3>
```

結果：「答え: 53」

#### `<!score=スコア名>` - スコアの値

スコアボードの値を取得します。

```mcfunction
/scriptevent capi:actionbar 所持金: <!score=money>円
```

#### `<!if=[条件,真の場合,偽の場合]>` - 条件分岐

条件によって表示内容を変えます。

```mcfunction
/scriptevent capi:actionbar <!if=[10 < <!score=capi:health>, 元気です, 体力が少ない！]>
```

体力が10より大きければ「元気です」、そうでなければ「体力が少ない！」と表示されます。

#### `<!nl>` - 改行

テキストを改行します。

```mcfunction
/scriptevent capi:actionbar 1行目<!nl>2行目<!nl>3行目
```

:::info マクロの詳細
すべてのマクロの一覧と詳しい使い方は、[マクロページ](../Macro/)を参照してください。
:::

---

## 3. ScriptEvent

**ScriptEvent**は、Commander API が提供する拡張コマンドです。`/scriptevent capi:` で始まります。

### 基本構文

```mcfunction
/scriptevent capi:<機能名> <パラメータ>
```

### 主な ScriptEvent

#### メッセージ表示

```mcfunction
/scriptevent capi:actionbar メッセージ
/scriptevent capi:tell メッセージ
/scriptevent capi:say メッセージ
```

#### プレイヤー操作

```mcfunction
/scriptevent capi:tp {location=[~,~10,~]}  # 10ブロック上にテレポート
/scriptevent capi:rename ニックネーム       # 名前を変更
/scriptevent capi:kick さようなら           # プレイヤーをキック
```

#### アイテム操作

```mcfunction
/scriptevent capi:set_item {id=diamond,amount=64}  # ダイヤモンド64個を取得
```
<!-- /scriptevent capi:set_item {id=air}       # スロット0を空にする -->

#### 高度な機能

```mcfunction
/scriptevent capi:delay {ticks=100,command=say 5秒後に実行！}  # 遅延実行
/scriptevent capi:explosion {radius=5}                        # 爆発を生成
/scriptevent capi:form {...}                                  # フォームUIを表示
```

:::info ScriptEvent の詳細
すべての ScriptEvent の一覧と詳しい使い方は、[ScriptEvent ページ](../ScriptEvent/)を参照してください。
:::

---

## 【実践】 3つの概念を組み合わせる

これらの概念を組み合わせると、強力な機能を作れます。

### ブロックを壊したらメッセージと報酬

```mcfunction
# ブロックを壊したら実行
/execute as @a[tag=capi:break] run scriptevent capi:actionbar ブロックを破壊！<!nl>報酬: 10コイン
/execute as @a[tag=capi:break] run scoreboard players add @s money 10
/execute as @a[tag=capi:break] run tag @s remove capi:break
```

**解説:**
1. **イベント**: `capi:break` タグでブロック破壊を検知
2. **ScriptEvent**: `capi:actionbar` でメッセージを表示
3. **マクロ**: `<!nl>` で改行
4. スコアボードで報酬を追加
5. タグを削除して重複実行を防止

### 体力が少なくなったら警告

```mcfunction
/execute as @a[scores={capi:health=..5}] run scriptevent capi:actionbar §c危険！体力: <!score=capi:health>
```

**解説:**
1. **イベント**: `capi:health` スコアで体力を監視
2. **セレクター**: 体力が5以下のプレイヤーを対象
3. **ScriptEvent**: `capi:actionbar` でアクションバーに警告
4. **マクロ**: `<!score=capi:health>` で現在の体力を表示

---

## まとめ

- **イベント** = ワールドで何が起こったかを知る
- **マクロ** = コマンド内で動的な値を扱う
- **ScriptEvent** = 拡張機能を実行する

これらを組み合わせることで、バニラでは実現できない複雑で便利な機能を作ることができます。

## 次のステップ

基本概念を理解したら、各機能の詳細を学びましょう。

- [イベント一覧](../Event/) - すべてのイベントと使い方
- [マクロ一覧](../Macro/) - すべてのマクロと使い方
- [ScriptEvent 一覧](../ScriptEvent/) - すべての拡張コマンド
- [作品例](../Example/) - 実践的な使用例

:::tip
実際に手を動かして試すのが一番の学習方法です。小さな機能から作ってみましょう！
:::
