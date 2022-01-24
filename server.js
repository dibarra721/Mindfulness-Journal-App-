const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
var cors = require('cors')
const port = process.env.PORT || 9000;
// ... other imports
const path = require("path")
app.use(express.static(path.join(__dirname, "client", "build")))



// middleweare for every request
app.use(express.json())
app.use(morgan('dev')) 
app.use(cors())


// connect to DB
// mongoose.connect('mongodb://localhost:27017/journalsdb'),
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true },

//     () => console.log("connected to  journal database")
//     )

mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    () => console.log("Connected to the DB")
  );


// routes
app.use("/journals", require("./routes/journalRouter.js"))

// error handler
app.use((err,req, res, next) => {
console.log(err)
return res.send({errMsg : err.message})
})

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Server Listen 1st argument is port, second is the callback function

app.port(9000, ()=> {
    console.log("the server is running on Port 9000")
    })