const express = require ("express")
const route = express.Router()


route.get('/registration',(req,res)=>{
res.send({success:'registration is success'});



})


module.exports = route 