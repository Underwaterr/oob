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

// Mongoosin'
require('./config/database')

// The 'process.env.PORT' variable lets the port be set by Heroku
// If not set, use 3000!
const port = process.env.PORT || 3000;
app.listen(port, ()=> { console.log("Server ready! Listening on port " + port) })

// Auth0
const jwtCheck = require('./config/authorization')

app.use(jwtCheck) // Enable the use of the jwtCheck middleware in all of our routes

// If we do not get the correct credentials, we’ll return an appropriate message
app.use(function (error, request, response, next) {
    if (error.name === 'UnauthorizedError') {
        response.status(401).send('u just got dunked on by jwt')
    }
})

// More router fun
const submissionRouter = require('./api/submission.router')
app.use('/', submissionRouter)