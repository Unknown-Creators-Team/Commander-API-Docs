以下が発生したときにトリガーされます。
* プレイヤーがプレイヤーを倒す
* プレイヤーがエンティティを倒す
* エンティティがプレイヤーを倒す

## tags
* **Capi:kill**
> プレイヤーを除くエンティティを倒したときに追加されます。
* **Capi:killPlayer**
> プレイヤーを倒したときに追加されます。
* **Capi:death**
> プレイヤー以外が原因で死んだときに追加されます。
* **Capi:deathPlayer**
> プレイヤーに倒されたときに追加されます。

## scores
* **Capi:kill**
> プレイヤーを除くエンティティを倒したときに1加算されます。
* **Capi:killPlayer**
> プレイヤーを倒したときに1加算されます。
* **Capi:death**
> プレイヤー以外が原因で死んだときに1加算されます。
* **Capi:deathPlayer**
> プレイヤーに倒されたときに1加算されます。

## 使用例
### K/Dをtellする。
```
/tag @s add "tell:{calc:{score:Capi:kill} / {score:Capi:death}}"
```