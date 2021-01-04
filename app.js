const express = require('express')
const app = express()
const router = require('./routes/routes')

const port = 3000

//ejs
app.set('view engine', 'ejs')

//body parser - middle ware
app.use(express.urlencoded({extended:true}))

//endpoint
app.use('/', router)

app.listen(port, () => {
  console.log(`Listening at`, port);
}) 