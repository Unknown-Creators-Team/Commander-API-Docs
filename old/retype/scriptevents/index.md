---
label: スクリプトイベント
icon: command-palette
authors:
  - name: Nano
    email: nano@un-known.xyz
    link: https://twitter.com/Nano191225
    avatar: /images/nano-icon.png
date: 2024-06-16T22:00
description: script eventについて説明します。
layout: default
order: 2500
---

`/scriptevent` コマンドから実行できるメソッドです。<br />
これらのメソッドはtagメソッドから移行中であり、Stable版で使用できないものが多くあります。

### このドキュメントの閲覧方法
### オプション
[!badge variant="danger" text="必須"] このように記述されたオプションは、必ず必要なオプションです。<br />もし書かれていなければ、それは任意です。

### すべてのメソッド
:::warning
Wiki から移行中の内容をそのまま掲載しています。最新の動作と異なる可能性があります。
:::

### 移行中のメソッド

#### rename [!badge variant="info" text="Alpha"]
プレイヤーのネームタグを変更します。<br />
詳細は[こちら](./rename)を参照してください。

#### resetName [!badge variant="info" text="Alpha"]
変更されたネームタグをリセットします。<br />
詳細は[こちら](./resetName)を参照してください。

#### setItem [!badge variant="info" text="Alpha"]
プレイヤーにアイテムを渡します。<br />
詳細は[こちら](./setItem)を参照してください。

#### form [!badge variant="info" text="Alpha"]
プレイヤーにフォームを表示します。<br />
`action` `message` `modal` の3つから表示形式を選択できます。<br />
詳細は[こちら](./form)を参照してください。