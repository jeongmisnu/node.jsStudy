// 논리 연산자
// && (AND 연산자)

condition1 && condition2 // 의 형태로 표현하며, condition1~2는 모든 자료형의 값을 넣을 수 있으며, 불리언 연산이 적용

// 연산자 양쪽에 있는 값  모두 Truthy해야 AND 연산자의 결과물도 Truthy 한것으로 봄

Truthy && Truthy // 결과 Truthy
Truthy && Falsy // 결과 Falsy

// 순서에 상관 없이 조건에 Falsy가 있다면 항상 Falsy한 결과가 나옴

// 조건은 여러개를 사용할 수 있으며, 이를 Chaining이라 부름

'String' && true && [] && {} && undefined // 결과 undefined
'String' && false && [] && {} && undefined // 결과 false

// 일반적으로 아래의 형태로 사용됨

if (variable1 && variable2) {}

// || (OR 연산자)

condition1 || condition2 // 의 형태로 표현하며, condition1~2는 모든 자료형의 값을 넣을 수 있으며, 불리언 연산이 적용됨

// 연산자 양쪽에 있는 값 중 하나라도 Truthy 하면 OR 연산자의 결과물도 Truthy 함

Falsy || Truthy // 결과 Truthy
Falsy || Falsy // 결과 Falsy

// AND 연산자와 마찬가지로 Chaining이 가능합니다.
false || '' || 0 || null || 'Value!!' || undefined // 결과 'Value!!'
false || '' || 1 || null || NaN || undefined // 결과 1

// 일반적으로 아래의 형태로 사용됨

if (variable1 || variable2) {}

// ! (NOT 연산자)
// !value 의 형태처럼 표현하며, value는 모든 자료형의 값을 넣을 수 있습니다.
// NOT 연산자의 결과물은 항상 불리언 연산이 적용된 Boolean 자료형의 값입니다. (true or false)

// !'StringValue!!' , !true , !1234 등 불리언 연산에서 Truthy로 평가되는 값의 반대 값을 반환하므로 항상 false가 반환되며,
// !'', !0, !NaN, !false 등 불리언 연산에서 Falsy로 평가되는 값의 반대 값을 반환하므로 항상 true가 반환됩니다.

// 구문 설탕

// AND
let result = null;

if (condition1 && condition2)
	result = 'Value';

// 같은 표현
const result = condition1 && condition2 && 'Value';

// 만약 condition1 과 condition2 의 자료형은 String 또는 null만 가진다고 가정할 경우, 위와 같은 구문을 아래의 구문으로 똑같이 구현 가능합니다.

// OR
let name;

if (condition1)
	name = condition1;
else if (condition2)
	name = condition2;
else if (condition3)
	name = condition3;
else
	name = '강승현';

// 같은 표현
const name = condition1 || condition2 || condition3 || '강승현';

// 각 조건이 존재하는지 condition1부터 체크하며 값이 존재하면 해당 조건에 있는 값을 result의 값으로 사용한다고 가정할 경우, 위와 같은 구문을 아래의 구문으로 똑같이 구현 가능합니다.

// Boolean 함수 대체
Boolean('Value!!');
// print: true

// 대체
!!'Value!!';
// print: true