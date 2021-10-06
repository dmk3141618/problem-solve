console.log('\n\n======= i_hello-3hel-5low =======\n\n');
console.log('1 ~ 100까지의 숫자를 출력하되, 3의 배수들은 “안녕”, 5의 배수들은 “하세요”, \n3과 5의 배수들은 “안녕하세요”를 출력하고 그 외는 그냥 숫자를 출력하는 코드를 작성해주세요.');

function logHello() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('안녕하세요');
    } else if (i % 3 === 0) {
      console.log('안녕');
    } else if (i % 5 === 0) {
      console.log('하세요');
    } else {
      console.log(i);
    }
  }
}

(function () {
  logHello();
})();

console.log('\n//======= end of problem =======');
