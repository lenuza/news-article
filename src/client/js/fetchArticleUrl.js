const { fetchData } = require('./newUrlValue')
const { consoleOutput } = require('./util')
const results = document.getElementById('results')

const buildElement = (newURL) => {
    return fetchData(newURL)
        .then(text => {
            return '<span>category: </span>' + JSON.parse(text).categories[0].label
        })
        .catch(console.log)

    };

const displayData = (newURL) =>
        buildElement(newURL)
            .then(el => {
                results.innerHTML = el
                const consoleOutput = JSON.parse(text).text
                return consoleOutput
            })
            .catch(err => {
                console.log(err)
            })

exports.displayData = displayData
exports.buildElement = buildElement
exports.consoleOutput = consoleOutput




