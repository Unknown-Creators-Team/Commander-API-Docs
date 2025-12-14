---
last_update:
  date: 2023-04-22
  author: Nano191225
---

プレイヤーがエンティティを攻撃したときにトリガーされます。
## tags
* **Capi:attack**
> このイベントがトリガーされたときプレイヤーに追加されます。

* **attacked**
> 攻撃対象のIDが含まれた状態でプレイヤーに追加されます。<br />
> **例:**<br />
> `attacked:minecraft:zombie`<br />
> `attacked:minecraft:player`<br />
> `attacked:minecraft:stone`

## scores
* **Capi:attacks**
> 攻撃をするたびに1加算されます。

## 使用例
### 攻撃したときにtellする。
```
/tag @a[tag=Capi:attack] add "tell:§7You attacked §l§6{tag:attacked}§r§7."
/tag @a remove Capi:attack
```

### CPSを計測する。(`Capi:timestamp`の応用です)
あらかじめ`cps`スコアボードを作成する必要があります。
```
/scoreboard objectives add cps dummy
```
```
/execute if score stamp cps < @r Capi:timestamp as @a at @s run /scoreboard players operation @s cps = @s Capi:attacks
/execute if score stamp cps < @r Capi:timestamp as @a at @s run /scoreboard players set @s Capi:attacks 0
/scoreboard players operation stamp cps = @r Capi:timestamp

/titleraw @a actionbar {"rawtext":[{"text":"CPS: "},{"score":{"name":"*","objective":"cps"}}]}
```