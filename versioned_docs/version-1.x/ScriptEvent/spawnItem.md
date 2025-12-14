---
title: spawnitemメソッド
last_update:
  date: 2024-07-26
  author: arutaka1220
---

## 引数
```ts
interface ItemObject {
    item: string;
    name?: string;
    amount?: string | number;
    lore?: string[];
    enchants?: { name: string, level: string | number }[];
    can_place_on?: string[];
    can_destroy?: string[];
    lock?: ItemLockMode;
    keep_on_death?: string | boolean;
    x?: string | number;
    y?: string | number;
    z?: string | number;
    dimension?: string;
}
```

## 使用例

### `-32 -60 2`に以下のカスタマイズがされたダイヤモンドの剣をスポーンさせる。

* その人の名前が入った剣
* 鋭さ3
* loreにランクを表示

```
/scriptevent Capi:spawnItem {item=diamond_sword, name='{name}の剣', enchants=[{name=sharpness, level=3}], lore=[ランク, ★★★★☆], x=-32, y=-60, z=2}
```

### 草ブロックと土を壊せる捨てられない石つるはしをスポーンさせる
```
/scriptevent Capi:spawnItem {item=stone_pickaxe, can_destroy=[grass, stone], lock=inventory}
```