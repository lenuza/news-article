const { fetchData } = require('./fetchData')
const results = document.getElementById('results')

const buildData = (newURL) => {
    return fetchData(newURL)
        .then(text => {

            // console.log(text)
            // const output = [
            //     JSON.parse(text).text,
            //     JSON.parse(text).language,
            //     JSON.parse(text).categories[0].label
            // ]
            return JSON.parse(text)
        })
        .catch(console.log)
}

const displayData = (newURL) => {
    buildData(newURL)
        .then(output => {
            // output = `<p> ${output} </p>`
            // console.log(output)
            // return results.innerHTML = output
            console.log(output)
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
            // for ( let i = 0; i < output.length; i++) {
            //     const paragraph = document.createElement('p')
            //     paragraph.innerHTML = <span></span> + output[i]
            //     results.appendChild(paragraph)
            // }
        })
        .catch(console.log)
}

exports.displayData = displayData
exports.buildData = buildData