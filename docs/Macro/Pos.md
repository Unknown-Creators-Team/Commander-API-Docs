---
title: "Pos マクロ"
last_update:
  date: 2025-12-21
  author: Nano191225
---

## 概要

**Pos マクロ** は、スコアボードに保存された座標情報を取得するマクロです。  
`名前_x`, `名前_y`, `名前_z` の形式でスコアボードに保存された座標を読み取り、座標文字列として返します。

:::info エンティティ限定
このマクロはエンティティのみが使用できます。
:::

## 構文

### 基本形式

```plaintext
<!pos=名前>
```

### オフセット付き形式

```plaintext
<!pos=[名前, x, y, z]>
```

または

```plaintext
<!pos=[名前, オフセット値]>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `名前` | スコアボードに保存されている座標の識別子 |
| `x`, `y`, `z` | 座標に加算するオフセット値（オプション） |
| `オフセット値` | 全座標軸に加算する単一の値（オプション） |

## 戻り値

座標を `x y z` の形式で返します。  
スコアが設定されていない場合は、空文字列を返します。

## 使用例

### 保存された座標にテレポート

スコアボードに保存された座標にプレイヤーをテレポートします。

```mcfunction
# 座標を保存
/scoreboard players set @s home_x 100
/scoreboard players set @s home_y 64
/scoreboard players set @s home_z 200

# 保存された座標にテレポート
/scriptevent capi:run tp @s <!pos=home>
```

**実行されるコマンド**:
```mcfunction
/tp @s 100 64 200
```

### オフセット付きでブロックを設置

保存された座標の上にブロックを設置します。

```mcfunction
# 座標を保存
/scoreboard players set @s spawn_x 100
/scoreboard players set @s spawn_y 64
/scoreboard players set @s spawn_z 200

# 保存された座標の1ブロック上に金ブロックを設置
/scriptevent capi:run setblock <!pos=[spawn, 0, 1, 0]> gold_block
```

**実行されるコマンド**:
```mcfunction
/setblock 100 65 200 gold_block
```

### 座標の全軸にオフセットを適用

```mcfunction
/scoreboard players set @s center_x 0
/scoreboard players set @s center_y 64
/scoreboard players set @s center_z 0

# 全座標に+10を加算
/scriptevent capi:run tp @s <!pos=[center, 10]>
```

**実行されるコマンド**:
```mcfunction
/tp @s 10 74 10
```

## 注意事項

- スコアボードのオブジェクト名は `名前_x`, `名前_y`, `名前_z` の形式で保存されている必要があります
- いずれかの座標スコアが設定されていない場合、空文字列が返されます
- オフセットは数値として扱われ、元の座標に加算されます
