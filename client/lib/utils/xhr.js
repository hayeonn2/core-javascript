/* readyState
0: uninitalized
1: loading
2: loaded
3:interative
4:complete
 */

// xhrData 함수 만들기 method, url
//function xhrData(method, url, body) { 1번
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
