const path  = require('path')
const express = require('express')
var aylien = require("aylien_textapi")
const dotenv = require('dotenv');

dotenv.config()

const app = express()

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// set port
const port = process.env.port || 8000;
const server = app.listen(port, () => {
    console.log(`Hello, listening on port ${port}`);
});

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

// var news = document.getElementById('news').innerHTML;
// console.log(news)

textapi.sentiment({
    'text': ' Wearing masks is being made compulsory in Spain both indoors and out in public if social distancing is not possible.Only children under six and people with health issues are exempt from the law, which comes into force on Thursday. Many European countries have now made wearing masks a requirement on public transport but the Spanish decree goes further. Spain has seen one of the worst Covid-19 outbreaks in Europe but is now easing the lockdown gradually. It already requires the wearing of masks on public transport and is now strengthening the rules across the population. Spain has reported almost 28,000 deaths and 232,000 infections since March but the rate of infection has declined. Spain had imposed some of the toughest measures on the continent, including keeping children indoors for six weeks. Prime Minister Pedro Sánchez addressed parliament on Wednesday ahead of a vote on extending the state of alert for two more weeks.'
}, function(error, response) {
    if (error === null) {
        console.log(response);
        }
    });
