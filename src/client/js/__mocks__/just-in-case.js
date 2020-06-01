const { fetchData } = require('./newUrlValue')
const { consoleOutput } = require('./consoleOutput')
const results = document.getElementById('results')

const buildData = (newURL) => {
    return fetchData(newURL)
        .then(text => {
            return '<span>category: </span>' + JSON.parse(text).categories[0].label
        })
        .catch(console.log)

    };

const displayData = (newURL) =>
        buildData(newURL)
            .then(el => {
                results.innerHTML = el
                const consoleOutput = JSON.parse(text).text
                // return consoleOutput
            })
            .catch(err => {
                console.log(err)
            })
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
exports.buildData = buildData
exports.consoleOutput = consoleOutput
