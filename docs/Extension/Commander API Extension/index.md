---
title: "Commander API Extension"
last_update:
  date: 2025-12-07
  author: wako
---

## 概要

**Commander API Extension** は、Commander API の機能を拡張するための公式拡張機能です。`player.json` ファイルを使用して、ScriptAPI だけでは実装できない高度な機能を提供します。

この拡張機能により、プレイヤーのゲーム内パラメータをカスタマイズし、チーム機能などの高度な機能を実装することができます。

## 主な機能

Commander API Extension では、以下の機能を利用できます：

- **プレイヤーの大きさ変更**: プレイヤーのサイズをカスタマイズ
- **プレイヤーの体力変更**: 最大体力を調整
- **プレイヤーの攻撃力変更**: 攻撃ダメージを調整
- **チーム機能**: フレンドリーファイア（味方攻撃）を無効化したチーム機能

---

## インストール方法

Commander API Extension を使用するには、以下の手順を実行してください：

1. Commander API がインストールされていることを確認
2. Commander API Extension パッケージをワールドに追加
3. ワールドを再読み込み（`/reload` コマンド）

---

## 設定方法

### player.json ファイル

Commander API Extension は、`player.json` ファイルを使用してプレイヤーごとの設定を管理します。このファイルは、ワールドのデータディレクトリに配置され、各プレイヤーの属性やチーム情報を保存します。

### 基本構造

```json
{
  "players": {
    "プレイヤー名": {
      "scale": 1.0,
      "health": 20,
      "attack": 1.0,
      "team": "team1"
    }
  }
}
```

---

## 機能詳細

### プレイヤーの大きさ変更

プレイヤーのサイズを変更する機能です。小さくしたり大きくしたりすることで、ゲームプレイに変化を加えることができます。

#### 設定方法

`player.json` の `scale` パラメータで設定します。

```json
{
  "players": {
    "PlayerName": {
      "scale": 1.5
    }
  }
}
```

#### パラメータ

| パラメータ | 説明 | デフォルト値 | 範囲 |
|-----------|------|-------------|------|
| `scale` | プレイヤーのサイズ倍率 | `1.0` | `0.1` ～ `10.0` |

#### 使用例

```json
{
  "players": {
    "SmallPlayer": {
      "scale": 0.5
    },
    "NormalPlayer": {
      "scale": 1.0
    },
    "LargePlayer": {
      "scale": 2.0
    }
  }
}
```

:::info
`scale` が `0.5` の場合、プレイヤーは通常の半分のサイズになります。  
`scale` が `2.0` の場合、プレイヤーは通常の2倍のサイズになります。
:::

:::warning 注意事項
極端に小さい値（0.1未満）や大きい値（10.0以上）を設定すると、ゲームプレイに支障をきたす可能性があります。
:::

---

### プレイヤーの体力変更

プレイヤーの最大体力を変更する機能です。難易度調整やロールプレイに活用できます。

#### 設定方法

`player.json` の `health` パラメータで設定します。

```json
{
  "players": {
    "PlayerName": {
      "health": 40
    }
  }
}
```

#### パラメータ

| パラメータ | 説明 | デフォルト値 | 範囲 |
|-----------|------|-------------|------|
| `health` | プレイヤーの最大体力 | `20` | `1` ～ `1024` |

#### 使用例

```json
{
  "players": {
    "WeakPlayer": {
      "health": 10
    },
    "NormalPlayer": {
      "health": 20
    },
    "TankPlayer": {
      "health": 100
    }
  }
}
```

:::info
デフォルトの体力は `20`（ハート10個分）です。  
`health` を `40` に設定すると、ハート20個分の体力になります。
:::

:::tip ロールプレイへの活用
- **戦士**: `health: 40` - 高い耐久力
- **魔法使い**: `health: 12` - 低い耐久力
- **タンク**: `health: 60` - 非常に高い耐久力
:::

---

### プレイヤーの攻撃力変更

プレイヤーの攻撃ダメージを変更する機能です。バランス調整やクラスシステムの実装に使用できます。

#### 設定方法

`player.json` の `attack` パラメータで設定します。

```json
{
  "players": {
    "PlayerName": {
      "attack": 2.0
    }
  }
}
```

#### パラメータ

| パラメータ | 説明 | デフォルト値 | 範囲 |
|-----------|------|-------------|------|
| `attack` | プレイヤーの攻撃力倍率 | `1.0` | `0.1` ～ `10.0` |

#### 使用例

```json
{
  "players": {
    "WeakAttacker": {
      "attack": 0.5
    },
    "NormalAttacker": {
      "attack": 1.0
    },
    "StrongAttacker": {
      "attack": 3.0
    }
  }
}
```

:::info
`attack` が `1.0` の場合、通常の攻撃力です。  
`attack` が `2.0` の場合、攻撃力が2倍になります。  
`attack` が `0.5` の場合、攻撃力が半分になります。
:::

:::tip クラスシステムへの活用
- **戦士**: `attack: 2.0` - 高い攻撃力
- **盗賊**: `attack: 1.5` - 中程度の攻撃力
- **支援役**: `attack: 0.7` - 低い攻撃力
:::

