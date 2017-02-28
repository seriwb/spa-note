# spa-note

WEB+DB PRESS vol.97のReactで作るシングルページアプリケーション入門の練習用コード

## 実行環境
- node v7.6.0
- npm 4.1.2



# Reactまとめ

今回使うのはBabelとWebpack

webpackはモージュールバンドラというツールで、JavaScriptの依存関係解決＆1ファイル統合してくれる
> webpackの同機能としてbrowserifyってのもある

- loaderを使うとモジュールバンドル前にBabelを呼べたりする
- webpack.config.jsに設定を書く
- devtoolを指定しているとデバッグのときに元ファイルのソースや行番号情報を表示できるようになる

Babelの設定は.babelrcに書く

webpack-dev-serverを立ち上げたあとは以下にアクセスできる。

- http://localhost:8080/

ただ、サーバの設定を入れたら、output.pathが'./public'だと動作しなくなったため、ドットを外した。


## CSSまとめ

SassではなくPostCSSを使う。
PostCSSはプラグインの組み合わせで様々な変換が可能になる。

1. entryでCSSのエントリポイントを設定
2. loadersでcss-loaderとpostcss-loaderを指定して、CSSをwebpackでビルドできるように設定
3. pluginsでextract-text-webpack-pluginを使い、CSSを外部ファイルとして出力するように設定

その後、main.cssとbase.cssを作成する

Webpack2系と1系でPostCSS用の設定の書き方が違うらしい

- https://github.com/postcss/postcss-loader



# コマンド一覧

```
# 事前準備
mkdir spa-note
cd spa-note
git init

# React準備
npm init -y
npm install --save react react-dom
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react webpack

# main.js書いたあと
./node_modules/.bin/webpack

npm install --save-dev webpack-dev-server
# ファイル修正
./node_modules/.bin/webpack-dev-server

npm install --save-dev css-loader postcss-loader postcss-easy-import extract-text-webpack-plugin
# ファイル修正
./node_modules/.bin/webpack

```
