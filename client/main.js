/* global gsap */

import {
  tiger,
  getNode as $, // $로 대체 가능!!
  renderUserCard,
  delayP,
  renderSpinner,
  renderEmptyCard,
  attr,
} from "./lib/index.js";
import { insertLast } from "./lib/dom/insert.js";
import { changeColor } from "./lib/utils/theme.js";

/* xhrData.get({
  url: "https://jsonplaceholder.typicode.com/users/1",
  onSuccess: (result) => {
    insertLast("body", JSON.stringify(result));
  },
  onFail: (err) => {
    insertLast("body", "데이터 로딩에 실패!!!!");
  },
}); */

/* xhrPromise
  .get("www.naver.com") // promise 그래서 뒤에 then 가능
  .then((res) => {
    insertLast(document.body.JSON.stringify(res));
  })
  .catch((err) => {
    err;
  }); */

/* -------------------------------------------------------------------------- */
/*                                    1.19일                                   */
/* -------------------------------------------------------------------------- */

// rendingUserList
// ajax get user List

// 유저 카드 생성
// 생성된 카드로 렌더링

// userList.js 로 간다.
// renderUserCard 함수 만들기
// 만들어진 함수 안에 createUserCard를 던지고
// renderUserCard 함수를 사용했을때 렌더링이 잘 되도록

const userCardContainer = $(".user-card-inner");
// await(then의 기능)을 쓰려면 함수 앞에 async를 써야한다.
async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);

    // 로딩스피너를 잡고 제거해준다 2초후
    $(".loadingSpinner").remove();

    let response = await tiger.get("http://localhost:3000/users");
    let userData = response.data;

    userData.forEach((data) => {
      renderUserCard(userCardContainer, data); // 객체 하나만 받아서 렌더링
    });

    // userList에 함수로 만들었음
    //insertLast(userCardContainer, createUserCard(userData));

    // toArray : 배열로 만들어준다.
    console.log(gsap.utils.toArray(".user-card"));
    changeColor(".user-card");
    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2, // 시차를 두다.
    });
  } catch (err) {
    // 실패하면 에러처리!
    //console.log(err);
    // 에러는 터지는게 놔두는게 아니라 잡아줘야한다.
    renderEmptyCard(userCardContainer);
  }
}
rendingUserList();

// 삭제 버튼에다 걸면 이벤트 10개 씩 다 걸어줘야함
// 핸들러에는 async 잘 붙이지 않음. 안에 then을 쓰는게 더 읽기 편하다.
function handler(e) {
  let deleteButton = e.target.closest("button");
  // 버튼 클릭시 아티클만 수집하도록!! 하는 코드
  let article = e.target.closest("article");

  // 버튼이 아니면 실행안함. 이거나 누른 대상의 인접한 대상이 아티클 아니면 실행 안함
  if (!deleteButton || !article) return;

  // 아이디 값만 받도록 slice해주기
  let id = attr(article, "data-index").slice(5);

  // await tiger.~ 써도됨 then빼고..
  // 데이터 지우고나서 then ~ 이용해 내용을 비워주자.
  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = "";
    rendingUserList();
  });
}
userCardContainer.addEventListener("click", handler);
