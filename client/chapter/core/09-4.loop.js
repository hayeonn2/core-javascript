/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: function () {
    return "헤헤";
  },
};

let key = "creator";

// key가 javaScript 안에 있니?
// console.log(key in javaScript);
//true

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의(own) 속성인지(property) 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// hasOwnProperty : 자바스크립트 자체에서 보호해주지 않는다. 안전하게 하는 방법은??

// 이렇게 쓰고 nickname을 추가하면 그냥 나와버림
// console.log(javaScript.hasOwnProperty(key));

//진짜객체에선 안나온다.. 이런 상황(오염)이 생길 수도 있기때문에.. 원래 있던 객체를 알기위해선 밑에 과정처럼 진행해주는 것이 좋다.
Object.prototype.nickname = "tiger";

// 안전하게 받는 방법 (오브젝트가 가진 능력 중에 hasOwnProperty에 접근하겠다.)
// 자바스크립트의 키 값을 확인 하는 것..
// 진짜 비교를 해주는거 !!!!! 진짜...객체..(Object.prototype.hasOwnProperty)
// let a = {} === Object.prototype
console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// 진짜 찐 비교!! 찐을!! 구별하기위해! nickname(오염원) 없는 상태 확인하기 위해!
/**
1. 객체에 이름을 또 덮어쓸수 있어서(회사 신입들이 실수로?)
2. 진또배기 객체안의 내용을 봐야해서 객체의 능력을 빌려쓰려고
 */
for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
    //nickname값이 안나옴..
  }
}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

// - 배열 객체 순환에 사용할 경우?
// 객체에 양보하세요! 배열은 for..of를 사용한다!

let tens = [10, 100, 1000, 10000];

for (let value in tens) {
  if (Object.prototype.hasOwnProperty.call(tens, value)) {
    console.log(tens[value]);
    // 콘솔만 쓰면 nickname의 tiger도 같이나온다.. 그래서 if문 안에 넣으면 딱 tens 값만 나옴
  }
}
