export function copy(text) {
  // 프로미스 반환 (리턴시키는 것)
  return navigator.clipboard.writeText(text);
}
