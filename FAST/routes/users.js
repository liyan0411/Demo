var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	var user = {
		title:"个人中心",
		needToDo:"3",
		imgUrl:"/images/bw-2014-06-19.jpg",
		userMessage:[{
			name:"姓名",
			value:"李岩"
		},{
			name:"性别",
			value:"男"
		},{
			name:"生日",
			value:"1992-04-11"
		},{
			name:"电话",
			value:"18601112944"
		},{
			name:"地址",
			value:"上海市杨浦区江浦路1000号"
		},{
			name:"账号",
			value:"leeyen@qq.com"
		}]
	};
  res.render('users/users', user);
});
/* GET users listing. */
router.get('/modify', function(req, res, next) {
	
	var user = {
		title:"密码修改",
		needToDo:"3"
	};
  res.render('users/modify', user);
});

module.exports = router;
