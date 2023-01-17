function getNode(node) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수 인자는 문자 타입이야!");
  }
  return document.querySelector(node);
}

getNode(".second"); // <span class="first">hello</span> 출력하는 함수
