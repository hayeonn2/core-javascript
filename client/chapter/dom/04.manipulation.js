/* ---------------------------------------------------------------------- */
/* DOM Manipulation                                                       */
/* ---------------------------------------------------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

let div = document.createElement("div");
div.className = "third";
div.textContent = "3번째";

// 돔을 조작하는 것!!! 돔 : 노드가 모인것
/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */
const h1 = getNode("h1");

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// h1.append(div);

// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// h1.prepend(div);

// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// h1.before(div);

// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

// hidden 제거 , remove 삭제 느낌
// h1.remove();

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText
let idx = 1;
let template = /* html */ `<div class="box${idx}">새로움</div>`;
// h1.insertAdjacentHTML("afterend", template);

function insertBefore(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  node.insertAdjacentHTML("beforebegin", text);
}

insertBefore("h1", template);
// - "beforebegin" – elem 바로 앞에 html을 삽입

// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
function insertFirst(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  node.insertAdjacentHTML("afterbegin", text);
}

insertFirst("h1", template);

// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
function insertLast(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  node.insertAdjacentHTML("beforeend", text);
}

insertLast("h1", template);

// - "afterend" – elem 바로 다음에 html을 삽입
function insertAfter(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  // 노트가 스트링인지 확인하고 써줘야 한다. 노드타입을 가지고 비교하는 것이어서
  //
  if (node.nodeType !== document.ELEMENT_NODE)
    TypeError("insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");

  node.insertAdjacentHTML("afterend", text);
}

insertAfter("h1", template);
