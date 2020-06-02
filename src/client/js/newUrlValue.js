const { fetchData } = require('./fetchData')

const newUrlValue = () => {
    event.preventDefault()
    document.getElementById('results').innerHTML = '' //Otherwise is use makes several searches old data will still show
    const newURL = document.getElementById('newArticle').value
    console.log(newURL)

    Client.displayData(newURL)
    //because of the preventDefault manually deleting the input content
    document.getElementById('newArticle').value = ''
}

exports.newUrlValue = newUrlValue
exports.fetchData = fetchData