let Submission = require("./submission.model")

module.exports = {

    create: function(submission, callback) { 
        let submissionModel = new Submission(submission)
        submissionModel.save(function(error, result) {
            callback(error, result)
        })
    },

    read: function(request, response) {
        Submission.find({}).exec(function(error, submissions) {
            response.json(submissions)
        })
    },

    readById: function(request, response) { 
        const id = request.params.id
        console.log("Get by ID: ", id)
        Submission.findById(id).exec(function(error, submission) {
            response.json(submission)
        })
    },

    update: function(request, response) {
        const id = request.params.id
        Submission.findById(id).exec(function(error, submission) {
            submission.name = request.body.name;
            submission.save(function(error, result) {
                response.json({ message: "PUT successful", result})
            })
        })
    },

    delete: function(request, response) {
        const id = request.params.id
        Submission.findById(id).exec(function(error, submission) {
            submission.remove(function(error, result) {
                response.json({ message: "DELETE successful", result });
            })
        })
    },

    addReview: function(submissionId, review, callback) {
        Submission.findById(submissionId).exec(function(error, submission) {
            var isUpdate
            for(var i=0; i<submission.reviews.lenght; i++) {
                if submission.reviews[i].userId = review.userId {
                    isUpdate = true
                    submission.reviews[i] = review
                }
            }
            if (!isUpdate) {
                submission.reviews.push(review)
            }

            if (review.userId in submission.reviews) delete submission.reviews[review.userId]

            submission.save(function(error, result) {
                callback(error, result)
            })
        })
    }
}