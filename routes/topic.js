var express = require('express')
//var User = require('./models/user')
var md5 = require('blueimp-md5')
//var mysql = require('mysql')

var router = express.Router()

router.get('/search', function(req, res){
  res.render("topic/search.html")
})
router.get('/new', function(req, res){
  res.render("topic/new.html")
})
router.post('/new', function(req, res){
  var body = req.body
  console.log(body)
})

router.get('/collect', function(req, res){
  res.render("topic/collect.html")
})
router.post('/collect', function(req, res){
  var body = req.body
  console.log(body)
})
router.get('/donate', function(req, res){
  res.render("topic/donate.html")
})
router.post('/donate', function(req, res){
  var body = req.body
  console.log(body)
})
module.exports = router;