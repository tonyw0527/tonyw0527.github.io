---
title: Babel 정리
date: "2021-05-08T01:00:03.284Z"
description: "Parsing, Transforming, Printing 바벨의 기본 구조에 대해 알아봅시다."
---

## Babel이란?

Babel은 ECMAScript 2015+(ES6+) 이상 버전의 Javascript 코드를 인터넷 익스플로러 같은 이전 버전의 Javascript 엔진에서 실행 가능한 이전 버전의 Javascript 코드로 변환해주는 Javascript 트랜스 컴파일러 입니다. 이를 통해 Javascript 코드의 크로스 브라우징을 효과를 얻을 수 있습니다.

_예시 -_ 신버전의 JS -> 구번의 JS, Typescript -> JS, Jsx -> JS

## Babel의 기본구조

바벨을 이용한 트랜스 컴파일은 Parsing(파싱), Transforming(변환), Printing(출력)의 세 가지 과정을 거칩니다.

#### Parsing

바벨은 입력된 자바스크립트 코드를 파싱하여, 컴파일 작업에 적합한 자료구조인 추상구문트리(AST)를 생성합니다.

#### Transforming

바벨이 생성한 추상구문트리를 가지고 플러그인(Plugin)과 플러그인의 집합인 프리셋(Preset)으로 transpile, polyfill 등의 작업을 합니다.

> ex) const -> var 변환. () => {} -> function(){} 변환

#### Printing

결과를 출력합니다.

## Polyfill

바벨은 ECMAScript2015+ 버전의 자바스크립트 코드를 하위 버전의 자바크립트로 transpile할 때 대칭적으로 transpile 할 수 있는 부분만 transpile합니다. const를 var로 바꾸는 것처럼 말이죠.

단순히 transpile이 안되는 것 중 Promise가 대표적인데 이러한 것들은 바로 일련의 코드조각을 주입해서 이전 버전의 코드로 동작하도록 만들어주는 Polyfill이란 방법을 사용합니다.

## 설치 및 설정 파일 예시

```sh
yarn add -D @babel/core @babel/cli @babel/preset-env
yarn add core-js@3
```

```js
// babel.config.js
module.exports = {
  plugins: [],
  presets: [
    "@babel/preset-env",
    {
      targets: {
        id: "11",
      },
      useBuiltIns: "usage",
      corejs: {
        version: 3,
      },
    },
  ],
};
```

> @babel/core : 바벨 코어
> @babel/cli : 바벨 커맨드 라인 도구
> @babel/preset-env : 기본적인 플러그인들이 포함된 프리셋
> core-js@3 : @babel/preset-env 프리셋 내부에서 사용할 폴리필을 위해 사용할 폴리필 라이브러리

## Webpack에 통합

Webpack을 사용하는 경우 webpack의 loader에 babel-loader를 추가함으로써 Webpack의 빌드 과정 안에 babel을 통합시켜 사용합니다.

```sh
yarn add -D babel-loader @babel/core @babel/preset-env
yarn add core-js@3
```

```js
// webpack.config.js
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { ie: "11" },
                  useBuiltIns: "usage",
                  corejs: {
                    version: 3,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
```
