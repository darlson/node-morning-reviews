const express = require('express')
const app = express()

const SERVER_PORT = 3456

const userCtrl = require('./userController')

app.use(express.json())

app.get('/api/users', userCtrl.getUsers)
app.get('/api/users/:user_id', userCtrl.getUser)


app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))
