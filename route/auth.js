var express = require('express');
var router = express.Router();

router.post('/', (req,res)=>{
  var new_user = req.body;
  Users.findOne({name: req.body.name, passwd: req.body.passwd}, (err, member)=>{
    if(err);
    if(member === null){
      new_user = new Users(new_user);
      new_user.save(function(err, result){
          if(err) return res.status(500).send("데이터베이스 에러!!!");
          if(result){
          console.log("ID : " + req.body.name + "\nPW : " + req.body.passwd);
          return res.status(200).json(new_user);
        }
      });
    }
    else{
      res.send('A');
    }
  });
})

module.exports = router;
