import { getNode } from "../dom/getNode.js";

const first = getNode(".first");
const second = getNode(".second");

/* function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}
delay(() => {
  first.style.top = "-100px";

  delay(() => {
    first.style.transform = "rotate(360deg)";

    delay(() => {
      first.style.top = "0px";
    });
  });
}); */
/* first.style.transform = "rotate(360deg)";
first.style.top = "0px"; */

/* delayP()
  .then(() => {
    first.style.top = "-100px";
    return delayP();
  })
  .then(() => {
    first.style.transform = "rotate(360deg)";
    second.style.left = "100px";
    return delayP();
  })
  .then(() => {
    first.style.top = "0px";
    second.style.left = "0px";
  }); */

// 객체로 만들어준다 기본옵션을 밖에다 설정
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공했습니다!",
  errorMessage: "알 수 없는 오류가 발생 했습니다.",
};

// 슈드리젝트 : if문써서 굳이 캐치문 안써도 그냥 트루, 폴스 값에 따라 리졸브/리젝트 나타내기 위한 함수
function delayP(
  shouldReject = false,
  timeout = 1000,
  data = "성공했습니다!",
  errorMessage = "알 수 없는 오류가 발생 했습니다."
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

delayP(false, 1000, "진짜 성공", "오류다!").then((res) => {
  console.log(res); // 진짜 성공
});

/* delayP
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */
