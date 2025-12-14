---
last_update:
  date: 2023-03-24
  author: Nano191225
---

プレイヤーにメッセージを送信します
## 使用例
### 攻撃したときのダメージ数を送信
```
/tag @a[tag=Capi:damage] add "tell:§7Caused §l§c{score:Capi:damage}§r §7damage!"
/tag @a remove Capi:damage
```
![image](https://user-images.githubusercontent.com/93137582/227509970-99f242a4-428d-4a22-928e-d924e17ede60.png)

### 使用したアイテムを送信
```
/tag @a[tag=Capi:itemUse] add "tell:§7You used §l§6{tag:itemUse}"
/tag @a remove Capi:itemUse
```
![image](https://user-images.githubusercontent.com/93137582/227511937-3d6bc78a-ba1f-430c-af80-cffbd5c4f14d.png)

## 変数
[変数](https://github.com/191225/Commander-API/wiki/Variable) を使用することができます