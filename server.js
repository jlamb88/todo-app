const express = require("express")
const app = express()
const sequelize = require('./config/connection')
const controllers = require('./controllers')

const Model = require('./models')

const PORT = process.env.PORT || 5500;

app.use('/api', controllers)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

sequelize.sync().then( ()=>{
app.listen(PORT,() => {console.log("Server running");})
})



