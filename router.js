// 路由配置

// 导包
const express = require('express');
const c_user = require('./fn/c_user');



// 实例化router
const router = express.Router()

//配置路由，找方法--去函数功能文件夹
router.get('/signin',c_user.showSignin)





// 导出路由对象
module.exports = router;