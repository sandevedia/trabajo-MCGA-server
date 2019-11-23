const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

const myUser = {
  email: "santiagoalarcon@gmail.com",
  password: "123456"
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

app.get('/', (req, res) => {
  console.log(req.body);
  res.status(200).send("<h1>server working</h1>")
})

app.post('/login', (req, res) => {
    if(req.body.email !== myUser.email) {
    return res.status(400).send({
      error: true,
      message: "El usuario no existe",
    })
  }
  if(req.body.password !== myUser.password) {
    return res.status(400).send({
      error: true,
      message: "Password incorrecto",
    })
  }

  return res.status(200).send({
    success: true,
    message: "User logged successfully",
    user: myUser,
  })
})


app.listen(process.env.PORT || 4000, () =>{
  console.log("Server working...")
})
