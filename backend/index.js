require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.BACKEND_PORT || 8082

app.use(cors())
app.use(bodyParser.json())

app.post('/api/login', function (req, res) {
  const { password } = req.body
  if (password === 'Totvs@123') {
    res.send({ logged: true })
  } else {
    res.status(500).send({ error: 'Dados do login incorreto' })
  }
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
