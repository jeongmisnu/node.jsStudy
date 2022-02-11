// 모든 for문은 조건문 위치에 있는 값이 Truthy 한 경우 계속 반복됨
// 조건이 처음부터 만족하지 않는다면 반복문은 실행되지 않음

/*
for (초기화구문; 조건문; 증감문)
	// 명령문

for (초기화구문; 조건문; 증감문) {
	// 명령문
}
*/
// --------------------------------------
/*
- 초기화 구문
    for 구문 안에서만 사용될 변수를 선언할 수 있음
- 조건문
    조건문에 있는 값이 Falsy한 경우 명령문의 반복을 중단
- 증감문
    구문이 끝나는 경우 증감문에 선언된 구문이 실행

- 실행되는 순서
*/

for (let i = 0; i < 3; i = i + 1)
	console.log(i);

// Print: 0
// 1
// 2
// --------------------------------------
/*
break 문
- 조건에 상관없이 반복문을 중단하기 위한 키워드
*/

for (let i = 0; i < 5; i++) {
	if (i === 2) break;

	console.log(i);
}

// Print: 0
// 1
// --------------------------------------
/*
continue 문
- 조건에 상관 없이 해당 명령문을 중단하고 바로 다음 단계의 증감문부터 실행
*/

for (let i = 0; i < 5; i++) {
	if (i === 2) continue;

	console.log(i);
}

// Print: 0
// 1
// 3
// 4
// --------------------------------------
/*
for of 문
- Array, Map과 같은 반복 가능한(Iterable) 객체의 요소를 하나씩 반복할 수 있게 해줍니다.
(Object는 반복 가능한 객체에 해당하지 않습니다!)
- 지금은 배열을 하나씩 반복해주는 문법이라고 생각해도 괜찮습니다.
- 인터페이스

for (변수선언문 of 반복가능한객체) {
  // 명령문
}
*/
// 실사용 예1
const persons = ['강승현', '홍길동', '김아무개'];

for (const person of persons) {
  console.log(person);
}

// Print: '강승현'
// '홍길동'
// '김아무개'
// --------------------------------------
/*
for in 문

- for...of 문과 유사하게 객체의 요소를 반복해주지만, 선언한 변수에 값이 직접 들어가지 않고 요소의 key를 전달합니다.
- for...of 문처럼 반복 가능한(Iterable) 객체는 모두 사용할 수 있습니다.
- 인터페이스

for (변수선언문 of 반복가능한객체) {
	// 명령문
}
*/
// 실사용 예) 1

for (const person in persons) {
	console.log(person);
}

// Print: 0
// 1
// 2

// 예) 2
for (const index in persons) {
    const person = persons[index];
      console.log(person);
  }
  
  // Print: '강승현'
  // '홍길동'
  // '김아무개'

  