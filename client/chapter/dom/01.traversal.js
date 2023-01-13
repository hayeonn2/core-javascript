/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// let first = document.querySelector(".first");
let [first, second] = document.querySelectorAll("span");
console.log(first, second);

console.log();

/* 문서 대상 확인 */
// - matches
// 선택자 안에 class 또는 id를 가지고 있는 대상이 있어?
console.log(getNode(".first").matches(".first")); // true

// - contains
// 선택자에 자식들 중 해당 element가 있어?
console.log(getNode("h1").contains(getNode(".first"))); // true

let clicked = false; // 전역이 오염되서 클로저에 담아야하지 않을까? (중첩함수 이용)
document.addEventListener("click", () => {
  if (first.classList.contains("first") && !clicked) {
    first.classList.add("is-active");
  } else {
    first.classList.remove("is-active");
  }
  clicked = !clicked;
});
