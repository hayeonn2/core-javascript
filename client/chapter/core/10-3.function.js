/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

// (price1, price2, ...args) 처럼도 받을 수 있다. (나머지 것들 : ...args)
// 함수에서 ...args(rest 파라미터) 로 받아주면 배열로 변신!
const calculateTotal = (...args) => {
  let total = 0;

  args.forEach((item, idx) => {
    total += item;
  });

  // args.reduce((acc, item) => acc + item);

  console.log(total);
  return;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 일반함수는 나를 호출한 대상을 this
// 화살표 함수와 this (this 자체가 없다!! 그냥 내 부모를 찾아서 넣어준 것.)

/**
 * 객체에서 함수 호출시..
 * 일반함수로 쓸때 user.show()일때 user를 보여준다.
 * 화살표 함수일땐 전역인 윈도우를 가리킨다.
 * 따라서 객체 안에서 함수(메서드)호출 할땐 화살표 함수보다 일반함수가 좋다.
 * this 쓸 일 없으면 화살표 함수 써도 됨..
 * map, forEach, reduce돌릴 때 많이 사용(화살표.. 콜백함수에서 사용)
 */

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;

  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }

  return result;
};

pow(2, 53);

// 변수 만들 필요 없이 acc가 누적된 값을 다 저장해준다!
let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = "";

  if (!repeatCount) {
    throw new Error("숫자 넣어라");
  }
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, "");
//repeat("hello", 3);
