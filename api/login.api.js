const User = require("./user.model")
const userApi = require('./user.api')

module.exports = {

    login: function(username, password, callback) { 
        let user = new User({
            username: username,
            password: password
        })
        userApi.readByUsername(username, function(error, result) {
            if (error) callback(error, result)
            if (result.password !== password) callback({message: "Wrong password!"}, result)
            callback(error, result)
        })

    }
}