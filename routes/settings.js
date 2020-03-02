var express = require('express')
var md5 = require('blueimp-md5')
// var db = require('../models/db')
var router = express.Router()
//var new = require('../public/lib/JavaScriptLatest/')
//var qiniu = require('qiniu')


router.get('/profile', function(req, res){
  res.render('settings/profile.html')
})
router.post('/profile', function(req, res){
  var body = req.body
  //console.log(body)
})
router.get('/admin', function(req, res){
  res.render('settings/admin.html')
})
router.post('/admin', function(req, res){
  var body = req.body
  console.log(body)
})
module.exports = router;