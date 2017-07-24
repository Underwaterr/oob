let express = require('express')
let router = express.Router()
let api = require('./user.api')

// Create
router.post('/user', function(request, response) {
    let username = request.body.username
    let password = request.body.password
    let role     = request.body.role
    api.create(username, password, role, function(error, result) {
        response.json(result)
    })
})

// Read
router.get('/users', function(request, response) {
    api.read(function(error, result) {
        response.json(result)
    })
})

// Read by Username
router.get('/user/username/:username', function(request, response) {
    const username = request.params.username
    api.readByUsername(username, function(error, result) {
        response.json(result)
    })
})

// Read by ID
router.get(['/user/:id', '/user/id/:id'], function(request, response) {
    const id = request.params.id
    api.readById(id, function(error, result) {
        response.json(result)
    })
})

// Destroy
router.delete('/user/:id', function(request, response) {
    const id = request.params.id
    api.destroy(id, function(error, result) {
        response.json(result)
    })
})

module.exports = router