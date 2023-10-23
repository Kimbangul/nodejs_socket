let answer = [];

for (let x = 0; x < 10; x++) {
  const y = 10 - 2 * x;

  if (y >= 0 && y <= 10) {
    answer.push({ x: x, y: y });
  }
}

console.log(answer);
answer.forEach((el) => {
  console.log(`x가 ${el.x} 일 때, y는 ${el.y}`);
});
