import './styles.scss'
var aylien = require("aylien_textapi")

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
})

var news = document.getElementById('news').innerHTML
console.log(news)

textapi.sentiment({
    'text': news
}, function(error, response) {
    if (error === null) {
        console.log(response);
        }
    });