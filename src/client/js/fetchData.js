// const { newURL } = require('./updateArticleUrl')

const fetchData = (newURL) => {
    console.log('helllllo')
    return fetch(`/api/text/${encodeURIComponent(newURL)}`)
        .then(res => {
            return res.text()
        })
        .catch(err => {
            console.log(err)
        })
}

exports.fetchData = fetchData