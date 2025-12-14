---
label: spawnentityメソッド
authors:
  - name: arutaka1220
    link: https://twitter.com/arutaka1220
    avatar: /images/arutaka-icon.png
date: 2024-07-26T18:12
description: spawnentityメソッドについて説明します。
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

