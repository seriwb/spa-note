# spa-note

WEB+DB PRESS vol.97のReactで作るシングルページアプリケーション入門の練習用コード

# Reactまとめ

今回使うのはBabelとWebpack

webpackはモージュールバンドラというツールで、JavaScriptの依存関係解決＆1ファイル統合してくれる
> webpackの同機能としてbrowserifyってのもある

- loaderを使うとモジュールバンドル前にBabelを呼べたりする
- webpack.config.jsに設定を書く
- devtoolを指定しているとデバッグのときに元ファイルのソースや行番号情報を表示できるようになる

Babelの設定は.babelrcに書く

## コマンド一覧
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

```
