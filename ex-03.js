// 임의의 숫자 생성
const getRandomNumber = () => {
  let randomNumber = [];

  while (randomNumber.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    randomNumber.push(num);
  }
  return randomNumber;
};

// 생성한 수 출력
const printNumber = (num) => {
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
};

const randomNumber = getRandomNumber();
printNumber(randomNumber);
