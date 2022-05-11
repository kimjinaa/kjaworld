var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query)
  res.json(req.query)
});
//router.get("/list", function (req, res) {
// // var boardlist = [
// //   { id: "1", title: "제목1", writer: "김진아" }
// // ]
// 
//  res.json(boardlist)
//})

module.exports = router;
