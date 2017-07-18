let express = require('express')
let api = express.Router()
let mongoose = require('mongoose')
let Submission = require("./schema/submission")

// Create
api.post('/submissions', (req, res)=> {
    let submission = new Submission({name: req.body.name})
    submission.save(function(error, result) {
        if(error) res.send(error)
        res.json({message: "POST successful", result })
    })
})

// Read all
api.get('/submissions', (req, res)=> {
    Submission.find({}).exec(function(error, submissions) {
        if(error) res.send(error)
        res.json(submissions)
    })
})

// Read by ID
api.get('/submissions/:id', (req, res)=> {
    const id = req.params.id
    Submission.findById(id).exec(function(error, submission) {
        if(error) res.send(error)
        res.json(submission)
    })
})

// Update
api.put('/submissions/:id', (req, res)=> {
    const id = req.params.id
    Submission.findById(id).exec(function(error, submission) {
        if(error) res.send(error)
        submission.name = req.body.name;
        submission.save(function(error, result) {
            if(error) res.send(error)
            res.json({ message: "PUT successful", result})
        })
    })
})

// Delete by ID
api.delete('/submissions/:id', (req, res)=> {
    const id = req.params.id
    Submission.findById(id).exec(function(error, submission) {
        submission.remove(function(error, result) {
            res.json({ message: "DELETE successful", result });
        })
    })
})

module.exports = api