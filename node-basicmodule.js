const os = require('os');
// const querystring = require('querystring');

console.log(os.hostname());

const crypto = require('crypto');
let key = 'only my key';
let password = 'haha';

//  해시 생성 테스트
const temp = crypto.createHash('sha1');
temp.update(password);
const result = temp.digest('hex');
console.log(result);

const fs = require('fs');
const printFile = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('done, data =' + data);
};
const txt = fs.readFile('./test.txt', 'utf-8', printFile);
console.log(txt);
