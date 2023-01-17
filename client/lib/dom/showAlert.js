import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";

export function showAlert(node, text = "에러입니다.", timeout = 1500) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = text;

  addClass(node, "is-active"); // node에게 is-active 클래스 넣기

  // 일정시간 지나면 remove 시키기
  setTimeout(() => {
    removeClass(node, "is-active");
  }, timeout);
}

// showAlert(".alert", "올바른 정보를 입력해주세요.", 3000);
