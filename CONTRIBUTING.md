# 開発について

## 開発サーバーの起動

[Node.js](https://nodejs.org/ja/)と[Yarn](https://yarnpkg.com/ja/)をインストールしてください。

```console
$ git clone https://github.com/ykzts/animare.cafe.git
$ cd ./animare.cafe/
$ yarn install
$ yarn dev
```

`http://localhost:3000/` をウェブブラウザーで開いてください。

## Cloud Functionsのテスト

```console
$ yarn generate
$ npx firebase-tools serve --only hosting,functions
```

`http://localhost:5000/` をウェブブラウザーで開いてください。

## 画像の変換や最適化

画像は[Squoosh](https://squoosh.app/)を使って変換や最適化を行ってください。

画像にアルファチャンネル (透過) がない場合はできる限りJPEGに変換してください。PNGはJPEGとは違い、不可逆圧縮であるために綺麗ですが一般的に容量が大きくなってしまいがちです。昨今は通信容量に応じて速度の制限がかけられてしまう環境が多いため、ファイルの容量には気を使うべきでしょう。

さらにJPEGの場合はMozJPEG、PNGの場合はOptiPNGを使って画像の最適化をしましょう。アルゴリズムの最適化を行うことによってファイルの容量削減に繋がります。

またPNGの場合は「Reduce palette」から色数に制限をかけましょう。パレットの色数を減らすことによってファイルの容量削減に大きな効果があります。256色よりも多い色数が必要な場合はJPEGにするべきでしょう。
