const path  = require('path')
const express = require('express')


const app = express()

app.use(express.static('client'))

app.get('/', function (req, res) {
    res.sendFile('client/index.html')
})

// set port
const port = process.env.port || 8000;
const server = app.listen(port, () => {
    console.log(`Hello, listening on port ${port}`);
});