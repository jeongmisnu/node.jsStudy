// await 연산자
/*
- await 연산자를 사용하면 Promise가 fulfill되거나 rejected될 때 까지 함수의 실행을 중단하고 기다릴 수 있습니다.
- Promise의 연산이 끝나면 함수에서 반환한 값을 얻을 수 있습니다.
- await 연산자는 async 함수 안에서만 사용할 수 있습니다.
*/
const result = await 값;

/*
"값" 에는 Promise가 아닌 다른 값도 들어갈 수 있습니다. 아래처럼요!
Promise가 아니라면 기다리지 않고 해당 값 자체를 그대로 반환합니다.
*/

async function 함수이름() {
	const result = await 'Test!';
	console.log(result);
}

함수이름();
// Print: 'Test!';