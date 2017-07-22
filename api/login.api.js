const userApi = require('./user.api')
const encryption = require('../config/encryption')

module.exports = {

    login: function(username, unencryptedPassword, callback) { 
        userApi.readByUsername(username, function(error, data) {
            if(!data) callback(null, false, {message: "User not found"})
            let encryptedPassword = data.password
            encryption.checkPassword(unencryptedPassword, encryptedPassword, function(passwordIsValid) {
                if(!passwordIsValid) {
                    callback(null, false, {message: "Wrong password"})
                }
                else {
                    callback(error, data)
                }
            })
        })

    }
}
