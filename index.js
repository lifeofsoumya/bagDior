const express = require('express')
const app = express();
require('dotenv').config();
const mLogger = require('./middlewares/logger')

const port = 8080 || process.env.PORT;

app.use(mLogger())
app.get('/', (req, res)=>{
    console.log(req.logData)
    res.send('ok')
})

app.listen(port, ()=>{
    console.log(`started listening on port localhost:${port}`)
})