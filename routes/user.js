const { response } = require('express');
const express= require('express');
const router = express.Router();
const Log = require('../auth/auth.controller');
const users = require('../models/userModel');


  router.post('/register', Log.createUser);
  router.post('/login', Log.loginUser);
  //ALL
  router.get('/',async(req,res)=>{
    res.send(usersData= await users.find())
    
  })
  //ONE
  router.get('/:id',async(req,res)=>{
    userData= await users.find({"_id":req.params.id})
    res.send(userData[0])
  })
  
  //POST
  router.post('/', Log.createUser);

  //PUT
  router.put('/:id',async(req,res)=>{
    var response= await users.update(
      {"_id":req.params.id},
      {"first_name":req.body.first_name,
        "last_name":req.body.last_name,
        "user_type":req.body.user_type,
        "email":req.body.email}
    )

    res.send(response)
  })

  router.delete('/:id',async(req,res)=>{
    var response= await users.deleteOne(
      {"_id":req.params.id}
    )
    res.send(response)
  })

module.exports = router;














