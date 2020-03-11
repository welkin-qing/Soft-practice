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
router.get('/xiangq', function(req, res){
  res.render("topic/xiangq.html")
})
router.get('/bb', function(req, res){
  res.status(200).json({
    result:[
      {"supName":"1",supCategory :"医疗援助","supQuantity":"12","supLocation":"陕西西安"},
      {"supName":"2",supCategory :"社会关怀","supQuantity":"124","supLocation":"陕西宝鸡"},
      {"supName":"3",supCategory :"爱心捐赠","supQuantity":"55","supLocation":"北京朝阳"},
      {"supName":"4",supCategory :"公益文化","supQuantity":"77","supLocation":"上海浦东"}
    ],
    err_code: 0
  })
})

router.get('/cc', function(req, res){
  res.status(200).json({
    result:[
      {"orderId":"1","orderCategory":"捐赠","orderTime":"2020-01-02","orderAddress1":"陕西西安","orderAddress2":"北京朝阳"},
      {"orderId":"2","orderCategory":"捐赠","orderTime":"2020-01-03","orderAddress1":"陕西宝鸡","orderAddress2":"上海浦东"},
      {"orderId":"3","orderCategory":"捐赠","orderTime":"2020-01-04","orderAddress1":"北京朝阳","orderAddress2":"河北石家庄"},
      {"orderId":"4","orderCategory":"捐赠","orderTime":"2020-01-05","orderAddress1":"陕西渭南","orderAddress2":"江苏南京"},
    ],
    err_code: 0
  })
})

module.exports = router;