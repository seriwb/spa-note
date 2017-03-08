# spa-note

WEB+DB PRESS vol.97のReactで作るシングルページアプリケーション入門の練習用コード

## 実行環境
- node v7.6.0
- npm 4.1.2



# Reactまとめ

今回使うのはBabelと[Webpack](https://webpack.js.org)

webpackはモージュールバンドラというツールで、JavaScriptの依存関係解決＆1ファイル統合してくれる
> webpackの同機能としてbrowserifyってのもある

- loaderを使うとモジュールバンドル前にBabelを呼べたりする
- webpack.config.jsに設定を書く
- devtoolを指定しているとデバッグのときに元ファイルのソースや行番号情報を表示できるようになる

Babelの設定は.babelrcに書く

webpack-dev-serverを立ち上げたあとは以下にアクセスできる。

- http://localhost:8080/

ただ、サーバの設定を入れたら、output.pathが'./public'だと動作しなくなったため、ドットを外した。
  - https://github.com/webpack/webpack/issues/3660

- -> その後、PostCSSの設定入れたら外した状態だとおかしくなったので戻した。
  - -> まだおかしいので`path: __dirname + '/public'`の記述に変更した

index.htmlは手で作成するより`html-webpack-plugin`プラグインとか使ったほうがいいっぽい



## CSSまとめ

SassではなくPostCSSを使う。
PostCSSはプラグインの組み合わせで様々な変換が可能になる。

1. entryでCSSのエントリポイントを設定
2. loadersでcss-loaderとpostcss-loaderを指定して、CSSをwebpackでビルドできるように設定
3. pluginsでextract-text-webpack-pluginを使い、CSSを外部ファイルとして出力するように設定

その後、main.cssとbase.cssを作成する

Webpack2系と1系でPostCSS用の設定の書き方が違うらしい

- https://github.com/postcss/postcss-loader

### ERROR対応

2系に合わせて書き直したあと、以下のエラーが出た。

```
ERROR in ./src/main.js
Module parse failed: /Users/tsuchida-chikara/repositories/seriwb/spa-note/src/main.js Unexpected token (5:2)
You may need an appropriate loader to handle this file type.
| 
| ReactDOM.render(
|   <div>Hello SPA!</div>,
|   document.getElementById('app')
| );

ERROR in chunk js [entry]
bundle.js
Conflict: Multiple assets emit to the same filename bundle.js
```

module.loadersにrules入れたらmain.jsのエラーが出てて、
chunk jsの方は連続で同名のファイルが自動生成されているからおかしくなっていた模様。
これはExtractTextPlugin.extractをちゃんと使うようにしたら直った。


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
