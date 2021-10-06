console.log('\n\n======= b_two-power =======\n\n');
console.log('2의 n승을 구하는 함수를 작성해주세요. 반복문/재귀함수/라이브러리를 사용하지말고 작성해주세요.');

// 0b1 (binary) , 0o1 (octal) , 1 (decimal) , 0x1 (hexadecimal)

function twoPower(n) {
  if (typeof n !== 'number' || n < 0 || n > 30) {
    return -1;
  }
  return 0b1 << n
}

(function () {
  console.log('2^0: ', twoPower(0));
  console.log('2^1: ', twoPower(1));
  console.log('2^2: ', twoPower(2));
  console.log('2^10: ', twoPower(10));
  console.log('2^20: ', twoPower(20));
  console.log('2^30: ', twoPower(30));
  console.log('2^31: ', twoPower(31));
  console.log('2^32: ', twoPower(32));
  console.log('2^33: ', twoPower(33));
  console.log('2^100: ', twoPower(100));
  console.log('2^-1: ', twoPower(-1));
  console.log('2^-5: ', twoPower(-5));
  console.log('2^-100: ', twoPower(-100));
})();


console.log('\n//======= end of problem =======');
