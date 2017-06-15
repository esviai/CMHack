const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema ({
  title: {
    type: String,
    minlength:
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: [String]
  },
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
  }
})

var Article = mongoose.model('Article', articleSchema)
module.exports = Article
