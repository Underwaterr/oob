const mongoose = require('mongoose')
const Schema = mongoose.Schema

let SubmissionSchema = new Schema({
    name: {type: String, required: true },
    description: {type: String },
    videoUrls: {type: [String], default: [] },
    videoNotes: {type: String },
    reviews: {type: Schema.Types.Mixed, default: {}}}, { 
    minimize: false 
})

module.exports = mongoose.model('Submission', SubmissionSchema)