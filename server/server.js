const express = require('express');

var app = express();


app.get('/', (req, res)=>{
    //res.send('hhh loo');
    res.send({name: 'Jack Fong', age: 26});
});

app.get('/users',(req,res)=>{
    res.send([
        {
            name: 'Mike',
            age: 26
        },
        {
            name: 'Jane',
            age: 27
        },
        {
            name: 'Mokong',
            age: 29
        }
    ]);
});

app.listen(3000, ()=>{
    console.log('server on 3000');
});

module.exports.app = app;