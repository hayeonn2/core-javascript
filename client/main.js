import {
  copy,
  getNode,
  getInputValue,
  getRandom,
  insertLast,
  clearContents,
  typeError,
  isNumericString,
  showAlert,
  addClass,
  toggleClass,
  removeClass,
} from "./lib/index.js";
import { jujeobData } from "./data/data.js";

/* let data = "123";
data = Number(data);
console.log(data); */

console.log(isNaN("dd123"));

const submit = getNode("#submit");
const resultArea = getNode(".result");

/* console.log(getRandom(5));
console.log(submit); */

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    console.log("이름을 입력해주세요!");
    showAlert(".alert", "올바른 정보를 입력해주세요.", 3000);

    // GSAP
    gsap.fromTo(
      resultArea, //target
      0.01, // duration
      { x: -5 }, // vars object (from) ~부터
      { x: 5, clearProps: "x", repeat: 20 } //vars object (to) ~까지(20번쉐이킹)
    );

    // 추가하고 1초후 다시 클래스를 없애기
    /* addClass(resultArea, "shake");
    setTimeout(() => {
      removeClass(resultArea, "shake");
    }, 1000);
 */
    return; // 종료시켜버리는 것!
  }

  if (isNumericString(name)) {
    console.log("제대로입력");
    gsap.fromTo(
      resultArea,
      0.01,
      { x: -5 },
      { x: 5, clearProps: "x", repeat: 20 }
    );
    showAlert(".alert", "문자를 포함해서 써주세요!", 3000);
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler() {
  let text = resultArea.textContent;

  // 클립보드에 저장할 수 있는 기능 제공
  // navigator.clipboard.writeText(text);
  copy(text).then(() => {
    showAlert(".alert-success", "클립보드에 복사가 완료됐습니다.", 2000);
  });
  // 약속구문
  // 근데 실패가 되어도 복사되었다는 구문이 뜬다. (then에 안넣고 copy, showAlert을 순서대로만 썼을때..)
  // 그때 필요한게 약속하는 부분이 필요하다!!
  // 따라서 .then()=>{} 안에 넣어주는 것.
  // 카피가 완벽하게 됐다면(약속을 지키면), 함수를 실행할거야라는 뜻
}

submit.addEventListener("click", clickSubmitHandler);
resultArea.addEventListener("click", clickCopyHandler);
