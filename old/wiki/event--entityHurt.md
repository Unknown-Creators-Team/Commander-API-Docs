プレイヤーがダメージを与えたまたは受けたときにトリガーされます。
## tags
* **Capi:hurt**
> プレイヤーが攻撃を受けた時に追加されます。
* **Capi:damage**
> プレイヤーが攻撃を与えた時に追加されます。
* **cause**
> プレイヤーがどのような攻撃を受けたか含まれた状態で追加されます。<br />
> **例:**<br />
> `cause:fall`<br />
> `cause:fire`<br />
> `cause:entityAttack`<br />
## scores
* **Capi:hurt**
> プレイヤーが受けたダメージ数を代入します。
* **Capi:damage**
> プレイヤーが与えたダメージ数を代入します。

### 使用例
## 与えたダメージ数をtellする。
```
/tag @a[tag=Capi:damage] add "tell:§7Caused §l§c{score:Capi:damage}§r §7damage!"
/tag @a remove Capi:damage
```
##受けたダメージ数をtellする。
```
/tag @a[tag=Capi:hurt] add "tell:§7God §l§c{score:Capi:hurt}§r §7damage!"
/tag @a remove Capi:hurt
```