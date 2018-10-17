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

## 画像の変換

アルファチャンネルのないPNG形式の画像はJPEG形式に変換してください。JPEGの品質は80を基本にして、背景などの注視されない場所で使われている画像の場合は70にしましょう。

|             | Tool                                               | Command                                              |
|-------------|----------------------------------------------------|------------------------------------------------------|
| PNG -> JPEG | [ImageMagick](https://www.imagemagick.org/script/) | `convert in.png -quality 80 -interlace jpeg out.jpg` |

## 画像の最適化

画像は[mozjpeg](https://github.com/mozilla/mozjpeg)や[pngcrush](https://pmt.sourceforge.io/pngcrush/)を使って最適化しましょう。最小限の画像の劣化があるものの簡単にファイル容量の削減ができます。

| Format | Tool                                             | Command                                                              |
|--------|--------------------------------------------------|----------------------------------------------------------------------|
| JPEG   | [mozjpeg](https://github.com/mozilla/mozjpeg)    | `jpegtran -copy none -optimize -progressive -outfile out.jpg in.jpg` |
| PNG    | [pngcrush](https://pmt.sourceforge.io/pngcrush/) | `pngcrush -brute -reduce -rem alla in.png out.png`                   |
