const express = require ("express")
const route = express.Router()


route.get('/login',(req,res)=>{
res.send({success:'login is success'});



})


module.exports = route 