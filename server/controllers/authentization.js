const Article = require('../models/article')
const jwt = require('jsonwebtoken')

var authorAuth = ((req, res, next) => {
  let token = req.headers.token
  if (token) {
    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    if(decoded) {
      Article.findById(req.params.id, (err, article) => {
        console.log(article)
        if(article.author == decoded.id) {
          next()
        }
        else {
          res.send({errors: `You are not authorized`})
        }
      })
    }
    else {
      res.send({errors: `You are not signed in`})
    }
  }
  else {
    res.send({errors: `You are not signed in`})
  }
})

var authentication = ((req, res, next) => {
  let token = req.headers.token
  if(token) {
    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    decoded ? next() : res.send({errors: `You are not signed in`})
  }
  else {
    res.send({errors: `You are not signed in`})
  }
})

module.exports = {
  authentication,
  authorAuth
}
