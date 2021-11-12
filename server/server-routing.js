const express = require('express');

const router = express.Router();

// Database Connection
// const sequelize = require('sequelize');
const db = require("../database/connection");

router.get("/demo", (req, res)=>{
    try{
        // sequelize.Employee.findAll().then(obj => {
        //     console.log(obj + "*****************");
        // })
        db.query("SELECT * FROM employee").then((myTableRows) => {
            console.log(myTableRows[0])
          })

        res.send({'status': 200, 'message': "It's working...!"});

    }catch(error){
        res.send({'status': 500, 'message': error.message});
    }
    
})

router.post("/add", async (req, res) => {
    const {first, last} = req.body
    try{
        var v = await db.query(`Insert into employee(firstName, lastName) values('${first}', '${last}');`)
        res.send({status: 200, message: "Added to database"})
    }catch(error){
        res.send({"status": error.status, "message": error.message});
    }
})

router.get("**",(req,res)=>{
   res.send("Not a correct path")
})

module.exports = router;
