/* -------------------------------------------------------------------------- */
/* 클로저(Closures)                                                             */
/* -------------------------------------------------------------------------- */

// 클로저 (closure) 란?
// - JavaScript의 매우 강력한 특성으로 독립적인 변수를 참조하는 함수를 말합니다.
//   즉, 클로저에 정의된 함수는 그것이 작성된 환경을 '기억'합니다.

function first() {
  let x = 10;

  function second() {
    let y = 30;

    // 밖에있는 변수를 늘 가져올 수 있는 여지가 생긴다.
    return x + y;
  }
  // (실행하지않고) 함수 자체를 내보낸다. (함수 전체가 리턴된다.)
  // 자바스크립트는 함수 = 값으로 인식한다.
  // first()()로 하면 second()까지 실행된다. (커링함수)
  return second;
}

// return second()를 안하는 이유 :
// 함수가 내뱉은 값만 나온다. 우린 함수 자체를 사용하고 싶은것!! (타이거의 정보를 알고 싶은 것..)

// 클로저
// 포장지를 까지 않은 초콜렛을 주고 너가 까먹어라~
// value가 함수처럼 실행되는 이유 : first()가 함수 자체이기때문에 first()() => value()가 되는 것.
const value = first();

/* 2번째 예시 */
// 일반함수 : 누구나 다 접근할 수 있게 된다.
// 전역 변수
//let count = 0; // 전역 자체가 오염된다.

// 클로저를 사용하는 이유 : 전역의 오염을 막기위해.
function number() {
  let count = 0;

  // 가비지콜렉터가 접근하지 못하고 튀어나감.
  // 이 공간을 꽁꽁 묶어논것과 같다.(절대 못들어옴! => 폐쇄 : 클로저)
  // inner에선 count를 찾을 수 있다.
  function inner() {
    return ++count;
  }
  return inner;
}

// 복사가 됐다기보다 새로운 환경이 탄생! (렉시컬 환경) 참조는 절대아님!
// 자기만의 행성에 갖다놓는것!!! (우주에서 외계인 행성..으로 가져감)
const counter = number(); //넘버함수를 카운터에 할당한게 클로저!

// 카운트를 가져올수없다. 오염이안됨. 함수안에 count를 선언했기때문에! (일반함수처럼 선언하면 콘솔에 찍힘)
// console.log(count);

// 모든 함수에는 실행 컨텍스트가 있습니다. 실행 컨텍스트는 해당 함수 내의 변수와
// 해당 부모 환경에 대한 참조를 의미하는 환경으로 구성됩니다. 상위 환경에 대한 참조는
// 내부 함수가 작성된 범위 외부 또는 내부에서 호출되는지 여부에 관계없이 상위 범위의
// 모든 변수를 모든 내부 함수에 사용할 수 있게 합니다.
//
// 따라서 함수가 사실상 환경(해당 환경에 정의된 변수)에 대한 참조를 가지고 있기 때문에
// 함수가 이 환경(또는 영역(scope))을 "기억"하는 것처럼 보입니다!
//
// 모든 실행 컨텍스트에는 어휘 환경(Lexical Environment)이 있습니다.
// 이 어휘 환경은 식별자 바인딩(즉, 변수 및 관련 값)을 보유하고 있으며
// 외부 환경에 대한 참조도 가지고 있습니다.
//
// 각 환경이 접근 할 수 있는 일련의 식별자를 "범위(Scope)"라고 합니다.
// 이러한 범위를 "스코프 체인(Scope Chain)"을 통해 계층적 환경 체인에
// 중첩 할 수 있습니다.

// 어느 시점이든 하나의 실행 컨텍스트만 실행 될 수 있습니다.
// 이것이 JavaScript가 "단일 스레드"인 이유입니다.
//
// 즉, 한 번에 하나의 명령만 처리 할 수 있습니다. 일반적으로
// 브라우저는 "스택(Stack)"을 사용하여 이 실행 컨텍스트를 유지 관리합니다.
// 스택은 LIFO(Last In First Out) 데이터 구조입니다.

//
// 스택에 푸시(push) 한 마지막 것이 가장 먼저 꺼내집니다. 스택의
// 맨 위에 요소만 삽입하거나 삭제할 수 있기 때문입니다. 현재 또는
// "실행 중인" 실행 컨텍스트는 항상 스택의 맨 위에 있는 항목입니다.
//
// 실행 중인 실행 컨텍스트의 코드가 완전히 평가되면 최상위 항목이
// 팝(pop) 된 다음 실행 항목이 실행 컨텍스트를 실행하는 것으로
// 간주됩니다.
//
// 또한 실행 컨텍스트가 실행되고 있다고 해서 다른 실행 컨텍스트를
// 실행하기 전에 실행이 완료되어야한다는 것을 의미하지는 않습니다.
// 실행 중인 실행 컨텍스트가 일시 중단되고 다른 실행 컨텍스트가
// 실행 중인 실행 컨텍스트가되는 경우가 있습니다.
//
// 일시중단 된 실행 컨텍스트는 나중에 중단 된 부분을 선택합니다.
// 한 실행 컨텍스트가 이와 같이 다른 컨텍스트로 대체 될 때마다
// 새 실행 컨텍스트가 만들어져 스택에 푸시되고 현재 실행 컨텍스트가 됩니다.

// [ 실행 컨텍스트 N + 3  ] ⬅︎ 현재 실행 컨텍스트
// [ 실행 컨텍스트 N + 2  ]
// [ 실행 컨텍스트 N + 1  ]
// [ 실행 컨텍스트 N      ]
// [ 실행 컨텍스트        ] // 글로벌
