import {
  getNode,
  getInputValue,
  getRandom,
  insertLast,
  clearContents,
  typeError,
  isNumericString,
  showAlert,
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
    return; // 종료시켜버리는 것!
  }

  if (isNumericString(name)) {
    console.log("제대로입력");
    showAlert(".alert", "문자를 포함해서 써주세요!", 3000);
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener("click", clickSubmitHandler);
