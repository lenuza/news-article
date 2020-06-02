const { fetchData } = require('./fetchData')

const newUrlValue = () => {
    event.preventDefault()
    //Otherwise is use makes several searches old data will still show
    document.getElementById('results').innerHTML = ''
    const newURL = document.getElementById('newArticle').value

    Client.displayData(newURL)
    //because of the preventDefault manually deleting the input content
    document.getElementById('newArticle').value = ''
}

exports.newUrlValue = newUrlValue
exports.fetchData = fetchData