
// 자바스크립트가 코드를 읽어올 때 각 Scope(구역)에 들어있는 var, function과 같은 키워드로 선언된 코드는 아래와 같이 동작합니다.

console.log(name); // Print: undefined
var name = '정민수';

/*
위 코드를 실행했을때 선언되지 않은 변수를 미리 참조했기 때문에 첫번째 줄에서 참조 에러가 발생해야 하는데 실제로는 발생하지 않습니다.
어떻게 된것일까요?

바로 Hoisting 이라고 불리우는 동작 때문인데요, `var`, `function` 키워드로 선언하면 아래와 같이 동작한다고 이해하시면 됩니다.
*/
// var name;

// console.log(name); // Print: undefined
// name = '강승현';

// 이렇게 선언된 변수나 함수가 함수의 스코프 최상단으로 끌어올려진다는 의미입니다.

