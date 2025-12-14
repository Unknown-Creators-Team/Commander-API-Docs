---
label: setitemメソッド
authors:
  - name: arutaka1220
    link: https://twitter.com/arutaka1220
    avatar: /images/arutaka-icon.png
date: 2024-07-26T18:17
description: setitemメソッドについて説明します。
---

プレイヤーにアイテムを渡します。

## 引数
```ts
interface ItemObject {
    item: string;
    name?: string;
    amount?: number;
    slot?: number;
    lore?: string[];
    enchants?: { name: string, level: number }[];
    can_place_on?: string[];
    can_destroy?: string[];
    lock?: ItemLockMode;
    keep_on_death?: boolean;
}
```

## 使用例

### ダイヤ剣を渡す
```
/scriptevent capi:setitem {item=minecraft:diamond_sword}
```

### スロット2にダイヤ剣を渡す
```
/scriptevent capi:setitem {item=minecraft:diamond_sword, slot=2}
```

### スロット2に鋭さ5と耐久力3がついたダイヤ剣をセットする
```
/scriptevent capi:setitem {item=minecraft:diamond_sword, slot=2, enchants=[{name=sharpness, level=5},{name=unbreaking, level=3}]}
```

### スロット2にデータ値が0の土を64個セットする
```
/scriptevent capi:setitem {item=minecraft:dirt, amount=64, data=0, slot=2}
```

### 自身の名前がついた剣を渡す
```
/scriptevent capi:setitem {item=minecraft:diamond_sword, name='{name} の剣'}
```