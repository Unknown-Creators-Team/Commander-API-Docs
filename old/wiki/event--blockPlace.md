プレイヤーがブロックを設置したときにトリガーされます。
## tags
* **Capi:blockPlace**
> このイベントがトリガーされたときプレイヤーに追加されます。
* **blockPlace**
> 設置したブロックのIDが含まれた状態でプレイヤーに追加されます。
## scores
* **Capi:blockPlaceX**
> 設置したブロックのX座標が代入されます。
* **Capi:blockPlaceY**
> 設置したブロックのY座標が代入されます。
* **Capi:blockPlaceZ**
> 設置したブロックのZ座標が代入されます。
## 使用例
### 設置したブロックを空気に置き換える
```
/tag @a[tag=Capi:blockPlace] add "run:['setblock {score:Capi:blockPlaceX} {score:Capi:blockPlaceY} {score:Capi:blockPlaceZ} air']"
/tag @a remove Capi:blockPlace
```