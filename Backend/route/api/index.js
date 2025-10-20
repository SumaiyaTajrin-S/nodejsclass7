const express = require ("express")
const route = express.Router()
const Registration = require('./registration')
const Login = require('./login')


route.use('/authentication',Registration)
route.use('/authentication',Login)


module.exports = route