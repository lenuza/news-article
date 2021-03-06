const path = require('path')
const express = require('express')
const aylien = require("aylien_textapi")
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')

dotenv.config()

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('src/client/view/index.html')
})

app.get('/api/text/:url', function (req, res) {
    textapi.classify({
        url: req.params.url
    }, function (error, response) {
        if (error === null) {
            response['categories'].forEach(function (c) {
                console.log(c);
            });
            console.log(response)
            return res.json(response);
        }

        console.error(err);
    });
});

// set port
const port = process.env.port || 8000;
const server = app.listen(port, () => {
    console.log(`Hello, listening on port ${port}`);
});
