const fn = () => {
  console.log('반환값이 없는 함수');
};

const fn2 = () => 10;

const fn3 = (value) => value * 2;

const fn4 = (...value) => Math.max(...value);

const fn5 = (first, second = 10) => first + second;
