console.log('\n\n======= e_snail-row-col =======\n\n');
console.log('자연수 row, col 이 주어지면, row * col 크기의 달팽이 모양의 행렬을 출력하는 프로그램을 작성해주세요.');

// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
// Internet Explorer 6-11
let isIE = false;
if (typeof window !== 'undefined') {
  isIE = /*@cc_on!@*/false || !!document.documentMode;
}

function createSnailArray(row, col) {
  const x = { start: 0, end: row - 1, cur: 0 };
  const y = { start: 0, end: col - 1, cur: 0 };
  let direction = 'y';
  let movement = 1;
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
  const snailArray = isIE ?
    Array.apply(null, Array(row)).map(() => Array(col)) :
    Array.from({length: row}, () => Array(col).fill(0));
  for (let i = 0; i < row * col; i++) {
    snailArray[x.cur][y.cur] = i + 1;
    if (direction === 'y') {
      y.cur += movement;
      if (movement > 0 && y.end === y.cur) {
        direction = 'x';
        x.start += movement;
      } else if (movement < 0 && y.start === y.cur) {
        direction = 'x';
        x.end += movement;
      }
    } else {
      x.cur += movement;
      if (movement > 0 && x.end === x.cur) {
        direction = 'y';
        movement = -1;
        y.end += movement;
      } else if (movement < 0 && x.start === x.cur) {
        direction = 'y';
        movement = 1;
        y.start += movement;
      }
    }
  }
  return snailArray;
}

(function () {
  if (isIE) {
    console.log(createSnailArray(10, 7))
  } else {
    // https://developer.mozilla.org/en-US/docs/Web/API/Console/table
    console.table(createSnailArray(10, 7));
  }
})();

console.log('\n//======= end of problem =======');
