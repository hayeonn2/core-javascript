/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */
let first = getNode(".first");

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인 (반환값이 true || false)
console.log(first.hasAttribute("class"));

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute("class"));

// - elementNode.setAttribute(name, value) – 속성값을 변경함
console.log(first.setAttribute("id", "box"));
console.log(first.setAttribute("some", "hello")); // 비표준속성

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute("some");

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log(first.attributes); // NamedNodeMap(유사배열)이 생성 (배열처럼 생겼다. 안에 value라는 값이 있다.)

// 심볼에 이터레이터(Symbol(symbol.iterator))가 있으면 순환할 수 있는 요소가 있다는 것. for...of를 쓸 수 있다.
// 열거, 순환이 가능하다는 것 => for...of를 쓸 수 있다. (안의 원하는 값을 모두 뽑아낼 수 있다.)
for (let value of first.attributes) {
  console.log(value);
}

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset
// 데이터셋으로 접근. 데이터-플레이에 플레잉을 할당!
first.dataset.play = "playing"; // set

console.log(first.dataset.play); // get

// 유틸 함수
// 1. get 함수 만들기

function getAttr(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

getAttr(".first", "class"); // first (호출부를 먼저 만들자.)

// 2. set 함수 만들기
function setAttr(node, prop, value) {
  // validation : 확인
  if (typeof node === "string") node = getNode(node);
  if (typeof prop !== "string")
    throw new TypeError("setAttr 함수의 두번째 인자는 문자 타입이어야 해요.");
  if (!value)
    throw new SyntaxError("setAttr 함수의 세번째 인자는 필수값 입니다.");

  /*   if (prop.includes('data')) {
      let rest = prop.slice(5);
      node.dataset[rest] = value;
    }
     */
  node.setAttribute(prop, value); // 세팅만해주고 끝나는거라서 리턴안해도 됨!! (뭘 얻고자 하는게 아니기때문)
}

// .first 노드 안에 data-value의 값으로 hello를 지정하겠다.
setAttr(".first", "data-value", "hello");

// attr => get + set 둘 다 가능하게끔!!
function attr(node, prop, value) {
  /* if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  } */

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

console.log(attr(".first", "id", "container"));

// 통합해주는
// 3. common 함수 만들기
