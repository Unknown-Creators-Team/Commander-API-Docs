---
title: "インストール / Installation"
last_update:
  date: 2025-12-12
  author: Nano191225
sidebar_position: 1
---

# Commander API のインストール

このページでは、Commander API をマイクラのワールドに導入する方法を説明します。

## ビヘイビアパックをダウンロード

1. [Commander API の GitHub Releases ページ](https://github.com/Unknown-Creators-Team/Commander-API/releases)にアクセスします
2. 最新のリリースから **Commander-API.mcpack** をダウンロードします

:::tip
「Latest」タグが付いたリリースが最新版です。通常、ページの一番上に表示されています。
:::

## ビヘイビアパックをインポート

### Windows 10/11 版

1. ダウンロードした **Commander-API.mcpack** ファイルをダブルクリック
2. マイクラが自動的に起動し、ビヘイビアパックがインポートされます
3. 「インポートに成功しました」というメッセージが表示されれば完了です

### Android / iOS

1. ダウンロードした **Commander-API.mcpack** ファイルをタップ
2. 「Minecraft で開く」を選択
3. ビヘイビアパックが自動的にインポートされます

### その他のプラットフォーム

.mcpack ファイルが動作しない場合は、手動でインポートできます。

1. .mcpack ファイルの拡張子を **.zip** に変更
2. ZIP ファイルを解凍
3. 解凍したフォルダを以下のディレクトリに配置：
   - **Windows**: `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\behavior_packs\`
   - **Android**: `内部ストレージ/games/com.mojang/behavior_packs/`
   - **iOS**: `マイファイル/Minecraft/games/com.mojang/behavior_packs/`

## ワールドに適用

### 新しいワールドを作成する場合

1. マイクラを起動し、「プレイ」→「新しいワールドを作成」を選択
2. 「新しいワールドを作成」をクリック
3. 「ワールド新規作成」画面で下にスクロール
4. 「ビヘイビアーパック」セクションを開く
5. **Commander API** を見つけて「有効化」をクリック
6. 「実験的機能」セクションを開く
7. **「ベータAPI」** を有効にする

:::warning 重要
「ベータAPI」を有効にしないと、Commander API は動作しません。必ず有効化してください。
:::

7. ワールドを作成して開始

### 既存のワールドに追加する場合

1. ワールド選択画面で、対象のワールドの編集ボタン（鉛筆アイコン）をクリック
2. 「ビヘイビアーパック」セクションを開く
3. **Commander API** を見つけて「有効化」をクリック
4. 「実験的機能」タブに切り替え
5. **「ベータAPI」** を有効にする
:::danger バックアップを推奨
既存のワールドに実験的機能を追加すると、以前のバージョンで開けなくなる可能性があります。重要なワールドの場合は、必ずバックアップを取ってから適用してください。
:::

7. 変更を保存してワールドに入る

## 動作確認

Commander API が正しくインストールされているか確認しましょう。

1. ワールドに入る
2. チャットを開き、以下のコマンドを実行

```mcfunction
/scriptevent capi:actionbar Hello, Commander API!
```

3. 画面中央の下部（アクションバー）に「Hello, Commander API!」と表示されれば成功です

![動作確認](./img/installation-test.png)

:::tip
コマンドが実行できない場合は、ワールドの設定で「チートの実行」が有効になっているか確認してください。
:::

## トラブルシューティング

インストール中に問題が発生した場合は、以下を確認してください。

### Commander API が動作しない

- ✅ 「ベータAPI」が有効になっているか
- ✅ ワールドで「チートの実行」が有効になっているか
- ✅ マイクラのバージョンが最新か
- ✅ ビヘイビアパックが正しくインポートされているか

### コマンドを実行してもエラーが出る

- ✅ コマンドのスペルが正しいか（`capi:` を忘れていないか）
- ✅ オペレーター権限を持っているか

その他の問題については、[トラブルシューティング](../tshoot.md)ページを参照してください。

---

インストールが完了したら、次は実際にコマンドを使ってみましょう！

::: !ref ./first-command
