---
last_update:
  date: 2023-05-04
  author: Nano191225
---

knockbackを使用してプレイヤーをノックバックさせます。
## 使用例
### スニークしたら視点先に飛ぶ
```
/tag @a[tag=Capi:sneaking] add "knockback:['{calc:{score:Capi:vectorX} / 100}', '{calc:{score:Capi:vectorZ} / 100}', '1', '{calc:{score:Capi:vectorY} / 100}']"
```

## 変数
[変数](https://github.com/191225/Commander-API/wiki/Variable) を使用することができます