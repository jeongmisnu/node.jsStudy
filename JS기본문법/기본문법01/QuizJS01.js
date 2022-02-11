// 1. 변수 선언시 값을 할당하지 않으면 어떤 값인가요?
let roo;
console.log(roo); // undefined
typeof roo; // undefined

// 2. 선언 되지 않은 변수를 참조하면 어떻게 되나요?
// 레퍼런스 에러가 남

// 3. 배열이 기본으로 제공해주는 함수들이 있습니다. 이중 원하는 데이터를 필터링 해주는 함수는 뭘까요?
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]