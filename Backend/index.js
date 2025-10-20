require('dotenv').config()
const express = require('express')
const app = express()
const route  = require('./route')
const port = 3000
app.use(route)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 