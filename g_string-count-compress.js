console.log('\n\n======= g_string-count-compress =======\n\n');
console.log('문자열을 ZZZAAAABBCCQ => 3Z4A2B2C1Q 같은 방식으로 압축하는 코드를 작성해주세요.');
console.log('압축된 문자열을 3Z4A2B2C1Q => ZZZAAAABBCCQ 같은 방식으로 해제하는 코드를 작성해주세요.');

function compressStringWithCharCount(str) {
  let output = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i+1]) {
      output += count + str[i];
      count = 0;
    }
  }
  return output;
}

function decompressCharCountString(str) {
  let output = '';
  const characters = str.match(/[a-zA-Z]+/g);
  const counts = str.match(/[0-9]+/g);
  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < parseInt(counts[i]); j++) {
      output += characters[i];
    }
  }
  return output;
}

(function () {
  const strOrigin = 'ZZZAAAABBCCQ';
  const strCompressed = compressStringWithCharCount(strOrigin);
  console.log(strOrigin + ' => ', strCompressed);
  const strDecompressed = decompressCharCountString(strCompressed);
  console.log(strCompressed + ' => ' + strDecompressed);
  console.log('strOrigin === strDecompressed ? ', strOrigin === strDecompressed);
})();

console.log('\n//======= end of problem =======');
