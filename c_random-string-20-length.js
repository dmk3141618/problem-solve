console.log('\n\n======= c_random-string-20-length =======\n\n');
console.log('길이가 20인 문자열을 랜덤하게 생성하는 코드를 작성하세요.');
console.log('문자는 A, B, C, D, E, F 만 사용합니다.');
console.log('각 문자의 발생확률은 A(5%), B(5%), C(20%), D(20%), E(25%), F(25%)');

function getRandomString20Length() {

  function pickCharacter() {
    const candidates = [
      {
        character: 'A',
        probability: 5,
      },
      {
        character: 'B',
        probability: 5,
      },
      {
        character: 'C',
        probability: 20,
      },
      {
        character: 'D',
        probability: 20,
      },
      {
        character: 'E',
        probability: 25,
      },
      {
        character: 'F',
        probability: 25,
      }
    ];
    const rand = Math.floor(Math.random() * 100);
    let probabilitySum = 0;
    let result = '*';
    // forEach 는 break 가 없다. for of 는 es6 구문. for in 은 object 용.
    for (let i = 0; i < candidates.length; i++) {
      probabilitySum = probabilitySum + candidates[i].probability;
      if (rand < probabilitySum) {
        result = candidates[i].character;
        break;
      }
    }
    return result;
  }

  const str = '********************';
  const strArr = str.split('');
  return strArr.map(() => pickCharacter()).join('');

}

(function () {
  for (let i = 0; i < 10; i++) {
    console.log(getRandomString20Length());
  }
})();

console.log('\n//======= end of problem =======');
