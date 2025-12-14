アイテムをスポーンさせます。
### プロパティ
* item - アイテムのID (string, 必須)
* amount - アイテムの数 (number)
* name - アイテムの名前 (string)
* lore - アイテムのロール (string[])
* enchants - アイテムのエンチャント (object)<br />
┣ name - エンチャントID (string, 必須)<br />
┗ level - エンチャントレベル (number)<br />
* can_place_on - 設置可能なブロック (string[])
* can_destroy - 破壊可能なブロック (string[])
* lock - アイテムのロックタイプ (string)
* keep_on_death - 死んでも保持するか (boolean)
* x - X座標 (number)
* y - Y座標 (number)
* z - Z座標 (number)
### 使用例
`-32 -60 2`に以下のカスタマイズがされたダイヤモンドの剣をスポーンさせる。
* その人の名前が入った剣
* 鋭さ3
* loreにランクを表示
```
/scriptevent Capi:spawnItem {item=diamond_sword, name='{name}の剣', enchants=[{name=sharpness, level=3}], lore=[ランク, ★★★★☆], x=-32, y=-60, z=2}
```
草ブロックと土が破壊でき、捨てることのできない石つるはしをスポーンさせる。
```
/scriptevent Capi:spawnItem {item=stone_pickaxe, can_destroy=[grass, stone], lock=inventory}
```