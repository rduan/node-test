
const spies = require('chai-spies-next');
var chai = require('chai');

chai.use(spies);
const expect = chai.expect;
const should = chai.should();

const rewire = require('rewire');

var app = rewire('./app');


describe('app', ()=>{

    var db = {
        saveUser: chai.spy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', ()=>{
        var spy= chai.spy();
        spy('Jake', 25);
        //spy('foo');
        spy.should.have.been.called();
        //spy.should.have.been.called.with('Jake', 25);
        expect(spy).to.have.been.called.with('Jake', 25);
        //expect(spy).to.have.been.called.with('foo');
    });

    it('should call saveUser with user object', ()=>{
        var email = 'jack@email.com';
        var password ='pass';

        app.handleSignup(email,password);

        expect(db.saveUser).to.have.been.called.with({email,password});
    });
})