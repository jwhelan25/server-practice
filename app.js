const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('common'))

app.get('/boogers',(req,res) => {
    res.send('Hello Express Boogers!')
})

app.get('/pancakes',(req,res)=>{
    res.send('Hello Express Pancakes!')
})

app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); //do not send any data back to the client
  });

  ////////////////////////////////////////////////////

  app.get('/greetings', (req, res) => {
    //1. get values from the request
    const name = req.query.name;
    const race = req.query.race;
  
    //2. validate the values
    if(!name) {
      //3. name was not provided
      return res.status(400).send('Please provide a name');
    }
  
    if(!race) {
      //3. race was not provided
      return res.status(400).send('Please provide a race');
    }
  
    //4. and 5. both name and race are valid so do the processing.
    const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;
  
    //6. send the response 
    res.send(greeting);
  });

  ///////////////////////////////////////////////

app.listen(8080, () => {console.log('Server on 8080')})
