//express모듈을 로딩한다.
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

//라우팅 설정
app.get('/', function (req, res) {
  res.send('hello express');
});

app.get('/emp', function (req, res) {
  res.render('index.ejs');
});

app.get('/emp/:id', function (req, res) {
  let id = req.params.id;
  const result = {
    id: id,
    name: 'haha',
  };
  res.render('emp.ejs', result);
});

//서버 기동
app.listen(8888, function () {
  console.log('ready');
});
