/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = "Less is more.";

console.log(message);

// length 프로퍼티
let stringTotalLength = message.length;
console.log("stringTotalLength:", stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter;

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
/* let immutableChangeCharacter;
message = "more" + message[5];
message[3] = "i";
console.log(message); */

// 부분 문자열 추출
let slice = message.slice(8, -1);
console.log("slice: ", slice);

let subString = message.substring(0, 5);
console.log("substring: ", subString);

let subStr; //없어짐!

// 문자열 포함 여부 확인
// i가 존재한다면 인덱스 위치를 알려준다. 없으면 -1 반환!
let indexOf = message.indexOf("i");
console.log("indexOf: ", indexOf);

let lastIndexOf = message.lastIndexOf("i");
console.log("lastIndexOf: ", lastIndexOf);

// 포함하거나 아니거나 불린값 반환!
let includes = message.includes("less");
console.log("includes: ", includes);

// 첫글자가 뭐로 시작하는지 알기위해서
let startsWith = message.startsWith("L");
console.log("startsWith: ", startsWith);

let endsWith = message.endsWith(".");
console.log("endsWith: ", endsWith);

// 공백 잘라내기
/* let trimLeft = message.trimLeft();
console.log("trimLeft: ", trimLeft);
let trimRight; */

// 띄어쓰기는 안없어진다. 띄어쓰기 없애려면 정규표현식 써야됨.
// message.replace(/\s*/g, "")
let trim = message.trim();
console.log("trim: ", trim);

// 텍스트 반복
let repeat = message.repeat(2);
console.log(repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log(toLowerCase);

let toUpperCase = message.toUpperCase();
console.log(toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;
