/* -- readyState
0: uninitalized
1: loading
2: loaded
3:interative
4:complete
 */

// xhrData 함수 만들기 method, url
//function xhrData(method, url, body) { 1번
// 콜백 방식
export function xhrData(
  /*options*/ {
    url = "",
    method = "GET",
    body = null,
    onSuccess = null,
    onFail = null,
    headers = {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }
) {
  // 2번 객체 하나로 인수를 받아주는 것
  // options를  {url, method, body}로 받아올 수 있다. 초기값 설정가능
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  //xhr.open(method, url); 1번
  xhr.open(/*options.method, options.url*/ method, url);

  // 헤더 설정 가능 (내장함수 setRequestHeader)
  // Object.entries : 객체 정보를 배열로 만들고 키와 밸류로 반환 시킨다.
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  // 객체 구조 분해 할당

  // 에러를 체크하기 위해 쓴 것 (데이터를 보내고 가져왔는지 확인하기 위해서)
  // 제대로 가져왔는지 확인하는거지
  // xhr은 객체다. 매번쓰기 귀찮으니 구조분해 할당으로 넣어주고 부름
  // 원래있는 프로퍼티 이름으로 변수를 받아줘야함 (객체는 순서 상관없다 이름이중요!)
  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr;
    // console.log(xhr.readyState);
    if (status >= 200 && status < 400) {
      // 통신 3번 호출 2,3,4 체인지가 일어나 3번실행됨
      if (readyState === 4) {
        // 로딩, 인터렉티브 단계 건너뛰고 마지막 단계(complete)만 확인하기 위해
        console.log("통신 성공");

        onSuccess(JSON.parse(response));
        //console.log(typeof xhr.response); // 문자형으로 나온다.
        console.log(JSON.parse(response)); //찐 데이터!! (parse로 객체화시켜줌!)
      }
    } else {
      // xhr.open 주소를 틀리게 쓰면 통신 실패!
      //console.error("통신 실패");
      onFail("통신실패");
    }
  });
  // 서버에 요청 (위에거랑 세트임 - 비동기 통신 오픈이랑)
  // 객체로 바로 보내는 것은 서버가 받지 못한다.
  // 제이슨 데이터가 넘어갈때 문자화를 시켜줘야한다.
  // 데이터를 다시 받아올땐 객체화 시킨다.
  //xhr.send(JSON.stringify(body)); // 문자화시킴 (1번 - body)
  xhr.send(JSON.stringify(body)); // 2번
}

// xhrData("GET", "https://jsonplaceholder.typicode.com/users");
//console.log(xhr);

// 순서 상관없이 받아올 수 있다. 2번 (인수를 !!하나!! 던짐)
// .xhrData 함수에 순서 상관없이 객체로 때려넣고 싶어서
xhrData({
  url: "https://jsonplaceholder.typicode.com/users",
  //method: "GET", 위에 초기값 세팅해놔서 없어도 됨
  //body: null,
  /* headers: {
    "Content-Type": "application/json",
  }, */
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.error(err);
  },
});

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    url,
    onSuccess,
    onFail,
  });
};

xhrData.delete(
  "https://jsonplaceholder.typicode.com/users/3",
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);

xhrData.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    name: "MESSI",
    username: "GOAT",
    email: "goat@messi.psg",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);

console.dir(xhrData);

// 새롭게 생성한 것 (post = create) 1번
// create는 새로운 객체를 만들어서 서버로 보낸다고 생각하면 쉽습니다 ㅎㅎ
/* xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "MESSI",
  username: "GOAT",
  email: "goat@messi.psg",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
});
 */

// promise API

const defaultOptions = {
  url: "",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: null,
};

export function xhrPromise(options = {}) {
  // 생성
  const xhr = new XMLHttpRequest();

  const { method, url, body, headers } = Object.assign(
    {},
    defaultOptions,
    options
  );

  if (!url) TypeError("서버와 통신할 url인자는 반드시 필요");

  xhr.open(method, url);
  // 리턴(함수종료) 때문에 샌드까지 도달을 못해서 위로 올려줌 (리턴 위로)
  // 바디 있으면 스트링파이, 없으면 null (기본값이 null이긴 함)
  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    // 성공과 실패를 제공해준다.
    // 익스큐터 실행자
    xhr.addEventListener("readystatechange", () => {
      //실행자 안에 이벤트걸기 (readyState가 바뀌면 발생되는 이벤트)
      const { status, readyState, response } = xhr; // 구조분해할당으로 가져오기

      if (status >= 200 && status < 400) {
        // 상태가 200보다크거나 400보다 작으면 에러가 아니다
        if (readyState === 4) {
          // 완료가 된 시점이 필요하니까 값이 4일때 성공을 찍어주세요
          //console.log("성공");
          // 객체화
          // 리졸브에 객체화된 값을 던져~~!야 밑에 then쓸때 출력이 가능하다 파싱이 된 대상이 res에 담김
          // delay에 data를 담았던 것과 같이 생각하자.
          resolve(JSON.parse(response));
        } else {
          // 그렇지않으면 에러
          //console.log("실패");
          reject("err");
        }
      }
    });
  });
}

/* xhrPromise({ url: "https://jsonplaceholder.typicode.com/users/1" })
  .then((res) => {
    //비동기 통신으로 성공된 값 가져오기 (리졸브로 받은 값을 가져온다 > JSON.parse(response))
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

// 얘 자체가 내뱉는 값이 프로미스여야 then을 쓸 수 있다.
xhrPromise.get = (url) => {
  // 프로미스객체가 튀어나와야 한다.
  return xhrPromise({ url });
};

xhrPromise.post = (url, body) => {
  // 프로미스객체가 튀어나와야 한다.
  return xhrPromise({ url, body, method: "POST" });
};

xhrPromise.put = (url) => {
  // 프로미스객체가 튀어나와야 한다.
  return xhrPromise({ url, body, method: "PUT" });
};

xhrPromise.delete = (url) => {
  // 프로미스객체가 튀어나와야 한다.
  return xhrPromise({ url, method: "DLELTE" });
};

xhrPromise
  .get("www.naver.com") // promise 그래서 뒤에 then 가능
  .then((res) => {
    res;
  })
  .catch((err) => {
    err;
  });
