const User = require(`../models/user`)
const bcrypt = require(`bcrypt`)
const saltRounds = 10
const jwt = require(`jsonwebtoken`)

var create = ((req,res) => {
  if(req.body.password.length !== 0) {
    if(req.body.password.length < 8) {
      res.send({errors: {password: {message: `Password length should not be less than 8 characters`}}})
    }
    else {
      let newUser = new User ({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, saltRounds),
      })
      newUser.save((err, createdUser) => {
        res.send(err ? err : createdUser)
      })
    }
  }
  else {
    res.send({errors: {password: {message: `Password should not be empty`}}})
  }
})

var signin = ((req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if(err) res.send(err)
    else {
      if(user) {
        bcrypt.compare(req.body.password, user.password, (err,result) => {
          if(err) res.send(err)
          else {
            if(result) {
              let token = jwt.sign({id: user.id, username: user.username}, process.env.SECRET_KEY)
              res.send({token:token})
            }
            else {
              res.send({errors: 'Username/password is wrong'})
            }
          }
        })
      }
      else {
        res.send({errors: 'Username/password is wrong'})
      }
    }
  })
})

module.exports = {
  create,
  signin
}
