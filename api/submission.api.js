let Submission = require("./submission.model")

module.exports = {

    // TODO: Make Submission API work like this one
    createNew: function(name, callback) {
        let submission = new Submission({name: name})
        submission.save(function(error, result) {
            callback(error, result)
        })
    },


    create: function(request, response) { 
        let submission = new Submission({name: request.body.name})
        submission.save(function(error, result) {
            if(error) response.send(error)
            response.json({message: "POST successful", result })
        })
    },

    read: function(request, response) {
        Submission.find({}).exec(function(error, submissions) {
            if(error) response.send(error)
            response.json(submissions)
        })
    },

    readById: function(request, response) { 
        const id = request.params.id
        Submission.findById(id).exec(function(error, submission) {
            if(error) response.send(error)
            response.json(submission)
        })
    },

    update: function(request, response) {
        const id = request.params.id
        Submission.findById(id).exec(function(error, submission) {
            if(error) response.send(error)
            submission.name = request.body.name;
            submission.save(function(error, result) {
                if(error) response.send(error)
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
 }
}