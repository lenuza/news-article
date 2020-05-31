const { fetchData } = require('./updateArticleUrl')
const { consoleOutput } = require('./util')
const results = document.getElementById('results')

    const displayData = (newURL) => {
        return fetchData(newURL)
            .then(text => {
                results.innerHTML = '<span>category: </span>' + JSON.parse(text).categories[0].label
                const consoleOutput = JSON.parse(text).text
                return consoleOutput
            })
            .catch(err => {
                console.log(err)
            })

    }

    exports.displayData = displayData
    exports.consoleOutput = consoleOutput




