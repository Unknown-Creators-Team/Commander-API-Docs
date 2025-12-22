---
title: "Commander API Screen"
last_update:
  date: 2025-12-22
  author: Nano191225
---

## 概要

**Commander API Screen** は、画面にタイトルのような情報を表示するための公式拡張アドオンです。タイトルやサブタイトル、アクションバーといった機能は今まで通り使用できます。

<iframe width="560" height="315" src="https://www.youtube.com/embed/NA0_S_S0ZyA?si=r-Kc3a8YcGwntrbq" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 特徴

Commander API Screen は、画面の様々な位置にテキストを表示できる強力な拡張機能です。

- **複数の表示位置**: 左右、左上、上、右上、左下、右下の7箇所に配置可能
- **複数対応**: 各位置に最大5つまで表示可能（左右を除く）
- **マクロ対応**: Commander API の各種マクロと組み合わせて動的な情報を表示
- **パフォーマンス最適化**: 同じ内容の更新をスキップし、負荷を軽減

## 使用方法

`capi:screen` スクリプトイベントを使用して、画面に情報を表示します。

### 基本的な使い方

```mcfunction
# 右上にプレイヤーの体力を表示
/scriptevent capi:screen {type=tr,index=1,text=HP: <!score=capi:health>}

# 左側にクエスト情報を表示
/scriptevent capi:screen {type=l,text=§e[クエスト] §7森を探索する}
```

詳細な使用方法については、[Screen スクリプトイベント](../../ScriptEvent/screen.md) を参照してください。

## 導入方法

1. [Commander API をインストール](./../../Getting-Started/installation.md)
2. Commander API Screen の [Releases](https://capi.un-known.xyz/releases/?tab=commander-api-screen) ページから **Commander-API-Screen.mcaddon** をダウンロード
3. ビヘイビアパックをインポート

インポート方法は[こちら](./../../Getting-Started/installation.md#ビヘイビアパックをインポート)を参照してください。

:::tip
Commander API の設定で `強制読み込み` を有効にすると、拡張アドオンが読み込まれていない場合でもエラーを抑制できます。
:::

## 活用例

### ステータスHUD

画面右上にプレイヤーのステータスを常時表示：

```mcfunction
/execute as @a run scriptevent capi:screen {type=tr,index=1,text=§c❤ <!score=capi:health>}
/execute as @a run scriptevent capi:screen {type=tr,index=2,text=§a💰 <!score=capi:money>}
```

### カスタムボスバー

画面上部にボス情報を表示：

```mcfunction
/scriptevent capi:screen {type=t,index=1,text=§c§lエンダードラゴン}
/scriptevent capi:screen {type=t,index=2,text=§c████████§7██ 80%}
```

### 座標表示

画面左下にリアルタイム座標を表示：

```mcfunction
/execute as @a run scriptevent capi:screen {type=bl,index=1,text=<!pos=capi:location>}
```

## 関連リンク

- [Screen スクリプトイベント](../../ScriptEvent/screen.md) - 詳細な使用方法とパラメータ
- [Commander API マクロ](../../Macro/index.md) - 動的な情報表示に使用できるマクロ一覧