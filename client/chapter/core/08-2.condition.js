/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
let age = 20;

if (age >= 14 && age <= 90) {
  console.log("yes");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// 객체도 불린값 찍으면 트루!
// 전부다 true일 경우 마지막 값이 반환된다. 따라서 콘솔창에 { thisIsFalsy: false } 이 반환.
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsFalsy: true };

let userName = prompt("사용자 이름을 입력해주세요.", "");
let pw;

if (userName === "Admin") {
  // console.log("확인됐습니다.");
  let pw = prompt("비밀번호를 입력하세요.", "");

  if (pw === "theMaster") {
    console.log("환영!");
  } else {
    console.log("취소!");
  }
} else if (userName === "" || userName === null) {
  console.log("취소");
} else {
  console.log("인증되지 않은 사용자 입니다.");
}

console.log(userName);
