/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

/* let i = 10;

do {
  console.log("최초 실행");

  i++;
} while (i < 5); */

// do ~ while 문 (역순환)
/* let count = prompt("몇 번 순환 할까요?", "");

do {
  console.log(count);

  count--;
} while (count > 0); */

// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
// querySelector(".first") 선택자로 선택해서 가져오기
let first = document.querySelector(".first");

do {
  first = first.nextSibling;
} while (first.nodeType !== document.ELEMENT_NODE);

// 다음 형제가 누구야?
console.log(first);
