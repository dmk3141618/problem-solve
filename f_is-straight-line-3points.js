console.log('\n\n======= f_is-straight-line-3points =======\n\n');
console.log('세 점이 주어지면, 직선상에 있는지 확인하는 코드를 작성해주세요.');
console.log('isStraightLine(int x1, int y1, int x2, int y2, int x3, int y3)');

function isStraightLine(x1, y1, x2, y2, x3, y3) {
  return (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) === 0;
}

(function () {
  console.log('{1, 1} / {1, 1} / {4, 5}: ', isStraightLine(1, 1, 1, 1, 4, 5));
  console.log('{1, 1} / {1, 1} / {1, 1}: ', isStraightLine(1, 1, 1, 1, 1, 1));
  console.log('{1, 1} / {2, 2} / {3, 3}: ', isStraightLine(1, 1, 2, 2, 3, 3));
  console.log('{1, 1} / {2, 1} / {4, 5}: ', isStraightLine(1, 1, 2, 1, 4, 5));
  console.log('{1, 1} / {3, 3} / {2, 2}: ', isStraightLine(1, 1, 3, 3, 2, 2));
  console.log('{1, 1} / {2, 3} / {3, 5}: ', isStraightLine(1, 1, 2, 3, 3, 5));
  console.log('{1, 1} / {2, 3} / {3, 6}: ', isStraightLine(1, 1, 2, 3, 3, 6));
})();

console.log('\n//======= end of problem =======');
