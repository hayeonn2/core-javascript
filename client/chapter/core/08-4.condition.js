/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = "user@company.io";
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
console.log(
  (receivedEmailAddress =
    emailAddress === undefined || emailAddress === null
      ? "user@company.io"
      : emailAddress)
);

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? "user@company.io";
receivedEmailAddress = emailAddress || "user@company.io"; //뭐가 다를까?

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = "10px";

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(false || WIDTH); // 10px
console.log(false ?? WIDTH); // false : 정의된 값을 찾는 것!

console.log("" || WIDTH); // 10px
console.log("" ?? WIDTH); // "" 빈문자 출력!!
