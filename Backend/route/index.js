const express = require ("express")
const route = express.Router()
const Auth = require('./api')

let api = process.env.SECURE_API 
route.use(api,Auth)
// route.use('/api/v1',(req,res)=>{res.send("api not found")})


module.exports = route