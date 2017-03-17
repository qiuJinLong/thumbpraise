import requestsuper from'supertest';
import app from '../app.js';
 
 function request(){
 	return requestsuper(app.listen())
 }

 
describe('测试路由', function() {
  it('点赞', function(done) {
    request()
      .get('/index/update')
    
      .expect(200)
           .end(function(err, res) {
        if (res.errcode==1) return done(err);
        done();
      });
  });
});