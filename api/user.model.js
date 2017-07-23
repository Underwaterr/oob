const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleEnum = {
  values: ['admin', 'reviewer'],
  message: 'Invalid role for `{PATH}` with value `{VALUE}`'
}

let UserSchema = new Schema({
    username: {type: String, required: true },
    password: {type: String, required: true },
    role:     {type: String, enum: roleEnum }
})

module.exports = mongoose.model('User', UserSchema)