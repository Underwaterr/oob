let express = require('express')
let router = express.Router()
let api = require('./submission.api')

router.post('/', (request, response)=> {
    let name = request.body.name
    api.create(name, function(error, result) {
        response.json(result)
    })
})

router.get('/', (request, response)=> {
    api.read(request, response)
})

router.get('/:id', (request, response)=> {
    api.readById(request, response)
})

router.put('/:id', (request, response)=> {
    api.update(request, response)
})

router.delete('/:id', (request, response)=> {
    api.delete(request, response)
})

module.exports = router