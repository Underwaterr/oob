let express = require('express')
let router = express.Router()
let api = require('./user.api')

// Create
router.post('/', function(request, response) {
    let username = request.body.username
    let password = request.body.password
    api.create(username, password, function(error, result) {
        response.json(result)
    })
})

// Read
router.get('/', function(request, response) {
    api.read(function(error, result) {
        response.json(result)
    })
})

// Read by Username
router.get('/username/:username', function(request, response) {
    const username = request.params.username
    api.readByUsername(username, function(error, result) {
        response.json(result)
    })
})

// Read by ID
router.get(['/:id', 'id/:id'], function(request, response) {
    const id = request.params.id
    api.readById(id, function(error, result) {
        response.json(result)
    })
})

// Destroy
router.delete('/:id', function(request, response) {
    const id = request.params.id
    api.destroy(id, function(error, result) {
        response.json(result)
    })
})

module.exports = router