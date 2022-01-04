const express = require("express");
const journalRouter = express.Router();
const Journal = require("../models/journal.js");



// get all Journal entries 

journalRouter.get("/", (req, res, next) => {
    Journal.find((err, journals) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(journals)
    })
})

// post one
journalRouter.post("/", (req, res, next) => {
    const newJournal = new Journal(req.body)
        newJournal.save((err, savedJournal) => {
            if(err){
                 res.status(500)
                return next(err)
            }
            return res.status(201).send(savedJournal)
        })
})


// get one

journalRouter.get("/:journalId", (req, res, next) => {
    Journal.find({_id: req.params.journalId}, (err, journal) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(journal)
    })
})

// edit journal

journalRouter.put("/:journalId", (req, res, next) => {
    Journal.findOneAndUpdate(
        { _id : req.params.journalId},
        req.body,
        {new: true},
        (err, updatedJournal) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedJournal)
        }
    )
})


//  delete a journal entry
journalRouter.delete("/:journalId", (req, res, next) => {
    Journal.findOneAndDelete(
        { _id: req.params.journalId},
        (err, deletedJournal) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted item ${deletedJournal.date} from the database`)
        })
})

// filter by movement

journalRouter.get("/search/movement", (req, res, next) => {
    Journal.find({ movement: req.query.movement}, (err, journals) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(journals)
    })
   })


//    filter by meditation 
journalRouter.get("/search/meditation", (req, res, next) => {
    Journal.find({ meditation: req.query.meditation}, (err, journals) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(journals)
    })
   })





module.exports = journalRouter