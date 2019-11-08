const express = require('express')
const cors = require('cors')
const bodyparse = require('body-parser')
const app = express()

const myUser = {
	email: "santiagoalarcon2@hotmail.com",
	password: "123456789"
}

app.use(bodyparse.json())
app.use(cors())

app.get("/", (req, res) => {
	res.status(200).send("server working")
})

app.post("/login", (req, res) => {

	if(!req.body.email)
	{
			return res.status(400).send({
				success: false,
				message: "Email is required"
			})
	}

	if(!req.body.password)
	{
			return res.status(400).send({
				success: false,
				message: "Password is required"
			})
	}

	if(req.body.email !== myUser.email || req.body.password !== myUser.password)
	{
		return res.status(400).send({
				success: false,
				message: "User is not valid"
		})
	}
	
	return res.status(200).send({
				success: true,
				message: "User logged successfully",
				user: myUser
	})

})


app.listen(4000, () => {
	console.log("server working on localhost:4000")
})
