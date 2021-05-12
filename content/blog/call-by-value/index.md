---
title: 자바스크립트의 함수 호출 방식은 Call by value 입니다.
date: "2021-05-12T01:16:10.284Z"
description: "Primitive type, Object Type, Call by value, Call by reference 각 개념을 통해 이해해봅시다."
---

## Primitive Type

자바스크립트에는 boolean, number, string, null, undefined 5 가지의 원시 타입(primitive type)이 있습니다.

원시 타입은 변수에 값 자체를 할당합니다. 따라서 const로 선언된 상수에는 값을 변경할 수 없죠.

```js
const foo = 5;
console.log(foo); // 5

foo = 6; // Uncaught TypeError: Assignment to constant variable.
```

## Object Type

반면에 자바스크립트의 객체 타입(Object Type)은 변수에 객체의 참조 주소를 값으로 할당합니다.

따라서 아래와 같이 const로 객체를 선언한 후에 해당 상수를 통해 객체의 프로퍼티를 설정해도 오류가 나지 않죠. 프로퍼티를 바꾸는 것이지 const에 할당된 참조 주소를 변경하는 것이 아니기 때문이죠.

```js
const obj = {
  name: 'kim'
}

obj.age = 21;

obj = { // Uncaught TypeError: Assignment to constant variable.
  reset: true;
}
```

> 참조 주소 - 메모리에 할당된 값이 저장된 주소

## Call by value

Call by value와 Call by reference는 함수를 호출할 때 arguments들을 어떤 방식으로 불러오느냐를 나타내는 말입니다.

글의 제목처럼 자바스크립트는 Call by value 방식으로 함수를 호출합니다.

**원시 타입**인 경우에는 call by value라는 의미 그대로 이해하기가 쉬울 것 입니다.

```js
let num = 1;

function changeNum(n) {
  n = 3;
}

changeNum(num);

console.log(num); // 1
```

changeNum이라는 함수에 num 변수를 파라미터로 넣어주어도 num 변수의 값을 복사했기 때문에 changeNum 내부에서 파라미터에 할당된 값을 변경하여도 함수 밖의 num 변수의 값은 변화없이 1이 출력됩니다.

**객체 타입**
반면에 객체 타입일 때 아래와 같은 경우일 때가 자바스크립트의 함수 호출이 call by reference라고 착각하게 되는 경우일 것입니다.

```js
let obj = {
  isGood: true,
};

function changeObj(o) {
  o.isGood = false;
  console.log(obj === o); // true - obj와 o가 같은 값을 참조하고 있음.
}

changeObj(obj);

console.log(obj.isGood); // false
```

위에서 객체 타입은 변수에 참조 주소를 값으로 설명드렸죠? 함수의 파라미터도 마찬가지라고 생각하면 됩니다. 함수 파라미터에도 변수와 마찬가지로 참조 _주소의 값이 복사_(call by value)되어 들어간 것이죠. 함수의 파라미터를 그냥 일반 변수라고 생각하면 이해하시기 쉬울 것입니다. 따라서 아래와 같은 경우가 생기는 것이죠.

```js
let obj = {
  isGood: true,
};

function changeObj(o) {
  o = {
    isGood: true,
  };
  console.log(obj === o); // false - obj와 o가 다른 값을 참조한다.
}

changeObj(obj);
```

함수의 파라미터 o에는 새로운 객체의 참조 주소값이 할당 되었기 때문입니다. 여기서 알 수 있듯이 함수의 파라미터는 일반 변수들 처럼 단순히 값을 복사 받아서(call by value) 함수 내부에서 사용하는 것이죠.

## Call by reference

C언어를 예를 들고 싶은데 코드를 빼고 간단하게 말로 적어보자면, Call by reference 방식의 경우 함수의 파라미터는 메모리 상의 값이 할당된 참조 주소를 의미합니다. call by value에서는 함수 파라미터의 값들을 새로 할당해 줄 수 있지만, call by reference 방식에서 함수 파라미터는 함수 인자로 받은 참조 주소를 계속해서 가르킵니다.

무슨 의미냐 하면은 만약 자바스크립트가 call by reference로 객체 타입 파라미터들을 다룰 수 있었다면 아래와 같았을 것입니다.

```js
let obj = {
  isGood: true,
};

function changeObj(o) {
  o = {
    isGood: true,
  };
  console.log(obj === o); // true - obj와 o가 같은 값을 참조한다. 만약 자바스크립트가 call by reference 였다면!
}

changeObj(obj);
```

## 보충학습 - shallow clone & deep clone

자바스크립트의 함수 호출 방식이 call by value인 것을 알았습니다. 그렇다면 보충학습으로 자바스크립트의 객체는 어떻게 복사할 수 있을까요?

자바스크립트의 객체는 변수에 참조값을 할당합니다. 때문에 아래와 같은 코드에서는 obj1과 같은 내용을 가지고 있지만 참조값이 독립된 객체가 obj2에 복사되는 것이 아니고 obj1과 같은 참조값을 복사받게 됩니다.

```js
const obj1 = {
  foo: "bar",
};

const obj2 = obj1;
```

그렇다면 어떻게해야 독립된 객체로 복사할 수 있을까요? 여러 방법이 있고 우선 복사정도에 따라 얕은 복사(shallow clone)와 깊은 복사(deep clone)가 있습니다.

이렇게 두 가지의 복사 형태로 나뉘게 되는 이유는 객체가 내부에 객체 타입의 프라퍼티를 가지고 있는 경우에 발생됩니다. 객체가 가지고 있는 원시타입들은 새롭게 값이 복사되지만 객체 타입의 프라퍼티들은 변수에 객체가 참조값이 할당되는 것처럼 동일하게 참조값이 복사되기 때문이죠.

** 얕은 복사 **는 아래와 같은 방법으로 가능합니다.

- Object.assign()
- ES6 spread operator

** 깊은 복사 **는 아래와 같은 방법으로 가능합니다.

- Lodash 라이브러리의 deepclone 함수 사용하기
