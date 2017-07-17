const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SubmissionSchema = new Schema({
    name: String
})

module.exports = mongoose.model('Submission', SubmissionSchema)