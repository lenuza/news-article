const { fetchData } = require('./fetchData')

const newUrlValue = () => {
    event.preventDefault()
    const newURL = document.getElementById('newArticle').value
    console.log(newURL)

    Client.displayData(newURL)
//because of the preventDefault manually deleting the input content
    document.getElementById('newArticle').value = ''
}

exports.newUrlValue = newUrlValue
exports.fetchData = fetchData
