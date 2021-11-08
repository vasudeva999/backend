const express = require('express');

const router = express.Router();

// Database Connection
const sequelize = require('sequelize');

// const se

router.get("/demo", (req, res)=>{
    try{
        res.send({'status': 200, 'message': "It's working...!"});
    }catch(error){
        res.send({'status': 500, 'message': error.message});
    }
    
})

router.get("**",(req,res)=>{
   res.send("Not a correct path") 
})
module.exports = router