var express = require('express');
var router = express.Router();
router.post('/',(req,res)=>{
  var new_String = req.body;
  new_String = new Stars(new_String);
  new_String.save(function(err, result){
    if(err);
    if(result){
      console.log("new Star!\n" + new_String);
      return res.status(200).json(new_String);
    }
  });
});

router.post('/find', (req,res)=>{
  Stars.findOne({x: req.body.x, y:req.body.y}, (err,member)=>{
    if(err);
    if(member !== null)
      res.status(200).send(member.twit);
  });
});


module.exports = router;
