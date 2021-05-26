---
title: HTML5 정리
date: "2021-05-27T12:52:03.284Z"
description: "HTML5를 CheatSheet 형태로 정리하였습니다."
---

## XML과 HTML

XML은 Extensible Markup Language의 약자로 다목적으로 사용되는 마크업 언어입니다. HTML, JSX등의 마크업 언어를 포함하는 것이 XML이라고 볼 수 있습니다.

XML의 특성을 가지고 웹문서에 특화된 마크업 언어로 개발되어진 HTML은 Tag(또는 Element)와 Attribute를 통해 작성되어집니다.
아래와 같은 형태로 말이죠.

```html
<태그 속성>자식요소</태그>
<button type="button">버튼</button>
```

HTML에서 주석은 아래와 같이 작성합니다.

```html
<!-- 이곳에 주석 내용을 입력하세요. -->
```

## HTML5의 기본 구조

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## HTML5의 태그 목록

### 제목

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

### 본문

```html
<p></p>
```

### 루비

<ruby>
  <span>日本</span>
  <rp>(</rp>
  <rt>にほん</rt>
  <rp>)</rp>
</ruby>
```html
<ruby>
  <span>にほん</span>
  <rp>(</rp>
  <rt>日本</rt>
  <rp>)</rp>
</ruby>
```

### 줄바꿈

```html
<br />
```

### 수평 줄

```html
<hr />
```

### 앵커

```html
<!-- 기본 사용 -->
<a href="https://tonyw0527.github.io">Tony's Blog</a>

<!-- href 없이 사용 -->
<a href="#">test</a>

<!-- 페이지 내부 이동 -->
<a href="#content1">Go to Content1</a>
<a href="#content2">Go to Content2</a>
<h1 id="content1">Content1</h1>
<h1 id="content2">Content2</h1>
```

### 목록

```html
<!-- unordered list -->
<ul>
  <li></li>
</ul>
<!-- ordered list -->
<ol>
  <li></li>
</ol>
```

### 정의 목록

```html
<dl>
  <dt></dt>
  <dd></dd>
  <dd></dd>

  <dt></dt>
  <dd></dd>
  <dd></dd>
</dl>
```

### 테이블

```html
<table border="1">
  <caption></caption>
  <thead>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</table>
```

### 이미지

```html
<img src="tiger.jpg" alt="호랑이" />
```

### 오디오

속성 - src, preload, autoplay, loop, controls

```html
<audio controls="controls">
  <source src="song.mp3" type="audio/mp3" />
  <source src="song.ogg" type="audio/ogg" />
</audio>
```

### 비디오

속성 - src, poster, preload, autoplay, loop, controls, width, height

```html
<video controls="controls">
  <source src="test.mp4" type="video/mp4" />
  <source src="test.webm" type="video/webm" />
</video>
```

video 태그는 IE8 이하에서 동작하지 않고 브라우저마다 다른 UI를 가지므로 [VIDEO.JS](https://videojs.com/) 라는 HTML5 플레이어 프레임워크를 사용한다. 링크의 공식사이트를 참고하면 쉽게 사용할 수 있다.

### form, label, input, textarea, select

```html
<form method="get">
  <label for="name">이름</label>
  <input id="name" type="text" name="name" />
  <input type="password" name="password" />
  <input type="file" name="file" />
  <input type="checkbox" />
  <input type="radio" />
  <input type="submit" />

  <textarea></textarea>
</form>
```

### div와 span

div는 block 형식으로 공간 분할, span은 inline 형식으로 공간 분할

```html
<div></div>
<span></span>
```

## HTML5 Semantic Tags

크롤러 같은 사람이 아닌 기계가 html 태그의 의미를 정확히 이해할 수 있도록 도입된 태그들입니다. div 태그에 특별한 의미가 더해진 태그를 새로 정의하였다보면 됩니다.

```html
<header>
  <h1>제목입니다</h1>
</header>
<nav>
  <ul>
    <li><a href="#">home</a></li>
    <li><a href="#">profile</a></li>
    <li><a href="#">memo</a></li>
  </ul>
</nav>
<section>
  <article>
    <h1>첫번쨰 포스팅</h1>
    <p>블라 블라</p>
  </article>
  <article>
    <h1>두번쨰 포스팅</h1>
    <p>랄랄라</p>
  </article>
</section>
<footer></footer>
```
