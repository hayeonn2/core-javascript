/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한
let authUser = {
  uid: "user-id-adsqwe13",
  name: "hayeon",
  email: "dwd1205@naver.com",
  isSignIn: true,
  permission: "paid", // free | paid
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser["permission"]);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

function createUser(computedProp = calculateProperty) {
  // 디폴트 파라미터
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computedProp]: "010-1212-1212",
  };
}
const user = createUser(); // "phone" 이 출력 (기본값)
// const user = createUser("tel"); // "tel" 이 출력

// 프로퍼티 포함 여부 확인
for (let key in authUser) {
  //console.log(key);
}

// 프로퍼티 나열 authUser: 객체  key만 모여놓은 배열, value만 모아놓은 배열 만들어주세요.
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

console.log(valueArray);

function getPropertiesList(authUser) {
  return Object.keys(authUser);
}
let result = getPropertiesList(authUser);

console.log(result);

// 프로퍼티 제거 or 삭제

// 유틸함수..? 만들 수 있을까?
/*
  1. 함수 이름 정하기
  2. 인수(arguments)와 인자(parameter)정하기
  3. 확인하기 (validation)
  4. 리턴값 (return)
*/
// 제거하기
function removeProperty(object, key) {
  object[key] = null;
}

removeProperty(authUser, "uid");

// 삭제하기
function deleteProperty(object, key) {
  delete object[key];
}

deleteProperty(authUser, "uid");

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

/* const student = {
  name: name,
  email: email,
  authorization: authorization,
  isLogin: isLogin,
}; */

// shorthand property
const student = { name, email, authorization, isLogin };

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0이면 ?  true : false
function isEmptyObject(object) {
  // return Object.keys(object).length === 0 ? true : false;

  // true, false를 자체적으로 반환해준다.
  return Object.keys(object).length === 0;
}

const empty = {};

console.log(isEmptyObject(empty)); //true

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};

console.log(Object.entries(salaries));

let total = 0;

/* 구조분해 할당 */
for (let [key, value] of Object.entries(salaries)) {
  // let key = keyValue[0];
  // let value = keyValue[1];

  total += value;
}

console.log(total);

let color = ["#ff0000", "#2b00ff", "#00ff2f"];
const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2];

/* 객체 구조분해 할당 */

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
}; */

// 키값만 맞으면 순서 상관 없음!
// const { John: John, Ann: Ann, pete: pete } = salaries;
const { John, Ann, pete } = salaries;
console.log(Ann);

const element = {
  width: 500,
  height: 500,
};
function getElementWidth(option, node) {
  const { width, height } = element;
}
