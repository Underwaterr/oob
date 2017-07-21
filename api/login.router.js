let express = require('express')
let router = express.Router()
let api = require('./login.api')

router.post('/', function(request, response) {
    let username = request.body.username
    let password = request.body.password
    api.login(username, password, function(error, result) {
        if(error) response.send(error)
        response.json({message: "Login successful", result })
    })
})

module.exports = router