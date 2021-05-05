---
title: WEBPACK 정리
date: "2021-05-05T22:24:03.284Z"
description: "웹팩에 대한 내용들을 정리했습니다."
---

## 웹팩이란?

웹팩은 모든 파일들을 모듈이라 부릅니다. 그리고 이러한 모듈들을 하나의 파일로 묶어주는 것을 **번들**이라 합니다.

각 모듈들은 복잡한 의존 관계로 얽혀있을 수 있는데 웹팩은 이러한 모듈들의 의존성을 유지하며 안전하게 하나의 파일로 번들링 해줍니다.

이렇게 번들링된 파일이 클라이언트에게 전송되는 것이죠.

## 웹팩의 기본구조

**4가지 주요 속성**

- Entry : 모듈간의 의존 관계를 이해하기 위한 시작점이 되는 자바스크립트 파일 경로.(index.js의 위치) 웹팩은 Entry point를 시작으로 모듈 간의 의존 관계를 따라 그려지는 Dependency Graph를 분석하고 번들링해준다.
  > Entry point는 2개 이상이 될 수도 있다.
- Output : 웹팩이 번들링하여 생성한 최종 번들 파일의 경로.
- Loader : 웹팩이 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 해석/변환 등의 처리를 할 수 있게 도와줌.
  > 배열 안에 정의된 Loader는 오른쪽에서 왼쪽 순으로 적용된다.
- Plugin : 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성. 빌드한 결과물의 형태를 바꾸는 역할.

아래는 webpack.config.js의 간단한 예시입니다.

**기타 속성**

- mode: none, development, production 세 가지 모드가 있다. development 모드 시 개발에 유용한 기능을 제공하고 production 모드 시 성능 최적화를 돕는 파일 압축 등의 빌드 과정을 추가해준다.
- devServer : 웹팩으로 빌드한 결과물을 메모리에 올려서 보여주기 때문에 명령어 입력 없이 코드를 변경 후 저장하면 빠르게 변경사항을 반영하여 개발 할 수 있게 도와준다.
- devtool : 웹팩 이용에 도움을 주는 개발 도구

```js
const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development'
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
  devServer: {
    port: 3000,
    hot: true,
    proxy: {
      '/api': {
        target: 'https://example.com',
        changeOrigin: true
      }
    }
  },
  devtool: 'cheap-eval-source-map'
};
```

## 간단한 사용법

아주 간단한 사용법을 알아볼까요?

웹팩을 사용하기 위해서는 webpack와 webpack-cli를 설치해야합니다.

```shell
yarn add -D webpack webpack-cli
```

아주 간단한 두 개의 모듈을 준비해볼까요?

```js
// index.js
import { helloWorld } from "./log"

helloWorld()
```

```js
// log.js
export const helloWorld = () => {
  console.log("hello world")
}
```

index.js가 log.js를 의존하고 있는 모습입니다.

웹팩 4.0 버전부터 zero config를 지원하는데 루트 폴더아래 src와 dist 폴더를 생성하고 번들링할 모듈들을 src폴더에 집어 넣은 후, 아래의 명령어를 실행합니다.

```shell
npx webpack
```

> npx는 node_modules/.bin 폴더 아래 있는 실행파일들을 실행시키는 명령어다.

웹팩이 알아서 빌드를 수행해준 후, ./dist 폴더 아래에 main.js가 생성된 것을 확인 할 수 있습니다.

아래와 같이 main.js를 실행시켜보면 'hello world'가 잘 출력되는 것을 확인 할 수 있습니다.

```shell
node ./dist/main.js
```
