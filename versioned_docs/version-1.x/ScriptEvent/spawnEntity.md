---
title: spawnentityメソッド
last_update:
  date: 2024-07-26
  author: arutaka1220
---

エンティティをワールドに召喚します。

## 引数
```ts
interface SpawnEntity {
    id: string;
    name?: string;
    x?: number;
    y?: number;
    z?: number;
    dimension?: string;
    set_on_fire?: number;
}
```

## 使用例

### 0, 0, 0に牛をスポーンさせる
```
/scriptevent capi:spawnentity {id=minecraft:cow, x=0, y=0, z=0}
```

### 0, 0, 0に牛をスポーンさせて10秒間燃えた状態にする
```
/scriptevent capi:spawnentity {id=minecraft:cow, x=0, y=0, z=0, set_on_fire=10}
```

### 0, 0, 0に「hello」と名前の付いた牛をスポーンさせ10秒間燃えた状態にする
```
/scriptevent capi:spawnentity {id=minecraft:cow, x=0, y=0, z=0, set_on_fire=10, name='hello'}
```

