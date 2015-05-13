var express = require("express");
var authorize = require("../middleware/middleware").authorize;
var Thing = require("../models/models").Thing;

var thingsRouter = express.Router();

thingsRouter.get("/", function(req, res){
  Things.find({}).sort("name").exec(function(err, thing){
    res.send(things);
  });
});

thingsRouter.get("/:id", function(req, res){
  Thing.findById(req.params.id).exec(function(err, thing){
    res.send(thing);
  });
});

thingsRouter.delete("/:id/:token", authorize, function(req, res){
  Thing.remove({_id: req.params.id}).exec(function(){
    res.send({deleted: true});
  });
});

thingsRouter.post("/:token", authorize, function(req, res){
 Thing.create(req.body, function(err, thing){
    if(err){
      res.status(500).send(err);
    }
    else{
      res.send(pthing);
    }
  });
});

thingsRouter.post("/:id/:token", authorize, function(req, res){
  Thing.update({ _id: req.params.id } , { name: req.body.name, color: req.body.color }, function(err, result){
    if(err){
      res.status(500).send(err);
    }
    else{
      res.send(result);
    }
  });
});


module.exports = thingsRouter;
