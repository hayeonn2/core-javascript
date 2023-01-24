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

/* -------------------------------------------------------------------------- */
/*                                 async await                                */
/* -------------------------------------------------------------------------- */

// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기
//         2. 코드 실행 흐름 제어 (앞에있는 일이 끝나야 그 다음일 실행) -  원치않는 에러가 발생하는 것을 막아준다.
// 많이 남발하면 별로 좋지않다. 딜레이가 많이 생긴다.
// async를 붙이면 프로미스를 반환한다.
// Promise{<fulfilled>: "완료"}
async function delayA() {
  return "완료";
}

let result = await delayA();

async function 라면끓이기() {
  try {
    await delayP(1500); // 1.5초 후에! 시작된다.
    console.log("물넣기");
    console.log("스프넣기");
    console.log("면넣기");
    console.log("계란넣기");
    console.log("그릇에담기");
  } catch (err) {
    console.log(err);
  }

  console.log(result);
}
