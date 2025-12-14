プレイヤーをテレポートさせます。
### プロパティ
* x - X座標 (number)
* y - Y座標 (number)
* z - Z座標 (number)
* rx - X視点 (number)
* ry - Y視点 (number)
* dimension - ディメンションID (string)
### 使用例
ネザーにテレポートする。
```
/scriptevent Capi:tp {dimension=nether}
```
オーバーワールドの`-1 -60 -6`にテレポートする。
```
/scriptevent Capi:teleport {x=-1, y=-60, z=-6, dimension=overworld}
```