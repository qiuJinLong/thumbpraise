import requestsuper from'supertest';
import app from '../build/app.js';
 
 //启动服务的方法
 function request(){
 	return requestsuper(app.listen())
 }

 
describe('测试路由', function() {
  it('点赞', function(done) {
    request()    
      .get('/index')
      .expect(200)
      .end(function(err, res) {
      	done();
      })
      // .get('/index/update')
      // .expect(200)
      // .end(function(err, res) {
      //   if (res.errcode==1) return done(err);
      //   done();
      // });
  });
});