const test = require('tape')
const proxyquire = require('proxyquire')

const api = proxyqurie('./api/submission'. {
    './submission.model': {
        
    }
})

test('Get submission')