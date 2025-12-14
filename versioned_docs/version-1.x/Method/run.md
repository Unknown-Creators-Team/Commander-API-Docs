---
last_update:
  date: 2023-03-24
  author: Nano191225
---

1つのコマンドで複数のコマンドを実行します。

## 使用例

### functionのように使用する
```
/tag @s add "run:['tell @s This is tell','title @s title This is title','title @s actionbar This is actionbar','playsound note.bass']"
```
![image](https://cdn.discordapp.com/attachments/961976284232167445/1086718750352490647/image.png)

### スコアやタグを挿入して使用する
```
/tag @a[tag=Capi:blockBreak] add "run:['setblock {score:Capi:blockBreakX} {score:Capi:blockBreakY} {score:Capi:blockBreakZ} {tag:blockBreak}','tag @s remove Capi:blockBreak']"
```
![IMB_tFhnJU](https://user-images.githubusercontent.com/93137582/227474497-b2970899-6701-42e5-a5b4-820dbddd8bef.gif)

## 変数
[変数](https://github.com/191225/Commander-API/wiki/Variable) を使用することができます