---
title: explosionメソッド
last_update:
  date: 2024-07-21
  author: arutaka1220
---

このメソッドは爆発を発生させることができます。

## 引数
```ts
interface Explosion {
    radius: number;
    x?: number;
    y?: number;
    z?: number;
    dimension?: string;
    options?: {
        allow_under_water?: boolean;
        breaks_blocks?: boolean;
        causes_fire?: boolean;
    }
}
```

## 使用例

### 0, 0, 0に半径5ブロックの爆発を発生させる
```
/scriptevent capi:explosion {radius=5, x=0, y=0, z=0}
```

### オプション例
半径5の爆発を座標 `6 -50 7` に発生させる。
```
/scriptevent capi:explosion {radius=5, x=6, y=-50, z=7}
```

ブロックを破壊し炎上させる爆発を発生させる。
```
/scriptevent capi:explosion {radius=5, options={breaks_blocks=true, causes_fire=true}}
```