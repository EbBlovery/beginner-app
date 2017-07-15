'use strict';

var ClickHandle = require(process.cwd() + '/app/controllers/clickHander.server.js');

module.exports = function(app,db){
   var clickHandle = new ClickHandle(db);
   app.route('/')
      .get(function(req,res){
           res.sendFile(process.cwd() + '/public/index.html')
      });
   app.route('/api/clicks')
      .get(clickHandle.getClicks)
      .post(clickHandle.addClick)
      .delete(clickHandle.resetClicks)
}