const bcrypt = require('bcryptjs')

module.exports = {

    encryptPassword: function (unencryptedPassword, callback) {
        bcrypt.genSalt(10, function(error, salt) {
            bcrypt.hash(unencryptedPassword, salt, function(error, encryptedPassword) {
                callback(encryptedPassword)
            })
        })
    },

    checkPassword: function(unencryptedPassword, encryptedPassword, callback) {
        bcrypt.compare(unencryptedPassword, encryptedPassword, function(error, passwordIsValid) {
            callback(passwordIsValid)
        })
    }
}