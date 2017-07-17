let express = require('express')
let api = express.Router()
let mongoose = require('mongoose')
let Submission = require("./schema/submission")

// Create
api.post('/submissions', (req, res)=> {
    let submission = new Submission({name: req.body.name})
    submission.save(function(error) {
        console.log("POST " + req.body.name)
    })
})

// Read all
api.get('/submissions', (req, res)=> {
    Submission.find({}).exec(function(error, submissions) {
        res.json(submissions)
    })
})

// Read by ID
api.get('/submissions/:id', (req, res)=> {
    const id = req.params.id
    Submission.findById(id).exec(function(error, submission) {
        res.json(submission)
    })
})

// Update
api.put('/submissions/:id', (req, res)=> {
    const id = req.params.id
    Submission.findById(id).exec(function(error, submission) {
        submission.name = req.body.name;
        submission.save(function(error) {
            console.log("PUT: " + req.body.name)
        })
    })
})

// Delete by ID
api.delete('/submissions/:id', (req, res)=> {
    const id = req.params.id
    Submission.findById(id).exec(function(error, submission) {
        submission.remove(function(error) {
            console.log("DELETE: " + id)
        })
    })
})

module.exports = api