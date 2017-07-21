let express = require('express')
let router = express.Router()
let api = require('./user.api')

router.post('/', function(request, response) {
    let username = request.body.username
    let password = request.body.password
    api.create(username, password, function(error, result) {
        if(error) response.send(error)
        response.json({message: "POST successful", result })
    })
})

router.get('/', function(request, response) {
    api.read(function(error, result) {
        if(error) response.send(error)
        response.json(result)
    })
})

router.get('username/:username', function(request, response) {
    const username = request.params.username
    api.readByUsername(username, function(error, result) {
        if(error) response.send(error)
        response.json(result)
    })
})

router.get(['/:id', 'id/:id'], function(request, response) {
    const id = request.params.id
    api.readById(id, function(error, result) {
        if(error) response.send(error)
        response.json(result)
    })
})

router.delete('/:id', function(request, response) {
    const id = request.params.id
    api.destroy(id, function(error, result) {
        if(error) response.send(error)
        response.json(result)
    })
})

module.exports = router