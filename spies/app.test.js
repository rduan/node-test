
const spies = require('chai-spies-next');
var chai = require('chai');

chai.use(spies);
const expect = chai.expect;
const should = chai.should();

describe('app', ()=>{
    it('should call the spy correctly', ()=>{
        var spy= chai.spy();
        spy('Jake', 25);
        //spy('foo');
        spy.should.have.been.called();
        //spy.should.have.been.called.with('Jake', 25);
        expect(spy).to.have.been.called.with('Jake', 25);
        //expect(spy).to.have.been.called.with('foo');
    })
})