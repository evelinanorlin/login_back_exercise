var express = require('express');
var router = express.Router();

let users = [
  {id: 1, username: "Nicho", password: "fluga"},
  {id: 2, username: "Eve", password: "mygga"},
  {id: 3, username: "Ronja", password: "ben"}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {
  let newLogin = req.body;
  let loginList = [];
  let currentUser;

  for (let i = 0; i < users.length; i++){
    if(newLogin.username === users[i].username && newLogin.password === users[i].password){
      loginList = ["User and password correct"];
      currentUser = {id: users[i].id, username: users[i].username};
    }
  }

  if (loginList.length === 1){
    res.json({message: currentUser})
    console.log("logged in")
  } else{
    res.json({message: "error"})
    console.log("failed to login")
  }
});

router.get('/newuser', function(req, res, next) {
  res.json(users);
});

router.post('/newuser', function(req, res, next) {
  let newUser = req.body;
  newUser.id = users.length +1;
  users.push(newUser);
  res.json(users);
});

module.exports = router;
