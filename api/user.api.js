let User = require("./user.model")
let encryption = require('../config/encryption')

module.exports = {

    create: function(username, unencryptedPassword, callback) { 

        /*
        encryption.encryptPassword(unencryptedPassword, function(encryptedPassword) {
            let user = new User({
                username: username,
                password: encryptedPassword
            })
            user.save(function(error, result) {
                callback(error, result)
            })
        })
        */

        let user = new User({
            username: username,
            password: unencryptedPassword
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
        User.findOne({username: username}).exec(function(error, result) {
            callback(error, result)
        })
    },

    readById: function(id, callback) {
        User.findById(id).exec(function(error, result) {
            callback(error, result)
        })
    },

    destroy: function(id, callback) {
        User.findById(id).exec(function(error, user) {
            if(error) callback(error, user)
            if(user == null) callback(error, user)
            user.remove(function(error, result) {
                callback(error, result)
            })
        })
    }
}