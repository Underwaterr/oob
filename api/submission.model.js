const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SubmissionSchema = new Schema({
    name: {type: String, required: true },
    videoUrls: {type: [String] },
    videoNotes: {type: String },
    reviews: {type: [Schema.Types.Mixed] }
})

module.exports = mongoose.model('Submission', SubmissionSchema)

// imaginary
let fakeSubmission = {
    name: "PGraph",
    videoLinks: ['http://www.google.com', 'askjeeves.gov'],
    reviews: {
        reviewer1: { score: 5, notes: "I thought it was great!" },
        reviewer2: { score: 1, notes: "I thought it SUCKED" }
    }
}