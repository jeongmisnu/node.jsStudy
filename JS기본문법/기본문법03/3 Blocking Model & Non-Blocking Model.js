/*
- Blocking Model이란, 코드의 실행이 끝나기 전까지 실행 제어권을 다른곳에 넘기지 않아 다른 작업을 하지 못하고 대기하는 것을 말합니다.
- Non-blocking Model이란, 코드의 실행이 끝나지 않아도 실행 제어권을 다른곳에 넘겨 다음 코드가 실행될 수 있는것을 말합니다.
- 동기, 비동기와 뭐가 다른걸까?
    - 제어권을 넘기면(Non-blocking) 다른 코드도 실행될 수 있으므로 비동기 처리가 가능하지만 제어권을 넘기지 않으면(Blocking) 비동기 처리가 가능한 환경이어도 비동기 처리가 불가능합니다.
- 자바스크립트는 Async + Non-blocking Model을 채용하여 현재 실행중인 코드의 실행이 끝나지 않아도 다음 코드를 호출합니다.
- 결론적으로 자바스크립트는 Non-blocking model을 가지며 각 명령이 순서대로 실행될 수 있게 구현되어 있지만, Non-blocking model에 의해 명령이 아닌 모든 함수는 비동기적으로 실행됩니다.
*/

function first() {
    console.log('First');
  }
  
  setTimeout(first, 1000); // 1000ms(1초) 뒤에 first 함수를 실행해준다.
  
  console.log('Middle');
  console.log('Last');
  
  // Print: Middle
  // Last
  // First