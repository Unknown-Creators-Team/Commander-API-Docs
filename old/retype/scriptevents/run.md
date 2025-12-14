---
label: runメソッド
authors:
  - name: arutaka1220
    link: https://twitter.com/arutaka1220
    avatar: /images/arutaka-icon.png
date: 2024-07-26T18:12
description: runメソッドについて説明します。
---

1つのコマンドで複数のコマンドを実行します。

## 使用例

### functionのように使用する
```
/scriptevent capi:run "['tell @s This is tell', 'title @s title This is title', 'title @s actionbar This is actionbar', 'playsound note.bass']"
```