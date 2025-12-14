プレイヤーが投げた投げ物(矢・トラインデント・ポーションなど)が着弾したときにトリガーされます。
## tags
* **Capi:hit**
> このイベントがトリガーされたときプレイヤーに追加されます。
* **hitWith**
> 使用した投げ物のIDが含まれた状態でプレイヤーに追加されます。<br />
> **例:**<br />
> `hitWith:minecraft:arrow`<br />
> `hitWith:minecraft:splash_potion`<br />
* **hitTo**
> 投げ物があたったエンティティまたはブロックのIDが含まれた状態でプレイヤーに追加されます。<br />
> **例:**<br />
> `hitTo:minecraft:grass`<br />
> `hitTo:minecraft:pig`<br />
## scores
* **Capi:hitX**
> 投げ物が当たったX座標が代入されます。
* **Capi:hitY**
> 投げ物が当たったY座標が代入されます。
* **Capi:hitZ**
> 投げ物が当たったZ座標が代入されます。
## 使用例
### 矢の着弾地点に雷を落とす
```
/tag @a[tag=Capi:hit,tag=hitWith:minecraft:arrow] add "run:['summon lightning_bolt {score:Capi:hitX} {score:Capi:hitY} {score:Capi:hitZ}']"
/tag @a remove Capi:hit
```