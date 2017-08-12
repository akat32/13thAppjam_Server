var express = require('express');
var router = express.Router();

router.post('/', (req,res)=>{
  Users.findOne({name: req.body.name, passwd: req.body.passwd}, (err, user)=>{
  if(err) res.status(500).send("DB ERR");
  if(user){
    res.status(200).send(user);
    Users.update({name:req.body.name}, {$set:{"isLogined": true}}, function(err, result) {
      if(err);
      if(result) console.log(user);
    });
  }
  else res.status(404).send("user not fond");
  })
});

module.exports = router;
