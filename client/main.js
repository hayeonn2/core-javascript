import { getNode, loadStorage, saveStorage } from "./lib/index.js";

const textField = getNode("#textField");
const deleteButton = getNode('input[value="삭제"]');

// 새로고침 해도 남아있음  (로드스토리지에 넣어준다. 밸류값을)
loadStorage("area").then((res) => {
  textField.value = res;
});

function inputHandler() {
  saveStorage("area", textField.value);
}

// 텍스트 필드에 인풋이라는 이벤트 걸어준다.
// 값이 타이핑 되는것을 계속 감지해서 추가한다.
textField.addEventListener("input", inputHandler);

// 삭제버튼 눌렀을때 다 삭제되도록 하기 ?
