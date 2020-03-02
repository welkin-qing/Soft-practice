var express = require('express')
//var User = require('./models/user')
var md5 = require('blueimp-md5')
//var mysql = require('mysql')

var router = express.Router()

router.get('/search', function(req, res){
  res.render("topic/search.html")
})
module.exports = router;