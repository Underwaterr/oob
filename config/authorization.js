let jwt = require('express-jwt')
let rsaValidation = require('auth0-api-jwt-rsa-validation')

var jwtCheck = jwt({
    secret: rsaValidation(),
    algorithms: ['RS256'],
    issuer: 'https://underwater.auth0.com/',
    audience: 'http://oobleck-api.herokuapp.com/'
})

module.exports = jwtCheck