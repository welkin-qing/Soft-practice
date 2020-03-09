var express = require('express')
//var User = require('./models/user')
var md5 = require('blueimp-md5')
//var mysql = require('mysql')

var router = express.Router()

router.get('/login', function (req, res) {
  res.render('login.html')
})
router.post('/login', function (req, res) {
  var body = req.body
  console.log(typeof(body))
  console.log(body)
})
//register
router.get('/register', function (req, res) {
  res.render('register.html')
})
router.post('/register', function (req, res) {
  var body = req.body
  console.log(body)
})
module.exports = router;