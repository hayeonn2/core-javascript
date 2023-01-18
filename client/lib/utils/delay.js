import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

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
export function delayP(options = {}) {
  //const { shouldReject, data, errorMessage, timeout } = options;

  // 전개연산으로 값을 config에 넣어준다. (얕은 복사)
  // 그냥 냅다 defaultOptions를 불러와 사용하면 값이 바뀌어 버리니까 config에 얕은 복사를 해온다. 즉, config에 복사해 온 defaultOptions를 이용해도 기본값은 바뀌지 않는다.
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options; //숫자를 옵션에 대체를해!
  }

  // 객체 합성 mixin (기존값이랑 내가 옵션으로 전달한 값을 합성한다. 옵션에서 물어봐.. 값있어? 하면 컨피그 값으로 바꾸고..)
  // 받은 값이 있으면 컨피그에 추가해! 뒤에있는 옵션값이 컨피그값을 덮는다 (만약 동일한게 있으면)
  if (isObject(options)) {
    config = { ...config, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

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

// 객체로 만들면 순서없이 쓸 수 있다.
// 근데 데이터만 쓰고싶으면? 나머지는 기본값쓰고
/* shouldReject: true,
errorMessage: "잘가",
timeout: 1500, */
//data: "안녕",
/* delayP(3000).then((res) => {
  console.log(res); // 진짜 성공
});
 */
/* delayP
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */
