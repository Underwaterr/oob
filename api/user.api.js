let User = require("./user.model")

module.exports = {

    create: function(username, password, callback) { 
        let user = new User({
            username: username,
            password: password
        })
        user.save(function(error, result) {
            callback(error, result)
        })
    },

    read: function(callback) {
        User.find({}).exec(function(error, result) {
            callback(error, result)
        })
    },

    readByUsername: function(username, callback) {
        User.find({username: username}).exec(function(error, result) {
            callback(error, result)
        })
    },

    destroy: function(id, callback) {
        User.findById(id).exec(function(error, result) {
            if(error) callback(error, result)
            submission.remove(function(error, result) {
                callback(error, result)
            })
        })
    }
}