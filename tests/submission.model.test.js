var test = require('tape')
var Submission = require('../api/submission.model')

test('Create submission model', (t)=> {
    // Arrange
    let submission = new Submission()
    submission.name = "Yay"
    // Act
    let error = submission.validateSync()
    // Assert
    t.equals(error, undefined)
    t.end()
})

test('Create submission model w/o \'name\' throws ValidateError', (t)=> {
    // Arrange
    let submission = new Submission()
    // Act
    let error = submission.validateSync()
    // Assert
    t.equals(error.errors['name'].name, 'ValidatorError')
    t.end()
})