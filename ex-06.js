const fs = require('fs');

const printExpensive = (arr) => {
  console.log(`제일 비싼 휴대폰은 ${arr[0][0]} ${arr[0][1]} 입니다.`);
};

// 내림차순 정렬
const sortProduct = (err, text) => {
  const productArr = text.split('\n').map((el) => el.split(':'));
  const descendingArr = productArr.sort((a, b) => parseInt(b[2]) - parseInt(a[2]));
  printExpensive(descendingArr);
};

fs.readFile('./products.txt', 'utf-8', sortProduct);
