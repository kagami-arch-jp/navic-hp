# NAVIC 公式サイト 模写

[株式会社ナヴィック](https://www.navic.cc) の公式コーポレートサイトを React で模写したプロジェクトです。

**オンラインデモ:** https://kagami-arch-jp.github.io/navic-hp/index.html

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | React 19 |
| 言語 | JSX |
| スタイル | Sass (SCSS) + PostCSS (px-to-viewport) |
| バンドラー | Webpack 5 |
| カルーセル | Swiper 12 |
| サーバーサイド | sptc (Node.js) |
| Webfont | 元サイト (navic.cc) から直接参照 |

## ディレクトリ構成

```
├── build/              # Webpack / ビルド設定
│   ├── webpack5.js     # Webpack 設定 (dev / build)
│   ├── static.js       # 静的ファイル出力
│   └── postcss.config.js
├── client/             # ビルド成果物 (CSS/JS/画像)
├── server/             # サーバーサイド (sptc)
│   ├── application/
│   ├── conf/
│   ├── public/
│   ├── index.s
│   └── router.s
├── src/                # ソースコード
│   ├── App.jsx         # ルートコンポーネント
│   ├── App.scss        # グローバルスタイル
│   ├── bootstrap.jsx   # エントリーポイント
│   ├── font.scss       # Webfont 読み込み
│   ├── components/     # UI コンポーネント
│   │   ├── Banner/
│   │   ├── Container/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── LazyImage/
│   │   ├── Link/
│   │   ├── Links/
│   │   ├── News/
│   │   ├── Service/
│   │   ├── SNS/
│   │   ├── Social/
│   │   └── SubTitle/
│   ├── store/          # 状態管理
│   └── utils/          # ユーティリティ
├── index.html          # HTML テンプレート
├── tsconfig.json
└── package.json
```

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動 (webpack-dev-server + HMR)
npm run dev

# プロダクションビルド
npm run build

# 静的ファイル生成
npm run static

# ビルド → 静的ファイル出力
npm run build-static
```

## 備考

- Webfont は `https://www.navic.cc` から直接読み込んでいます
- `postcss-px-to-viewport` により viewport 単位への自動変換を行い、レスポンシブ対応しています
- サーバーサイドは `sptc` フレームワークを利用し、ルーティングは `server/router.s` で定義しています
- このプロジェクトに状態管理は利用していません
