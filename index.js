
const math = require('./math');
const gify = require('./gifSearch');
const express = require('express');
const app = express();
const port = 3000;  


app.get('/math/add', (request, response) => {
    const query = request.query;
    const vals = Object.values(query);
    const addition = math.add(vals);
        if (addition === null) {
            response.json({
                'error': 'You passed a non-number value into the parameters.'
            })
        }

    response.json({
                    'input':query,
                    'sumString': vals.toString(),
                    'sum': addition
                });   
});


app.get('/math/multiply', (request, response) => {
    const query = request.query;
    const vals = Object.values(query);
    const product = math.multiply(vals);
        if (product === null) {
            response.json({
                'error': 'You passed a non-number value into the parameters.'
            })
        }

    response.json({
                    'input':query, 
                    'ProductString': vals.toString(),
                    'Product': product
                });   
});


app.get('/gif', (request, response) => {

    const query = request.query;
    const val = Object.values(query);

    gify.getGifs(val, (url) =>{
        response.json({'urls': url});
    });  
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
})