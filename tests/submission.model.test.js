var test = require('tape')
var Submission = require('../api/schema/submission')

test('Use submission model', (t)=> {
    // Arrange
    let submission = new Submission()
    submission.name = "Yay"
    // Act
    let error = submission.validateSync()
    // Assert
    t.equals(error, undefined)
    t.end()
})

test('Submissiom model throws ValidateError when name not defined', (t)=> {
    // Arrange
    let submission = new Submission()
    // Act
    let error = submission.validateSync()
    // Assert
    t.equals(error.errors['name'].name, 'ValidatorError')
    t.end()
})