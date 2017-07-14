var express = require('express')
var router = express.Router()

// Homepage GET
router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    res.send("Hey!")
})

module.exports = router