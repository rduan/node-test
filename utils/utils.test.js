const expect = require('chai').expect;
const utils = require('./utils');

// it("should exist",()=>{
    
//         // expect(utils).toExist();
//         expect(utils).to
//     });

it("should add two numbers",()=>{
    let res = utils.add(33,12);

    //expect(res).toBe(45);
    // expect(res).toBeA('number');
    // expect(2).toBeA('number');
    expect(res).to.be.a('number');
    expect(res).to.equal(45);

    //throw new Error()
});


it("should square a number",()=>{
    let res = utils.square(3);

    expect(res).to.be.a('number');
    expect(res).to.equal(9);

    //throw new Error()
});


describe('setName',()=>{

    it("should set first and last name ",()=>{
        var user = {location: "SH", age: 25};
        var res = utils.setName(user, 'Jack Fong');

        expect(user).to.include({
            firstName: 'Jack',
            lastName: 'Fong'
        })
    })
});

describe('asyncAdd', ()=>{
    it('should async add two numbers',(done)=>{
        utils.asyncAdd(4,4,(sum)=>{
            expect(sum).to.equal(8).to.be.a('number');
            done();
        })
    })
});


describe('asyncSquare', ()=>{
    it('should async square a number',(done)=>{
        utils.asyncSquare(4,(res)=>{
            expect(res).to.equal(16).to.be.a('number');
            done();
        })
    })
});