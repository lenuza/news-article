// exports.fetchArticleUrl = () => {
//     return Promise.resolve({text:"Microsoft Will Never Give Up On Mobile",
//         language:"en",
//         categories:[
//             {
//             label: "company information - marketing",
//             code:"04016029",
//             confidence: 0.11
//             }
//         ]
//     })
// }
// var newURL

// const updateArticleUrl = () => {
//     event.preventDefault()
//     newURL = 'http://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile'
//     console.log(newURL)
//         // Client.fetchArticleUrl(newURL)
//     Client.consoleOutput()
// }

// jest.mock('node-fetch');
// global.fetch = require("node-fetch")
// const {Response} = jest.requireActual('node-fetch');

const fetchData = () => {
    return Promise.resolve(new Response({text:'Microsoft Will Never Give Up On Mobile'}))
}

// exports.updateArticleUrl = updateArticleUrl
exports.fetchData = fetchData