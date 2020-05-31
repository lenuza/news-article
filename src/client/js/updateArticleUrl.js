// const fetch = require('node-fetch')
global.fetch = require("node-fetch")
const { consoleOutput } = require('./util')
const { fetchData } = require('./fetchData')

const updateArticleUrl = () => {
    event.preventDefault()
    const newURL = document.getElementById('newArticle').value
    console.log(newURL)
        // Client.fetchArticleUrl(newURL)

    Client.consoleOutput(newURL)

    document.getElementById('newArticle').value = ''
}

// const fetchData = () => {
//     console.log('helllllo')
//     return fetch(`/api/text/${encodeURIComponent(newURL)}`)
//         .then(res => {
//             return res.text()
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

exports.updateArticleUrl = updateArticleUrl
exports.fetchData = fetchData
// exports.newURL = newURL