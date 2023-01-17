/* eslint no-undef:'warn' */
/* eslint no-unused-vars:'off' */

// 1. 인풋 벨류값 가져오기
// 2. 이벤트 헨들러 연결
// 3. 이벤트 기본동작 차단
// 4. 두 수 합 더하기
// 5. 화면 출력

// 접근대상을 지정해서 안전하게 가져올 수 있다.
// 근데 너무많아지면..힘드니까 한번에 받아주는애가 필요 (중간다리 역할)
/* import { getNode } from "./lib/dom/getNode.js";
import { css, removeClass } from "./lib/dom/css.js"; */

// 중간다리를 만들고 from을 한번만 받아서 안에 있는 애들을 갖다 쓰면 된다.
import { getNode, css, removeClass } from "./lib/index.js";

// 콘솔창에 firstInput.value로 찾을 수 있음.
const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const done = getNode("#done");

function getInputValue(node) {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT")
    refError("getInputValue 함수는 INPUT 요소만 허용합니다.");
  return node.value;
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents(node) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
}

function handler(e) {
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  console.log(total);

  clearContents(".result");
  insertLast(".result", total);
}

// 실시간으로 계산되게..만들기
// 인풋핸들러는 프리벤트디폴트 없어도된다.! 인풋이 뭘 하는게 아니라서?
function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  console.log(total);

  clearContents(".result");
  insertLast(".result", total);
}

done.addEventListener("click", handler);

// 인풋은 체인지 이벤트를 사용할 수 있다!!
firstInput.addEventListener("change", inputHandler);
secondInput.addEventListener("change", inputHandler);
