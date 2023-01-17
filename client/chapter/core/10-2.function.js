/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

// 함수 선언문
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (/*moneyA, moneyB, moneyC, moneyD*/) {
  // 일반함수에서 arguments가 (늘어난)값을 다 받아주는 역할을 한다.
  // 배열은 아니지만 배열과 유사한. 유사배열. prototype: object;
  // 함수 안에서 사용할 수 있는 것. (매개변수에 없든 있든) 인수로 받은거를 모두 받을 수 있다.
  console.log(arguments);

  let total = 0;

  // 유사배열을 진짜 배열로 만들어준다. static method
  // let arr = Array.from(arguments);

  // slice : 배열만 쓸 수 있는 메서드.
  // prototype으로 접근해서 slice를 빌려쓰는 것. (배열의 힘을 빌리는 것)
  // Array.prototype.slice 진짜 배열만 쓸 수 있는 것. instance method
  // 생성자 함수를 통해 생성된 배열만 사용할 수 있는 능력
  let arr = Array.prototype.slice.call(arguments);

  return arr.reduce(function (acc, item) {
    return acc + item;
  });

  /* for (let value of arguments) {
    total += value;
  } */

  /* for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  } */

  // return total;

  //return moneyA + moneyB + moneyC + moneyD;
};

// 뒤에 늘어난 값은 없는 값처럼 취급됨.

console.log(calculateTotal(100, 200, 300, 400, 150, 200));

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
// 하지만 hello()를 호출 할 수는 없다 => 그래서 익명함수를 많이씀.
// "이름만 정의"되고 호출시 namedFunctionExpression()로 호출해야 함.
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  if (typeof url === "string") {
    resolve();
  } else {
    reject();
  }
};
callbackFunctionExpression(
  "http://www.naver.com",
  function () {
    console.log("해당 페이지로 넘어갑니다.");
  },
  function () {
    console.log("url 입력 정보가 올바르지 않습니다.");
  }
);

/* forEach는 내부에 이런 식으로 구현되어 있을까요?
forEach(function(currentValue, index, array){},thisArg);

arr.forEach(function(item, index){}); */

// 함수 선언문 vs. 함수 (표현)식
function aa() {}
// 호이스팅 되는 것은 const bb 이다.
const bb = function () {};

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 디자인 패턴 중 하나 (전역을 보호하기 위해서 var때문에..)
(function () {
  var x = 1;
  console.log("h1~");
})();
