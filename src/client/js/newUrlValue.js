// const fetch = require('node-fetch')
global.fetch = require("node-fetch")
const { fetchData } = require('./fetchData')

const newUrlValue = () => {
    event.preventDefault()
    const newURL = document.getElementById('newArticle').value
    console.log(newURL)

    Client.consoleOutput(newURL)

    document.getElementById('newArticle').value = ''
}

exports.newUrlValue = newUrlValue
exports.fetchData = fetchData
