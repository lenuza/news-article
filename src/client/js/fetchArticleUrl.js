const { fetchData } = require('./fetchData')
const results = document.getElementById('results')

const buildData = (newURL) => {
    return fetchData(newURL)
        .then(text => {
            const output = '<span>category: </span>' + JSON.parse(text).categories[0].label
            return output
        })
        // .catch(console.log)
}

const displayData = (newURL) => {
    buildData(newURL)
        .then(output => {
            return results.innerHTML = output
        })
        // .catch(err => {
        //     console.log(err)
        // })
}

exports.displayData = displayData
exports.buildData = buildData



