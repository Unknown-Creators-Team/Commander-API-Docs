---
title: "set_item"
last_update:
  date: 2025-12-02
  author: Nano191225
---

## 概要

**set_item** は、プレイヤーのインベントリにアイテムを設定する ScriptEvent です。  
[spawn_item](./spawn_item.md) と似ていますが、こちらは直接インベントリに追加します。

## 構文

```mcfunction
/scriptevent capi:set_item <JSON形式のパラメータ>
```

## パラメータ

JSON形式でパラメータを指定します：

```json
{
    "id": "アイテムID",
    "name": "アイテム名",
    "amount": 数量,
    "slot": スロット番号,
    "lore": ["説明文1", "説明文2"],
    "enchants": [{"name": "エンチャント名", "level": レベル}],
    "can_place_on": ["ブロックID"],
    "can_destroy": ["ブロックID"],
    "lock": "ロックモード",
    "keep_on_death": true/false
}
```

| パラメータ | 説明 | 必須 |
|---|---|---|
| `id` | アイテムID | ✓ |
| `name` | アイテムの表示名 | × |
| `amount` | 数量 | × |
| `slot` | スロット番号（0-35） | × |
| `lore` | 説明文の配列 | × |
| `enchants` | エンチャントの配列 | × |
| `can_place_on` | 設置可能なブロック | × |
| `can_destroy` | 破壊可能なブロック | × |
| `lock` | アイテムロックモード | × |
| `keep_on_death` | 死亡時に保持 | × |

## 戻り値

なし

## 使用例

### シンプルなアイテム付与

ダイヤモンドをインベントリに追加します。

```mcfunction
/execute as @a run scriptevent capi:set_item {"id": "minecraft:diamond"}
```

### 数量を指定して付与

64個の土ブロックを追加します。

```mcfunction
/execute as @a run scriptevent capi:set_item {"id": "minecraft:dirt", "amount": 64}
```

### 特定のスロットに設定

スロット0にダイヤモンドの剣を設定します。

```mcfunction
/execute as @a run scriptevent capi:set_item {"id": "minecraft:diamond_sword", "slot": 0}
```

### 名前付きアイテム

カスタム名を付けたアイテムを付与します。

```mcfunction
/execute as @a run scriptevent capi:set_item {
    "id": "minecraft:diamond_sword",
    "name": "§6伝説の剣"
}
```

### 説明文付きアイテム

説明文を付けたアイテムを付与します。

```mcfunction
/execute as @a run scriptevent capi:set_item {
    "id": "minecraft:diamond_sword",
    "name": "§6勇者の剣",
    "lore": ["§7伝説の武器", "§7攻撃力 +10"]
}
```

### エンチャント付きアイテム

エンチャントを付けたダイヤモンドの剣を付与します。

```mcfunction
/execute as @a run scriptevent capi:set_item {
    "id": "minecraft:diamond_sword",
    "enchants": [
        {"name": "sharpness", "level": 5},
        {"name": "fire_aspect", "level": 2}
    ]
}
```

### 死亡時に保持するアイテム

死亡時に失わないアイテムを付与します。

```mcfunction
/execute as @a run scriptevent capi:set_item {
    "id": "minecraft:totem_of_undying",
    "keep_on_death": true,
    "slot": 0
}
```

### 完全にカスタマイズされたアイテム

全ての設定を行ったアイテムを付与します。

```mcfunction
/execute as @a run scriptevent capi:set_item {
    "id": "minecraft:diamond_sword",
    "name": "§c§l最強の剣",
    "amount": 1,
    "slot": 0,
    "lore": [
        "§7伝説の武器",
        "§7攻撃力 +100",
        "§7クリティカル率 +50%"
    ],
    "enchants": [
        {"name": "sharpness", "level": 10},
        {"name": "fire_aspect", "level": 5},
        {"name": "looting", "level": 3}
    ],
    "keep_on_death": true
}
```

### マクロを使用したアイテム

プレイヤー名を含む名前のアイテムを付与します。

```mcfunction
/execute as @a run scriptevent capi:set_item {
    "id": "minecraft:diamond",
    "name": "<!name>のダイヤモンド"
}
```

::: !ref ../Macro/Name.md

### 特定のブロックにのみ設置可能

特定のブロックにのみ設置できるアイテムを付与します。

```mcfunction
/execute as @a run scriptevent capi:set_item {
    "id": "minecraft:stone",
    "can_place_on": ["minecraft:dirt", "minecraft:grass_block"]
}
```

## スロット番号の参考

| スロット | 場所 |
|---|---|
| 0-8 | ホットバー |
| 9-35 | メインインベントリ |

## 注意事項

- プレイヤーのみが実行できます
- `id` パラメータは必須です
- `amount` のデフォルト値は 1 です
- `slot` を指定しない場合（-1）、空いているスロットに追加されます
- `slot` を指定した場合、そのスロットの既存アイテムは上書きされます
- 無効なアイテムIDを指定するとエラーが発生します
- エンチャントレベルは通常の上限を超えることができます

## 関連項目

- [spawn_item](./spawn_item.md) - アイテムをスポーン
- [get_item](./get_item.md) - アイテム情報を取得
- [set_slot](./set_slot.md) - スロットを選択
