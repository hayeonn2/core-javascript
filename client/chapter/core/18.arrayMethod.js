/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];
console.log(typeof arr);
console.log(Array.isArray(arr)); //true
console.log(Array.isArray("")); //false
console.log(Array.isArray({})); //false

/* 요소 순환 -------------------------------------------------------------- */

// forEach
arr.forEach((item, idx) => {
  console.log(item, idx);
});

// find : 대상 "한가지"만 찾는다! (트루일때)
const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];

const find = users.find((item, idx) => {
  return item.id < 5;
});

console.log(find);

//findIndex : 배열이 가지는 인덱스번호를 뽑아낸다.
const findIndex = users.findIndex((item, idx) => {
  return item.id === 3;
});

console.log(findIndex);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

// find
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((number) => {
  return number < 100;
});

console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce
// 나이의 합
const ans = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
console.log(ans);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split = 문자 => 배열

// join
