---
title: "tp"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**tp** は、エンティティをテレポートする ScriptEvent です。  
座標、回転、ディメンションを指定してテレポートできます。

## 構文

```mcfunction
/scriptevent capi:tp <パラメータ>
```

## パラメータ

パラメータはJSON形式またはESON形式で指定できます：

+++ JSON
```json
{
    "location": [x, y, z],
    "rotation": [rx, ry],
    "dimension": "ディメンション名"
}
```
+++ ESON
```plaintext
{location=[x,y,z],rotation=[rx,ry],dimension=ディメンション名}
```
+++

| パラメータ | 説明 | 必須 |
|---|---|---|
| `location` | テレポート先の座標 [x, y, z] | ✓ |
| `rotation` | 向き [rx, ry] | × |
| `dimension` | ディメンション名 | × |

### 座標の指定方法

- 絶対座標: `100`, `64`, `-50`
- 相対座標: `~10`, `~`, `~-5`
- ローカル座標: `^1`, `^2`, `^-1`


## 使用例

### 絶対座標へのテレポート

指定した座標にテレポートします。

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:tp {"location": [100, 64, 100]}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:tp {location=[100,64,100]}
```
+++

### 相対座標へのテレポート

現在位置からの相対座標にテレポートします。

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:tp {"location": ["~10", "~", "~10"]}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:tp {location=[~10,~,~10]}
```
+++

### 向きを指定してテレポート

座標と向きを指定してテレポートします。

+++ JSON
```mcfunction
/execute as @a run scriptevent capi:tp {"location": [0, 64, 0], "rotation": [0, 0]}
```
+++ ESON
```mcfunction
/execute as @a run scriptevent capi:tp {location=[0,64,0],rotation=[0,0]}
```
+++

### ディメンションを指定してテレポート

異なるディメンションにテレポートします。

+++ JSON
/execute as @a run scriptevent capi:tp {"location": [0, 64, 0], "dimension": "nether"}
```

**利用可能なディメンション**:
- `overworld` - オーバーワールド
- `nether` - ネザー
- `the_end` - ジ・エンド

### ローカル座標へのテレポート

プレイヤーの向きに応じた座標にテレポートします。

```mcfunction
/execute as @a run scriptevent capi:tp {"location": ["^0", "^0", "^10"]}
```

### スポーン地点へのテレポート

スポーン地点にテレポートします。

```mcfunction
/execute as @a run scriptevent capi:tp {"location": [0, 64, 0], "rotation": [0, 0]}
```

### ランダムな場所へテレポート

マクロを使用してランダムな座標にテレポートします。

```mcfunction
/execute as @a run scriptevent capi:tp {"location": ["<!calc=random(-100,100)>", "64", "<!calc=random(-100,100)>"]}
```

::: !ref ../Macro/Calc.md

### 他のプレイヤーの位置へテレポート

セレクターと組み合わせて、他のプレイヤーの位置へテレポートします。

```mcfunction
/execute at @p[name=Notch] as @a[tag=teleport] run scriptevent capi:tp {"location": ["~", "~", "~"]}
```

## 注意事項

- エンティティに対して実行できます（プレイヤーに限りません）
- `location` パラメータは必須です
- 座標は配列として正確に3つの値を指定する必要があります
- `rotation` を省略した場合、現在の向きが維持されます
- `dimension` を省略した場合、現在のディメンションが使用されます
- 相対座標とローカル座標を混在させることはできません

## 関連項目

- [spawn_entity](./spawn_entity.md) - エンティティをスポーン
