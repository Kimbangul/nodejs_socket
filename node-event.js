const handler = () => {
  console.log('handler exit');
};

// process.on('exit', () => {
//   console.log('exit');
// });

process.on('exit', handler);
process.emit('exit'); // 이벤트 강제 발생
console.log('end of program');
