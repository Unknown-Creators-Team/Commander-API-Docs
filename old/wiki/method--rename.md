rename(リネーム)を使ってプレイヤーの表示名を変更します。

## 使用例

### ネームタグを変更する
```
/tag "Notch" add "rename:Steve"
```
変更後の結果: `Steve`

### ネームタグの色を変更する
```
/tag "Notch" add "rename:§c{name}"
```
変更後の結果: `§cNotch`

### ネームタグにスコアボードを追加する
```
/tag "Notch" add "rename:{name} [{score:health}]"
```
変更後の結果: `Notch [20]`

## 注意
* チャットやメニューに表示されるプレイヤー名は変わりません。

## 変数
[変数](https://github.com/191225/Commander-API/wiki/Variable) を使用することができます