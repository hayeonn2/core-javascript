import { insertLast, xhrData, xhrPromise } from "./lib/index.js";

/* xhrData.get({
  url: "https://jsonplaceholder.typicode.com/users/1",
  onSuccess: (result) => {
    insertLast("body", JSON.stringify(result));
  },
  onFail: (err) => {
    insertLast("body", "데이터 로딩에 실패!!!!");
  },
}); */

xhrPromise
  .get("www.naver.com") // promise 그래서 뒤에 then 가능
  .then((res) => {
    insertLast(document.body.JSON.stringify(res));
  })
  .catch((err) => {
    err;
  });
