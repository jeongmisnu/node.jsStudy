// 1. 함수에서 return을 사용하지 않으면 무엇을 반환할까요?
// 답: 아무 동작도 하지 않는다

// 2. 다음 보기중 반복문 사용이 가장 적합한 사례는 무엇일까요?
// 1 배열안에서 특정한 값을 찾을 때
// 2 반복이 끝나야 하는 정확한 조건을 모를 때
// 3 1에서 100의 숫자중 짝수만 카운트할 때
// 답: 3

// 3. 반복문을 이용하여 다음의 배열의 값을 하나씩 차례대로 출력해보세요.
const example = ['apple','banana','mango','kiwi','melon'];

for (let i = 0; i < example.length; i++) {
    console.log(example[i]);
}

for (let fruit of example) {
    console.log(fruit);
}

for (let idx in example) {
    console.log(example[idx]);
}