/*
자바스크립트에서 비동기 처리를 동기로 처리할 수 있게 돕는 객체 유형입니다.
이 객체를 이용하면 여러분은 Non-blocking model을 가진 자바스크립트에서도 비동기 처리를 아주 손쉽게 할 수 있습니다.
*/
/*
new Promise(executor);

// 예제
new Promise((resolve, reject) => {
    // 명령문
});
*/

/*

- 프로미스의 상태
    
    프로미스는 반드시 3가지 상태를 지니며, 대기(Pending) 상태가 아니라면 Promise의 연산이 이미 끝난 상태로 볼 수 있습니다.
    
    - 대기(Pending): 이행하거나 거부되지 않은 초기 상태.
    - 이행(Fulfilled): 연산이 성공적으로 완료됨.
    - 거부(Rejected): 연산이 실패함.


- 프로미스가 만들어 질 때 `executor`가 실행되며, `executor`에서 `resolve` 함수가 호출되기 전까지 `firstPromise.then(...)` 안에 있는 코드를 실행하지 않습니다.
  이렇게 `executor` 가 실행되어 resovle된 프로미스를 Fulfilled Promise라고도 부릅니다.

*/

const timerPromise = new Promise((resolve, reject) => { // 이곳에 정의된 함수가 executor
    setTimeout(() => {
        console.log('First');
          resolve();
    }, 1000);
});
  
// 이 시점에서 timerPromise는 Fulfilled Promise라고 부를 수 있다.
  
timerPromise.then(() => {
    console.log('Middle');
    console.log('Last');
});
  
// Print: First
// Middle
// Last

/* 
- Promise.catch-
프로미스 안에서 에러가 throw 되거나 reject되면 catch 메서드에 작성한 함수가 실행됩니다.
*/

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First');
        reject('Error!!'); // 직접 reject를 실행하면 프로미스에서 에러가 발생한것으로 간주됩니다.
    }, 1000);
});
  
errorPromise.then(() => {
    console.log('Middle');
    console.log('Last');
}).catch((error) => {
    console.log('에러 발생!', error);
});
  
// Print: '에러 발생! Error!!'

// Promise.then 더 알아보기

// 1. Promise에서 resolve 된 값 이용하는 방법
const firstPromise = new Promise((resolve, reject) => {
    resolve('First');
});

firstPromise.then((value) => {
    console.log(value);
});

// Print: 'First'


// 2. Promise.resolve 함수 이용
// - 프로미스가 값을 반환하는 경우 반환되는 값은 항상 프로미스로 감싸져 있습니다!
const firstPromise = Promise.resolve('First');

firstPromise.then((value) => {
	console.log(value);
});

// Print: 'First'

// 3. Promise.then으로 함수형 프로그래밍 체험하기
// - 이것이 가능한 이유는 console.log라는 함수 뒤에 괄호를 사용해서 함수를 호출하지 않고, 함수를 그대로 then에 넘겼기 때문입니다.
const firstPromise = Promise.resolve('First');

firstPromise.then(console.log);

// Print: 'First'

// 4. Promise.then으로 함수형 프로그래밍 체험하기 2
const countPromise = Promise.resolve(0);

function increment(value) {
	return value + 1;
}

const resultPromise = countPromise.then(increment).then(increment).then(increment);
resultPromise.then(console.log);

// Print: 3

/* 
- 이 외에도 유용한 프로미스 함수
- [Promise.all](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Promise.race](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) */