const expect = require('chai').expect;

describe('app', ()=>{
    it('should call the spy correctly', ()=>{
        var spy= expect.createSpy();
        spy();
    })
})