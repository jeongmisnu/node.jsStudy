// 1) async 함수의 반환 값은 무엇일까요?
// async 함수의 결과값은 항상 Promise 객체로 resolve 되기 때문에 값은 동일합니다.


// 2) async 함수 안에서 Promise 객체를 반환하면 어떤 결과가 나올까요?
// async 함수 안 어딘가에서 에러가 발생하지 않았다면 async 함수의 반환 값은 무조건 Promise 객체입니다!

async function getMyName() {
  return Promise.resolve('정민수');
}

const result = getMyName();

result.then((myName) => {
  console.log(myName);
});