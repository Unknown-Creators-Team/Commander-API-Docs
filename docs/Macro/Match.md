---
title: "Match マクロ"
last_update:
  date: 2025-12-01
  author: Nano191225
---

## 概要

**Match マクロ** は、インデックスに基づいて値を選択するマクロです。  
複数の選択肢から、インデックス番号に対応する値を返します。

## 構文

```plaintext
<!match=[インデックス, 値0, 値1, 値2, ...]>
```

## パラメータ

| パラメータ | 説明 |
|---|---|
| `インデックス` | 選択する値のインデックス（0から開始） |
| `値0, 値1, ...` | 選択肢となる値のリスト |

## 戻り値

インデックスに対応する値を返します。  
インデックスが範囲外の場合は、マクロがそのまま残ります。

:::info
インデックスは0から始まります。  
- インデックス `0` → 最初の値
- インデックス `1` → 2番目の値
- インデックス `2` → 3番目の値
:::

## 使用例

### 基本的な選択

インデックスに基づいて値を選択します。

```mcfunction
/execute as @a run scriptevent capi:tell <!match=[0, りんご, バナナ, オレンジ]>
```

**出力例**:
```
りんご
```

```mcfunction
/execute as @a run scriptevent capi:tell <!match=[2, りんご, バナナ, オレンジ]>
```

**出力例**:
```
オレンジ
```

### スコアに基づく選択

スコアの値に基づいて表示を切り替えます。

```mcfunction
/execute as @a run scriptevent capi:tell 天気: <!match=[<!score=weather>, 晴れ, 曇り, 雨, 雪]>
```

**出力例**（weather=0の場合）:
```
天気: 晴れ
```

**出力例**（weather=2の場合）:
```
天気: 雨
```

### レベルランク表示

レベルに応じたランク名を表示します。

```mcfunction
/execute as @a run scriptevent capi:tell ランク: <!match=[<!score=rank>, ブロンズ, シルバー, ゴールド, プラチナ, ダイヤモンド]>
```

**出力例**（rank=3の場合）:
```
ランク: プラチナ
```

### 曜日表示

曜日を表示します。

```mcfunction
/execute as @a run scriptevent capi:tell 今日は<!match=[<!score=day>, 日曜日, 月曜日, 火曜日, 水曜日, 木曜日, 金曜日, 土曜日]>です
```

**出力例**（day=1の場合）:
```
今日は月曜日です
```

### ステータスアイコン

状態に応じたアイコンを表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 状態: <!match=[<!score=status>, §a✓ オンライン, §e⚡ 離席中, §c✗ オフライン]>
```

**出力例**（status=1の場合）:
```
状態: ⚡ 離席中
```

### 色付きテキスト

レベルに応じた色を適用します。

```mcfunction
/execute as @a run scriptevent capi:tell <!match=[<!score=tier>, §7初心者, §a見習い, §b中級者, §d上級者, §6達人]>
```

### 方向表示

向いている方向を表示します。

```mcfunction
/execute as @a run scriptevent capi:actionbar 方向: <!match=[<!score=direction>, 北, 北東, 東, 南東, 南, 南西, 西, 北西]>
```

**出力例**（direction=2の場合）:
```
方向: 東
```

## 活用例

### ゲームモード表示

ゲームモードに応じた表示を切り替えます。

```mcfunction
/execute as @a run scriptevent capi:actionbar モード: <!match=[<!score=gamemode>, サバイバル, クリエイティブ, アドベンチャー, スペクテイター]>
```

### 季節システム

ゲーム内の季節を表示します。

```mcfunction
/execute as @a run scriptevent capi:tell 現在の季節: <!match=[<!score=season>, 🌸春, ☀夏, 🍂秋, ❄冬]>
```

### 難易度表示

難易度に応じた表示とアイコンを表示します。

```mcfunction
/execute as @a run scriptevent capi:tell 難易度: <!match=[<!score=difficulty>, §a😊 イージー, §e😐 ノーマル, §c😠 ハード, §4💀 ハードコア]>
```

### 計算と組み合わせ

計算結果を使ってインデックスを決定します。

```mcfunction
/execute as @a run scriptevent capi:tell 時間帯: <!match=[<!calc=floor(<!score=time>/6000)>, 朝, 昼, 夕方, 夜]>
```
