# 有閑喫茶 あにまーれ 非公式ウェブサイト

:yellow_heart: [animare.cafe](https://animare.cafe/) :yellow_heart:

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

## ライセンス

[`assets/images/`](/assets/images/) ディレクトリー以下にある画像は有閑喫茶 あにまーれが著作権を有する物が多く含まれています。利用については細心の注意を払ってください。