---

### チーム機能

プレイヤーをチームに分け、フレンドリーファイア（味方攻撃）を無効化する機能です。協力プレイやPvPゲームモードの実装に活用できます。

#### 設定方法

`player.json` の `team` パラメータで設定します。

```json
{
  "players": {
    "Player1": {
      "team": "red"
    },
    "Player2": {
      "team": "red"
    },
    "Player3": {
      "team": "blue"
    }
  }
}
```

#### パラメータ

| パラメータ | 説明 | デフォルト値 |
|-----------|------|-------------|
| `team` | プレイヤーが所属するチーム名 | なし（チーム未所属） |

#### チーム機能の特徴

- **フレンドリーファイア無効化**: 同じチームのプレイヤー同士は攻撃できません
- **チーム識別**: チーム名で簡単にプレイヤーをグループ化
- **柔軟な設定**: チーム名は任意の文字列を使用可能

#### 使用例

##### 2チーム対戦

```json
{
  "players": {
    "RedTeamPlayer1": {
      "team": "red",
      "health": 20,
      "attack": 1.0
    },
    "RedTeamPlayer2": {
      "team": "red",
      "health": 20,
      "attack": 1.0
    },
    "BlueTeamPlayer1": {
      "team": "blue",
      "health": 20,
      "attack": 1.0
    },
    "BlueTeamPlayer2": {
      "team": "blue",
      "health": 20,
      "attack": 1.0
    }
  }
}
```

##### 協力プレイ

```json
{
  "players": {
    "CoopPlayer1": {
      "team": "allies",
      "health": 30,
      "attack": 1.2
    },
    "CoopPlayer2": {
      "team": "allies",
      "health": 30,
      "attack": 1.2
    },
    "CoopPlayer3": {
      "team": "allies",
      "health": 30,
      "attack": 1.2
    }
  }
}
```

:::info
チーム名は任意の文字列が使用できます（例: "red", "blue", "team1", "allies" など）。  
同じチーム名を持つプレイヤーは、互いに攻撃できなくなります。
:::

:::warning 注意事項
- チームを設定していないプレイヤーは、すべてのプレイヤーを攻撃できます
- チーム設定を変更した場合は、`/reload` コマンドで反映する必要があります
:::

---

## 複合設定の例

複数の機能を組み合わせて、より高度なゲームプレイを実現できます。

### RPGクラスシステム

```json
{
  "players": {
    "Warrior": {
      "team": "heroes",
      "scale": 1.2,
      "health": 40,
      "attack": 2.0
    },
    "Mage": {
      "team": "heroes",
      "scale": 0.9,
      "health": 12,
      "attack": 0.8
    },
    "Tank": {
      "team": "heroes",
      "scale": 1.5,
      "health": 60,
      "attack": 1.2
    },
    "Rogue": {
      "team": "heroes",
      "scale": 0.8,
      "health": 16,
      "attack": 1.8
    }
  }
}
```

### PvPバトルアリーナ

```json
{
  "players": {
    "RedTeamTank": {
      "team": "red",
      "scale": 1.3,
      "health": 50,
      "attack": 1.5
    },
    "RedTeamAttacker": {
      "team": "red",
      "scale": 1.0,
      "health": 25,
      "attack": 2.5
    },
    "BlueTeamTank": {
      "team": "blue",
      "scale": 1.3,
      "health": 50,
      "attack": 1.5
    },
    "BlueTeamAttacker": {
      "team": "blue",
      "scale": 1.0,
      "health": 25,
      "attack": 2.5
    }
  }
}
```

---

## トラブルシューティング

### 設定が反映されない

1. `player.json` ファイルの JSON 形式が正しいか確認してください
2. `/reload` コマンドを実行して設定を再読み込みしてください
3. Commander API Extension が正しくインストールされているか確認してください

### プレイヤー名が認識されない

- `player.json` に記載するプレイヤー名は、ゲーム内の表示名と完全に一致する必要があります
- 大文字・小文字を区別するので注意してください

### チーム機能が動作しない

- 両方のプレイヤーが同じチーム名に設定されているか確認してください
- チーム名のスペルミスに注意してください

---

## よくある質問（FAQ）

### Q: 設定可能な最大プレイヤー数は？

A: `player.json` に登録できるプレイヤー数に制限はありませんが、サーバーのパフォーマンスに応じて適切に管理してください。

### Q: プレイヤーごとに異なる設定を適用できますか？

A: はい、`player.json` では各プレイヤーに個別の設定を適用できます。

### Q: ゲーム中に設定を変更できますか？

A: `player.json` を編集した後、`/reload` コマンドを実行することで、ゲーム中でも設定を反映できます。

### Q: チームを複数作成できますか？

A: はい、任意の数のチームを作成できます。それぞれ異なるチーム名を使用してください。

---

## 関連ドキュメント

- [Commander API イベント](../../Event/)
- [Commander API 設定](../../Config/)
- [Commander API スクリプトイベント](../../ScriptEvents/)

---

## フィードバック・サポート

Commander API Extension に関するフィードバックやサポートが必要な場合は、公式リポジトリの Issues セクションでお知らせください。
