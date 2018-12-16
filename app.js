//入口
// 1.导包 
const express = require('express');
const router = require('./router');
const app = express();





// 2.配置express增加render方法
app.engine('html', require('express-art-template'));

// 公开静态资源public文件夹
app.use('/public',express.static('./public'));
// 公开第三方node_medules文件夹
app.use('/node_modules',express.static('./node_modules'));





// 3.监听请求配置路由===使用路由
app.use(router);





// 4.监听端口
app.listen('999',()=>{
  console.log('localhost:999')
})