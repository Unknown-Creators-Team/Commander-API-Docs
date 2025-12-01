---
title: "Score マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**Score マクロ** は、スコアボードから値を取得するマクロです。  
実行者のスコアを取得して、テキストとして使用できます。

## 構文

```plaintext
<!score=スコア名>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `スコア名` | 取得したいスコアボードのオブジェクト名 |

## 戻り値

指定されたスコアボードの値を返します。  
スコアが設定されていない場合は、マクロがそのまま残ります。

## Commander API 提供のスコア

Commander API では、以下のスコアが自動的に更新されます。詳細は [scores.ts](https://github.com/Unknown-Creators-Team/Commander-API/blob/alpha/src/events/scores.ts) を参照してください。

| スコア名 | 説明 |
|---|---|
| `capi:health` | プレイヤーの体力 |
| `capi:level` | プレイヤーのレベル |
| `capi:totalXp` | プレイヤーの合計経験値 |
| `capi:velocity_x` | X軸の速度 |
| `capi:velocity_y` | Y軸の速度 |
| `capi:velocity_z` | Z軸の速度 |
| `capi:velocity_xz` | 水平速度 |
| `capi:velocity_xyz` | 総合速度 |
| `capi:location_x` | X座標 |
| `capi:location_y` | Y座標 |
| `capi:location_z` | Z座標 |
| `capi:rotation_x` | X軸の回転 |
| `capi:rotation_y` | Y軸の回転 |
| `capi:dimension` | ディメンション（-1: ネザー, 0: オーバーワールド, 1: エンド） |
| `capi:selectedSlotIndex` | 選択中のスロット番号 |
| `capi:timestamp` | 現在のタイムスタンプ |

## 使用例

### 所持金の表示

プレイヤーの所持金を表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 所持金: <!score=money>円
```

**出力例**:
```
所持金: 1000円
```

### 体力の表示

プレイヤーの体力を表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar §c HP: <!score=capi:health> / 20
```

**出力例**:
```
HP: 18 / 20
```

### renameでの使用

プレイヤー名の下に体力を表示します。

```mcfunction
/execute as @a run scriptevent capi:rename <!name><!nl>§c HP: <!score=capi:health>
```

**出力例**:
```
Notch
HP: 20
```

### レベル表示

プレイヤーのレベルを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell <!name>はレベル<!score=capi:level>です！
```

**出力例**:
```
Notchはレベル42です！
```

### 複数のスコアを表示

複数のステータスを同時に表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar HP: <!score=capi:health> | LV: <!score=capi:level> | XP: <!score=capi:totalXp>
```

**出力例**:
```
HP: 20 | LV: 42 | XP: 1500
```

### 計算と組み合わせ

スコアを計算に使用します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 合計ダメージ: <!calc=<!score=attack>*<!score=multiplier>>
```

**出力例**:
```
合計ダメージ: 150
```

## 変数からの移行

以前の変数構文からマクロ構文への変更:

| 旧構文（変数） | 新構文（マクロ） |
|---|---|
| `{score:money}` | `<!score=money>` |
| `{score:Capi:health}` | `<!score=capi:health>` |

:::tip 移行のポイント
旧構文の `{score:スコア名}` は新構文の `<!score=スコア名>` に置き換えます。  
コロン（`:`）がイコール（`=`）に変わることに注意してください。
:::
