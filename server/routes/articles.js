const router = require('express').Router()
const Auth = require('../controllers/authentization')
const Article = require('../controllers/articles')

router.get('/', Article.showAll)
router.get('/author/:author', Article.showByAuthor)
router.post('/', Auth.authentication, Article.create)
router.delete('/:id', Auth.authorAuth, Article.destroy)
router.put('/:id', Auth.authorAuth, Article.update)

module.exports = router
