let express = require('express')
let router = express.Router()
let api = require('./submission.api')

router.post('/submission', (request, response)=> {
    let submission = {
        name: request.body.name,
        description: request.body.description,
        videoUrls: request.body.videoUrls,
        videoNotes: request.body.videoNotes
    }
    api.create(submission, function(error, result) {
        response.json(result)
    })
})

router.get('/submissions', (request, response)=> {
    api.read(request, response)
})

router.get('/submission/:id', (request, response)=> {
    api.readById(request, response)
})

router.put('/submission/:id', (request, response)=> {
    api.update(request, response)
})

router.delete('/submission/:id', (request, response)=> {
    api.delete(request, response)
})

router.post('/review/:submissionId', (request, response)=> {
    const submissionId = request.params.submissionId
    const review = request.body
    api.addReview(submissionId, review, function(error, data) {
        response.json(data)
    })
})

module.exports = router