const mongoose = require("mongoose")
const Schema = mongoose.Schema

// journal blueprint

const journalSchema = new Schema({

        date:{
            type:Date,
            required: true
        },

        meditation:{
            type:String,
            enum: ['Yes', 'No'],
            required:true

        },
        movement:{
            type:String,
            enum: ['Yes', 'No'],
            required:true
        },
        feeling:{
            type:String,
            required:true
        },
        note:{
            type:String,
            required:true
        }
    





})



module.exports = mongoose.model("Journal", journalSchema)