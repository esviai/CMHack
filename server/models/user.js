const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema ({
  username: {
    type: String,
    minlength: [5, '{PATH} should not be less than five characters'],
    required: [true, '{PATH} should not be empty'],
    unique: true
  },
  password: {
    type: String,
    minlength: [8, '{PATH} should not be less than eight characters'],
    required: [true, '{PATH} should not be empty']
  }
})

var User = mongoose.model('User', userSchema)

module.exports = User
