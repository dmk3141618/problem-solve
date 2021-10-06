console.log('\n\n======= j_is-12345-exist =======\n\n');
console.log('N=5, {1, 2, 3, 4, 5} 가 존재하는지 확인하는 함수.');
console.log('순서는 보장안됨. {3, 2, 1, 5, 4}가 들어올수도 있음. 이것도 오케이.');
console.log('틀린경우 : {1, 12, 3, 4, 5}');

function is12345Exist(arr) {
  const countMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  arr.forEach(item => countMap[item]++);
  return Object.keys(countMap).filter(key => countMap[key]).length === 5;
}

(function () {
  const samples = [
    [3, 2, 1, 5, 4],
    [1, 12, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 1, 5],
    [1, 5, 7, 2, 4],
    [5, 4, 2, 1, 3],
    [7, 5, 3, 2, 2],
    [1, 1, 1, 1, 1],
    [1, 2, 3, 4, 1],
  ]
  samples.forEach(item => {
    console.log('[' + item + '] => ', is12345Exist(item));
  });
})();

console.log('\n//======= end of problem =======');
