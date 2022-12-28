/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number => '2022'
let YEAR = 2022;

console.log(String(YEAR));

// undefined => 'undefined'
// null => 'null'
console.log(String(undefined));

let days = null;
console.log(String(days));

// boolean => 'true' or 'false'
let isKind = true;
console.log(String(isKind));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean => true : 1 / false : 0
let cutie = true;
console.log(+cutie);

// string 숫자형 문자
let num = "123";
console.log(num * 1);

// numeric string
let width = "32.2130px";
console.log(+width); //NaN
console.log(parseFloat(width, 10)); //320

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("")); //false

console.log(Boolean(" ")); //true
console.log(Boolean(123)); //true
console.log(!""); //true (부정해준 것)
