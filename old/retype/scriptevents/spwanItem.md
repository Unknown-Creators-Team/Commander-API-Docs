---
label: spawnitemメソッド
authors:
  - name: arutaka1220
    link: https://twitter.com/arutaka1220
    avatar: /images/arutaka-icon.png
date: 2024-07-26T18:38
description: spawnitemメソッドについて説明します。
---

プレイヤーにアイテムを渡します。<br />
内容は [setItem](./setItem.md) とほぼ同一です。<br />
[spawnItem](./spawnItem.md)は[setItem](./setItem.md)に座標指定が加わった感じです。
[!ref setItem](./setItem.md)

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