let express = require('express')
let router = express.Router()
let api = require('./submission.api')

// Do dis
// https://scotch.io/tutorials/building-and-securing-a-modern-backend-api

router.post('/submissions', (request, response)=> {
    api.create(request, response)
})

router.get('/submissions', (request, response)=> {
    api.read(request, response)
})

router.get('/submissions/:id', (request, response)=> {
    api.readById(request, response)
})

router.put('/submissions/:id', (request, response)=> {
    api.update(request, response)
})

router.delete('/submissions/:id', (request, response)=> {
    api.delete(request, response)
})

module.exports = router