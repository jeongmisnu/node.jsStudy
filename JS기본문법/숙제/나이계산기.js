/*
- 만 나이는 한국에서의 나이와 다르게 0살부터 시작
- 매 해마다 1살을 먹는게 아닌, 생일 마다 1살 먹음
*/

function getAge(dateOfBirth) {
  // 현재
  let now = new Date();

  // 받은 날짜 정리
  let date = dateOfBirth.substr(0, 10).split("-");
  let birthDate = new Date(date[0], date[1], date[2]);

  let age = now.getFullYear() - birthDate.getFullYear();
  let month = now.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

console.log(getAge('1990-01-01 16:27:00'));
// Print: 32

/*
let now = new Date();
오늘 날짜를 가져옴

let date = dateOfBirth.substr(0, 10).split("-");
받은 날짜 정렬
.substr(0, 10)
문자열 자르기 (시작, 길이)
.split("-")
가로안의 내용을 기준으로 리스트로 만듬

let birthDate = new Date(date[0], date[1], date[2]);
정렬한 날짜를 date 형식으로 대입함

let age = now.getFullYear() - birthDate.getFullYear();
오늘 날짜 객체와 생일 객체에서 연도 정보를 뽑아서 그 차이를 구함
생일이 지났으면 이것도 만나이임

let month = now.getMonth() - birthDate.getMonth();
오늘 날짜 객체와 생일 객체에서 월 정보를 뽑아 그 차이를 구함


if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) {
  age--;
}
생일이 지나지 않았으면 1살을 뺌

*/