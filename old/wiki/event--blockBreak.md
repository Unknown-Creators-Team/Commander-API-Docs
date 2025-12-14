プレイヤーがブロックを破壊したときにトリガーされます。
## tags
* **Capi:blockBreak**
> このイベントがトリガーされたときプレイヤーに追加されます。
* **blockBreak**
> 破壊したブロックのIDが含まれた状態でプレイヤーに追加されます。
## scores
* **Capi:blockBreakX**
> 破壊したブロックのX座標が代入されます。
* **Capi:blockBreakY**
> 破壊したブロックのY座標が代入されます。
* **Capi:blockBreakZ**
> 破壊したブロックのZ座標が代入されます。
## 使用例
### 破壊したブロックを復元する
```
/tag @a[tag=Capi:blockBreak] add "run:['setblock {score:Capi:blockBreakX} {score:Capi:blockBreakY} {score:Capi:blockBreakZ} {tag:blockBreak}']"
/tag @a remove Capi:blockBreak
```