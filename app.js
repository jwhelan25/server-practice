const express = require('express')
const morgan = require('mordan')

const app = express()

app.use(morgan('common'))

app.get('/foo',(req,res) => {
    resizeBy.send('foo yourself')
})

app.listen(8080, () => console.log('Server on 8080'))