export function isNumericString(data) {
  data = Number(data); // 숫자로 바꾸고
  return !isNaN(data); // 데이터 체크 (숫자일때 false, 문자가 같이있으면 true)
}
