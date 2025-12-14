---
title: "テレポーター"
last_update:
  date: 2025-12-09
  author: arutaka1220
---


## 仕様

<!-- ![設定メニュー](./img/teleporter_form.png) -->

- コンパスを右クリックしたプレイヤーにフォームを送信する
- フォームは `teleporter_form` コールであらかじめ作成しておく
- 移動先をフォームから選んだら、テレポート用コール `teleport_fade` を実行
- テレポート用コール `teleport_fade` は引数に座標と移動先の名前を受け取るようにすることで、汎用性を高める
- テレポートにはC-APIのtpを利用することで、`sendcommandfeedback` が有効の場合であってもチャットにテレポートログを残さない
- 右クリック検知には `itemUse` イベントを利用する

::: !ref ../Event/itemUse

::: !ref ../ScriptEvent/call

::: !ref ../ScriptEvent/tp

## コマンド

### 右クリック検知用コマンド (反復)

```
execute as @a[tag=item_use.id:minecraft:compass] at @s run scriptevent capi:call {name=teleporter_form}
execute as @a[tag=item_use.id:minecraft:compass] run tag @s remove item_use.id:minecraft:compass
```

### 右クリック処理 (Call)
以下のような長いコマンド（100文字以上）はコマンドを分割する必要があります。

::: !ref /tools/calls

JSON形式より、ESONのほうがCallに向いているため、以下のページから変換することをおすすめします。  
変換時はコマンド部分 `scriptevent capi:form` は含まないように注意してください。

::: !ref /tools/eson-json

以下のコマンドをコール `teleporter_form` で登録してください。

```mcfunction
scriptevent capi:form {
  "typ": "action",
  "ttl": "テレポーター",
  "btn": [
    {
      "txt": "ロビー",
      "img": "textures/ui/mashup_world",
      "act": {
        "typ": "run",
        "val": "/scriptevent capi:call {name=teleport_fade,args={x=0,y=0,z=0,name=ロビー}}"
      }
    },
    {
      "txt": "PvPエリア",
      "img": "textures/ui/icon_recipe_equipment",
      "act": {
        "typ": "run",
        "val": "scriptevent capi:call {name=teleport_fade,args={x=100,y=0,z=0,name=PvPエリア}}"
      }
    }
  ]
}
```

### テレポート処理 (Call)
以下のコマンドをコール `teleport_fade` で登録してください。
```mcfunction
camera @s fade time 0.4 0.3 0.4 color 0 0 0
playsound random.toast_recipe_unlocking_out
scriptevent capi:tell §a{name}へ移動しました！
scriptevent capi:delay {ticks=10,command=scriptevent capi:tp {location=[{x}, {y}, {z}]}}
```