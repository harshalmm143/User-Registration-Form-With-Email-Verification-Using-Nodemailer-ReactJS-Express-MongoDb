const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors =require("cors")
const server = express()

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())

mongoose.connect('mongodb://localhost:27017/Taskapi', {
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});


require("./src/UserRouting")(server)
server.listen(5000, () => {
    console.log("server started")
})