let express = require('express')
let router = express.Router()
let api = require('./login.api')

router.post('/', function(request, response) {
    let username = request.body.username
    let unencryptedPassword = request.body.password
    api.login(username, unencryptedPassword, function(error, result) {
        response.json({message: "Login successful", result })
    })
})

module.exports = router