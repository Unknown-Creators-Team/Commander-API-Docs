setItemを使用してプレイヤーにアイテムを渡します
## 使用例
### Notchにダイヤ剣を渡す
```
/tag @s add "setItem:{item=minecraft:diamond_sword}"
```

### Notchのスロット2にダイヤ剣をセットする
```
/tag @s add "setItem:{item=minecraft:diamond_sword,slot=2}"
```

### Notchのスロット2に鋭さ5と耐久力3がついたダイヤ剣をセットする
```
/tag @s add "setItem:{item=minecraft:diamond_sword,slot=2,enchants=[{name=sharpness,level=5},{name=unbreaking,level=3}]}"
```

### Notchのスロット2にデータ値が0の土を64個セットする
```
/tag @s add "setItem:{item=minecraft:dirt,amount=64,data=0,slot=2}"
```

### Notchに名前がついた剣を渡す
```
/tag @s add "setItem:{item=minecraft:diamond_sword,name='{name} の剣'}"
```
剣の名前 : `Notch の剣`

## 変数
[変数](https://github.com/191225/Commander-API/wiki/Variable) を使用することができます