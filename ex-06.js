const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

//라우팅 설정
// / 로 요청
app.get('/', function (req, res) {
  res.send('main page');
});

// /empjson/100 으로 요청
app.get('/empjson/:id', function (req, res) {
  const id = { id: req.params.id };
  res.json(id);
});

// emppage/100 으로 요청
app.get('/emppage/:id', function (req, res) {
  let id = req.params.id;
  const result = {
    id: id,
    name: 'haha',
  };
  res.render('emp.ejs', result);
});

//  /emp?id=111&name=Hong 으로 요청
app.get('/emp', function (req, res) {
  const json = { id: req.query.id, name: req.query.name };
  res.json(json);
});

//서버 기동
app.listen(8888, function () {
  console.log('server start');
});
