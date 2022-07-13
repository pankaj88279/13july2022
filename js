const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/name', function (req, res) {
    res.send('pankaj rathore')
  })
  app. post('/adress', function (req,res){
    res. send ('javi')
  })

app.listen(7000)