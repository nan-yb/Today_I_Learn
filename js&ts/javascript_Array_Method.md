# Javascript Array 자주쓰는 메서드 정리

## 1. filter

- **_filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다._**

```javascript
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result); // 예상 결과 :  Array ["exuberant", "destruction", "present"]
```

### 구문

```
arr.filter(callback(element[, index[, array]])[, thisArg])
```

### 매개변수

- callback
  - 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다. 다음 세 가지 매개변수를 받습니다.
- element
  - 처리할 현재 요소.
- index Optional
  - 처리할 현재 요소의 인덱스.
- array Optional
  - filter를 호출한 배열.
- thisArg Optional
  - callback을 실행할 때 this로 사용하는 값.

### 반환 값

- a테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.

---

## 2. map

- **_map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다._**

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

### 구문

```
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

### 매개변수

- callback
  - 새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.
- currentValue
  - 처리할 현재 요소.
- index Optional
  - 처리할 현재 요소의 인덱스.
- array Optional
  - map()을 호출한 배열.
- thisArg Optional
  - callback을 실행할 때 this로 사용되는 값.

### 반환 값

- 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.

---

## 3. reduce

- **_reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다._**

```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

### 구문

```javascript
arr.reduce(callback[, initialValue])
```

### 매개변수

- callback
  - 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.
- accumulator
  - 누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
- currentValue
  - 처리할 현재 요소.
- currentIndex Optional
  - 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
- array Optional
  - reduce()를 호출한 배열.
- initialValue Optional
  - callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.

### 반환 값

- 누적 계산의 결과 값.
