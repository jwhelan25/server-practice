const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('common'))

  ////////////////////////////////////////////////////

  app.get('/sum', (req, res) => {
    //1. get values from the request
    const d = req.query.a;
    const e = req.query.b;
  
    //2. validate the values
    if(!Number(d)) {
      return res.status(400).send('Please provide a two numbers');
    }
  
    if(!Number(e)) {
      return res.status(400).send('Please provide a two numbers');
    }

    a = Number(d)
    b = Number(e)
    c = a+b
  
    //4. and 5. both name and race are valid so do the processing.
    const retu = `The sum of ${a} and ${b} is ${c}`;
  
    //6. send the response 
    res.send(retu);
  });

  ///////////////////////////////////////////////

app.listen(8080, () => {console.log('Server on 8080')})
