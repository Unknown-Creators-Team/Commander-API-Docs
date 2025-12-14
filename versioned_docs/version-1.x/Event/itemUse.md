---
last_update:
  date: 2023-04-23
  author: Nano191225
---

プレイヤーがアイテムを使用したときにトリガーされます。
## tags
* **Capi:itemUse**
> このイベントがトリガーされたときプレイヤーに追加されます。
* **itemUse**
> プレイヤーが使用したアイテムのIDが含まれた状態で追加されます。<br />
> **例:**<br />
> `itemUse:diamond_sword`<br />
> `itemUse:stone`<br />
* **itemUseD**
> プレイヤーが使用したアイテムの詳細が含まれた状態で追加されます。<br />
> **例:**<br />
> `itemUseD:{id=minecraft:diamond_sword,lore=[]}`<br />
> `itemUseD:{id=minecraft:compass,name='§r§cUnknown Games§r\n§7USE§r',lore=[]}`<br />