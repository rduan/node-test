const request = require('superTest');
const expect = require('chai').expect;

const app = require('./server').app;


describe('node server',()=>{

    it('should return hhh loo', (done)=>{
        request(app)
            .get('/')
            .expect(200)
            //.expect('hhh loo')
            .expect((res)=>{
                expect(res.body).to.include({
                    name: 'Jack Fong', 
                    age: 26
                })
            })
            .end(done);
    });

    it('should return users array',(done)=>{
        request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).to
            })
        
    })
});