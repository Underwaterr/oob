const express = require('express')
const bodyParser = require('body-parser')   // https://github.com/expressjs/body-parser
const app = express()

// Setup how to render pages
app.set('views', './public')                        // Find the views in the 'public' folder!
app.set('view engine', 'pug')                       // Use PUG as our view engine
app.use(bodyParser.urlencoded({extended: true}))    // For... parsing?
app.use(express.static('public'))                   // Static file location

// Logging!!111
const logging = require('./config/logging')
app.use(logging)

// Mongoosin'
require('./config/database')

// Auth0
const jwtCheck = require('./config/authorization')
app.use(jwtCheck) // Enable the use of the jwtCheck middleware in all of our routes

// If we do not get the correct credentials, we’ll return an appropriate message
app.use(function (error, request, response, next) {
    console.log("BIG ERROR!", error)
    if (error.name === 'UnauthorizedError') {
        response.status(403).send('u just got dunked on by jwt')
    }
})

// More router fun
app.use('/submissions', require('./api/submission.router'))
app.use('/users', require('./api/user.router'))
app.use('/login', require('./api/login.router'))
app.get('/', function(request,response) {
    response.send("¡Nada que ver aqui!")
})

// The 'process.env.PORT' variable lets the port be set by Heroku
// If not set, use 3000!
const port = process.env.PORT || 3000;
app.listen(port, ()=> { console.log("Server ready! Listening on port " + port) })
