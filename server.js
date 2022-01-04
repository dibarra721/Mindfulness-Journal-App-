const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
var cors = require('cors')



// middleweare for every request
app.use(express.json())
app.use(morgan('dev')) 
app.use(cors())


// connect to DB
mongoose.connect('mongodb://localhost:27017/journalsdb',
    () => console.log("connected to  journal database")
    )

// routes
app.use("/journals", require("./routes/journalRouter.js"))

// error handler
app.use((err,req, res, next) => {
console.log(err)
return res.send({errMsg : err.message})
})



// Server Listen 1st argument is port, second is the callback function

app.listen(9000, ()=> {
    console.log("the server is running on Port 9000")
    })