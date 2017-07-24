const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SubmissionSchema = new Schema({
    name: {type: String, required: true },
    videoLinks: {type: [String] }
})

module.exports = mongoose.model('Submission', SubmissionSchema)