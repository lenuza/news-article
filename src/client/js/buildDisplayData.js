const { fetchData } = require('./fetchData')
const results = document.getElementById('results')

const buildData = (newURL) => {
    return fetchData(newURL)
        .then(text => {
            return JSON.parse(text)
        })
        .catch(console.log)
}

const displayData = (newURL) => {
    buildData(newURL)
        .then(output => {
            for (let [key, value] of Object.entries(output)) {
                if(key != 'categories') {
                    const paragraph = document.createElement('p')
                    paragraph.innerHTML = '<span>' + key + '</span> :  ' + value
                    results.appendChild(paragraph)
                }
                else {
                    const paragraph = document.createElement('p')
                    paragraph.innerHTML = '<span>' + key + '</span> :  ' + value[0].label
                    results.appendChild(paragraph)
                }
            }
        })
        .catch(console.log)
}

exports.displayData = displayData
exports.buildData = buildData