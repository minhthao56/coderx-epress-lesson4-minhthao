// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
var listtodo = [
      {id: 0, work: 'Đi chợ' },
      {id: 1, work: 'Nấu cơm' },
      {id: 2, work: 'Rứa chén' },
      {id: 3, work: 'Học tại CoderX' },
    ];

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.render('index',{name:'Minh Thao'});
});


app.get('/todos', (request, response) => {
  response.render('todos/index',{
    todos: listtodo
  });
});


// app.get ('/todos', function(request, response){
//   var q = request.query.q;
//   var filterlisttodo = listtodo.filter(function(todo){
//     var lowercase = todo.work.toLowerCase();
//     return lowercase.indexOf(q) !==-1;
//   });
//   response.render('todos/index',{
//     todos: filterlisttodo
//   });
// });

app.get('/todos/create', function(request, response){
  response.render('create/index')
})
app.post('/todos/create', function(request, response){
  listtodo.push(request.body)
  response.redirect('/todos')
})




// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
