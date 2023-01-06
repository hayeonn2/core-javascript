function earth() {
  function tiger() {}

  // 익명함수, 화살표함수(디스 안사용할때)여도 된다..! 이름은 중요치않아!!!!!! 타이거든 누구든!!!!!!!
  return function () {};

  return () =>
}

const ufo = earth(); // ufo : 우주선

// 클로저를 해버리면 가비지컬렉터가 접근 안됨!!!!!! (그냥 지나침.. 우주선이..)

function handler() {
  let isClicked = false;

  return function () {
    if (isClicked === true) {
      this.style.background = "transparent";
    } else {
      this.style.background = "red";
    }

    isClicked = !isClicked;
  };
}

document.querySelector(".first").addEventListener("click", handler());
// handler()를 써준 이유 : 클로저이기 때문!!!!!!!!!!!!!!!!