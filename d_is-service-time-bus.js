console.log('\n\n======= d_is-servie-time-bus =======\n\n');
console.log('콜버스의 운행시간은 23:00 ~ 03:59 입니다. 그리고 일요일에서 월요일로 넘어가는 밤을 제외하고 매일 운행을 하고 있습니다.');
console.log('요일과 시간을 입력하면 콜버스 운행 여부를 알려주는 함수를 작성해주세요.');
console.log('boolean isServiceTime(int day, int time) // int day: 0~6 , int time: 0 ~ 23');

function isServiceTime(day, time) {
  if (typeof day !== 'number' || typeof time !== 'number') {
    return false;
  }
  if (day < 0 || day > 6) {
    return false;
  }
  if (time < 0 || time > 23) {
    return false;
  }
  if (day === 6 && time === 23) {
    return false;
  }
  if (day === 0 && time < 4) {
    return false;
  }
  return time === 23 || time < 4;
}

(function () {
  console.log('월요일, 1시: ', isServiceTime(0, 1));
  console.log('월요일, 2시: ', isServiceTime(0, 2));
  console.log('일요일, 23시: ', isServiceTime(6, 23));
  console.log('화요일, 1시: ', isServiceTime(1, 1));
  console.log('화요일, 5시: ', isServiceTime(1, 5));
  console.log('목요일, 2시: ', isServiceTime(3, 2));
  console.log('목요일, 4시: ', isServiceTime(3, 4));
  console.log('금요일, 21시: ', isServiceTime(4, 21));
  console.log('금요일, 23시: ', isServiceTime(4, 23));
})();

console.log('\n//======= end of problem =======');
