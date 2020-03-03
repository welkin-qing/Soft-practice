var express = require('express')
//var User = require('./models/user')
var md5 = require('blueimp-md5')

var router = express.Router()
// index
router.get('/',function(req, res){
  res.render("index.html")
})


//test
router.get('/test',function(req, res){
  res.render("test.html")
})

/*后台系统登录界面*/
router.get('/login',require("./login"));
router.post('/login',require("./login"));
router.get('/register',require("./login"));
router.post('/register',require("./login"));
//setting
router.get('/profile',require("./settings"));
router.post('/profile',require("./settings"));
router.get('/admin',require("./settings"));
router.post('/admin',require("./settings"));
//topic
router.get('/search',require("./topic"));
router.get('/new',require("./topic"));
router.post('/new',require("./topic"));
router.get('/collect',require("./topic"));//提取
router.post('/collect',require("./topic"));
router.get('/donate',require("./topic"));//捐赠
router.post('/donate',require("./topic"));

//logout
router.get('/logout', function (req, res) {
  // 清除登陆状态
  req.session.user = null
  // 重定向到登录页
  res.redirect('/login')
})
module.exports = router;