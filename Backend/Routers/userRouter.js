const express = require('express');
const router = express.Router();
const Model=  require('../Models/Usermodel')

router.post('/add', (req, res) => {
    console.log(req.body)
    new Model(req.body).save()
    .then((result) => {
       res.json(result) 
    }).catch((err) => {
        res.status(500).json(err)
    });
});

router.put("/update/:id", (req,res) => {
    Model.findByIdAndUpdate(req.params.id, req.body,{new:true})             //new:true is for data update
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
    })

router.post("/authenticate" ,(req, res) => {
    console.log(req.body);
    Model.findOne({})
    .then((result) => {
        if(result){
            res.json(result)
        }else{
            res.status(401).json({message:"invalide credential"})
        }
    }).catch((err) => {
        res.status(500).json(err)
    });
});

router.get("/getall", (req, res) => {
    Model.find({}) //empty brackets will give all the data from the database
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      console.error(err)
      res.status(500).json(err)
    });
  });
  
module.exports = router;