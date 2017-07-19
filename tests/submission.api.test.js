let test            = require('tape'),
    sinon           = require('sinon'),
    mongoose        = require('mongoose'),
    sinonMongoose   = require('sinon-mongoose')

var api = require('../api/submission.api')

test('I am not a clever man', (t)=> {

    var Submission = mongoose.model('Submission')
    var SubmissionMock = sinon.mock(Submission)

    SubmissionMock
        .find()
        .exec()
        .then(function(result) {
            console.log("Result:", result)
        }

    console.log(thing)

    t.end()
})