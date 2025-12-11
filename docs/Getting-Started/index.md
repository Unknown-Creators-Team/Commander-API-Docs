---
title: "はじめに / Getting Started"
last_update:
  date: 2025-12-12
  author: Nano191225
sidebar_position: 2
---

# Commander API をはじめよう

このガイドでは、Commander API の導入から基本的な使い方までを順番に説明します。

## Commander API とは？

**Commander API** は、マイクラ統合版のコマンドシステムを大幅に拡張するビヘイビアパックです。ScriptAPI を活用し、バニラのコマンドだけでは実現できない高度な機能を提供します。

### 主な特徴

- **豊富なイベントシステム** - プレイヤーの行動やワールドの変化を検知
- **マクロ機能** - コマンド内で動的な値や計算を利用可能
- **拡張コマンド** - インベントリ操作、UI表示、高度なエンティティ制御など
- **設定のカスタマイズ** - 機能の有効化/無効化、イベント名の変更が可能

## 必要なもの

Commander API を使用するには、以下が必要です。

- **マイクラ統合版**
  - ベータAPIを有効にする必要があります
  - 推奨バージョン：最新版
- **Commander API ビヘイビアパック**
  - [GitHub Releases](https://github.com/Unknown-Creators-Team/Commander-API/releases) から最新版をダウンロード

:::warning 実験的機能について
Commander API はベータAPIを使用します。この機能を有効にしたワールドは、以前のバージョンで開くことができなくなる場合があります。重要なワールドで使用する前に、バックアップを取ることを強く推奨します。
:::

## 学習の流れ

Commander API を効率的に学ぶために、以下の順序でドキュメントを読むことをおすすめします。

### 1. [インストール](./installation.md)
Commander API のダウンロードとワールドへの導入方法を学びます。

### 2. [最初のコマンド](./first-command.md)
実際に Commander API を使った簡単なコマンドを実行してみます。

### 3. [基本概念](./basic-concepts.md)
イベント、マクロ、ScriptEvent の基本的な考え方を理解します。

### 4. 各機能の詳細を学ぶ
- [イベント (Event)](../Event/) - トリガーとティックイベント
- [マクロ (Macro)](../Macro/) - 動的な値の扱い方
- [スクリプトイベント (ScriptEvent)](../ScriptEvent/) - 拡張コマンド
- [設定 (Config)](../Config/) - カスタマイズ方法

### 5. [作品例 (Example)](../Example/)
実践的な使用例を見て、アイデアを広げます。

## サポート

質問や問題がある場合は、以下のリソースを活用してください。

- **[公式 Discord サーバー](https://discord.gg/uTqyqtHWG4)** - コミュニティとの交流、質問
- **[GitHub Issues](https://github.com/Unknown-Creators-Team/Commander-API/issues)** - バグ報告、機能リクエスト
- **[トラブルシューティング](../tshoot.md)** - よくある問題と解決方法

:::tip
ドキュメント内の検索機能（`Ctrl + K` または `Cmd + K`）を使うと、目的の情報を素早く見つけることができます。
:::

::: !ref ./installation
