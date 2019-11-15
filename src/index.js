const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const myUser = {
  email: "santiagoalarcon@gmail.com",
  password: "123456"
}

const app =express()
app.use(bodyparser.json())
app.use(cors())

app.get("/", (req, res) =>{
  console.log(req.body);
  res.status(200).send("server working")
})

app.post("/login", (req, res) => {
  if(!req.body.email) {
    return res.status(400).send({
      success: false,
      message: "Email is required",
    })
  }
  if(!req.body.password) {
    return res.status(400).send({
      success: false,
      message: "Password is required",
    })
  }

  //modficacion para mostrar si el error es el user o el password
  //no aplicable en produccion

      if( req.body.email !== myUser.email  )
      {
        return res.status(401).send ({
          success: false,
          message: "User not exist",
        })
      }

        if( req.body.password !== myUser.password    )
        {
        return res.status(401).send ({
          success: false,
          message: "wrong password  ",
        })
      }




  /*if( req.body.email !== myUser.email  || req.body.password !== myUser.password  )
  {
    return res.status(401).send ({
      success: false,
      message: "User not exist",
    })
  }*/




  return res.status(200).send({
    success: true,
    message: "User logged successfully",
    user: myUser,
  })
})


app.listen(4000, () =>{
  console.log("Server working on localhost")
})
