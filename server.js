const express = require('express')
const bodyParser = require('body-parser')   // https://github.com/expressjs/body-parser
const app = express()

// Setup how to render pages
app.set('views', './public')                        // Find the views in the 'public' folder!
app.set('view engine', 'pug')                       // Use PUG as our view engine
app.use(bodyParser.urlencoded({extended: true}))    // For... parsing?
app.use(express.static('public'))                   // Static file location

const routes = require('./routes/routes')
app.use('/', routes)

// The 'process.env.PORT' variable lets the port be set by Heroku
// If not set, use 3000!
const port = process.env.PORT || 3000;
app.listen(port, ()=> { console.log("Server ready! Listening on port " + port) })

// Mongoosin'
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/oob');

// Auth0
const jwt = require('express-jwt')
var rsaValidation = require('auth0-api-jwt-rsa-validation')

var jwtCheck = jwt({
    secret: rsaValidation(),
    algorithms: ['RS256'],
    issuer: 'https://underwater.auth0.com/',
    audience: 'http://oobleck-api.herokuapp.com/'
})

// Enable the use of the jwtCheck middleware in all of our routes
app.use(jwtCheck)

// If we do not get the correct credentials, we’ll return an appropriate message
app.use(function (error, request, response, next) {
    if (error.name === 'UnauthorizedError') {
        response.status(401).json({message:'Missing or invalid token'})
    }
})

// More router fun
const submissionRouter = require('./api/submission.router')
app.use('/', submissionRouter)