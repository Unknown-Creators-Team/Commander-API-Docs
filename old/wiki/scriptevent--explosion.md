爆発を発生させます。
### プロパティ
* radius - 爆発の範囲 (string, 必須)
* options - 爆発のオプション (object)<br />
┣ allow_under_water (boolean)<br />
┣ breaks_blocks (boolean)<br />
┗ causes_fire (boolean)
* x - X座標 (number)
* y - Y座標 (number)
* z - Z座標 (number)
### 使用例
`6 -50 7`に半径5blocksの爆発を発生させる。
```
/scriptevent Capi:explosion {radius=5, x=6, y=-50, z=7}
```
半径5blocksのブロックを破壊でき、炎上する爆発を発生させる。
```
/scriptevent Capi:explosion {radius=5, options={breaks_blocks=true, causes_fire=true}}
```