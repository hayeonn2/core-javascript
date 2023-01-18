const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-refere",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const jason = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  let response = await fetch(url, restOptions);
  /*   response.then((res) => {
    console.log(res);
  }) */

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

json.get = (url, body, options) => {
  json({
    method: "POST",
    url,
    ...options,
  });
};

// fetch가 프로미스를 내뱉는다. 어웨잇으로뽑아준것 리절트 값을...
// 실행흐름 한번 막고 값을 리스폰스에 담아준다..
