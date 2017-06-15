const Article = require('../models/article')
const jwt = require('jsonwebtoken')

var create = ((req, res) => {
  let token = req.headers.token
  let decoded = jwt.verify(token, process.env.SECRET_KEY)
  if (decoded) {
    let newArticle = new Article ({
      title: req.body.title,
      content: req.body.content,
      author: decoded._id,
      categories: req.body.categories.split(',').map(category => category.toLowerCase().trim())
    })
    newArticle.save((err, createdArticle) => {
      res.send(err ? err : createdArticle)
    })
  }
  else {
    res.send({errors: `You are not signed in`})
  }
})

var showAll = ((req, res) => {
  Article.find((err, articles) => {
    res.send(err ? err : articles)
  })
})

var showOne = ((req, res) => {
  let id = req.params.id
  Article.findById(id, (err, article) => {
    res.send(err ? err : article)
  })
})

var showByUser = ((req, res) => {
  let token = req.headers.token
  jwt.verify(token, process.env.SECRET_KEY, (err,decoded) => {
    if (decoded) {
      if(decoded.role === "admin") {
        let userId = req.params.userId
        Article.find({users:userId}, null, {sort: {'done': -1}}, (err,articles) => {
          res.send(err ? err : articles)
        })
      }
      else {
        Article.find({user:decoded.id}, (err,articles) => {
          res.send(err ? err : articles)
        })
      }
    }
    else res.send({errors: `Please signin/signup`})
  })
})

var destroy = ((req, res) => {
  let id = req.params.id
  Article.findByIdAndRemove(id, (err,article) => {
    res.send(err ? err : article)
  })
})

var update = ((req, res) => {
  let id = req.params.id
  Article.findById(id, (err, article) => {
    article.title = req.body.title || article.title
    article.content = req.body.content || article.content
    if(req.body.categories) article.categories = req.body.categories.split(',').map(category => category.toLowerCase().trim())
    else article.categories = article.categories
    article.save((err,updatedarticles) => {
      res.send(err ? err : updatedarticles)
    })
  })
})

var showByAuthor = ((req, res) => {
  let author = req.params.author
  console.log(author)
  Article.find({author: author}, (err, articles) => {
    res.send(err ? err : articles)
  })
})

var showByCategory = ((req, res) => {

})

module.exports = {
  create,
  showOne,
  showAll,
  showByUser,
  destroy,
  update,
  showByAuthor,
  showByCategory
}
