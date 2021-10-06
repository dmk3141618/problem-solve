console.log('\n\n======= h_2array10-inter-union =======\n\n');
console.log('정렬된 2개의 배열을 합집합/교집합 시키는 함수를 작성해주세요. 2개의 배열의 길이는 10으로 고정되어 있습니다. (정렬하는 코드 없이 작성해주세요.)');

function intersectionOfTwoArrays(arrA, arrB) {
  return arrA.filter(item => arrB.includes(item));
}

function unionOfTwoArrays(arrA, arrB) {
  return [...new Set([...arrA, ...arrB])];
}

function unionOfTwoArraysWithoutSet(arrA, arrB) {
  const output = [...arrA];
  arrB.forEach(item => {
    if (!arrA.includes(item)) {
      output.push(item);
    }
  });
  return output;
}

(function () {
  const arrA = [1, 2, 3, 4, 5, 'A', 'B', 'C', 'D', 'E'];
  const arrB = [2, 4, 7, 9, 11, 'A', 'C', 'K', 'X', 'Z'];
  console.log('intersectionOfTwoArray([' + arrA + '], [' + arrB + '])', intersectionOfTwoArrays(arrA, arrB));
  console.log('unionOfTwoArray([' + arrA + '], [' + arrB + '])', unionOfTwoArrays(arrA, arrB));
  console.log('unionOfTwoArray([' + arrA + '], [' + arrB + '])', unionOfTwoArraysWithoutSet(arrA, arrB));
})();

console.log('\n//======= end of problem =======');
