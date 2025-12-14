エンティティをスポーンさせます。
### プロパティ
* id - エンティティのID (string, 必須)
* name - エンティティの名前 (string)
* set_on_fire - エンティティを炎上させる秒数 (number)
* x - X座標 (number)
* y - Y座標 (number)
* z - Z座標 (number)
### 使用例
`12 64 211`に`牛`と名前のついた`minecraft:cow`をスポーンさせる。
```
/scriptevent Capi:spawnEntity {id=cow, name=牛, x=12, y=64, z=211}
```
2秒間炎上する豚をスポーンさせる。
```
/scriptevent Capi:spawnEntity {id=pig, set_on_fire=2}
```