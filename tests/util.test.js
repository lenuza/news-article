jest.mock('../src/client/js/__mocks__/fetchData.js')
const { displayData } = require('../src/client/js/fetchArticleUrl')
// const { consoleOutput } = require('./util')

test('it should print the text of the fetched data', () => {
    displayData().then(transformOutput => {
        expect(transformOutput).toBe('MICROSOFT WILL NEVER GIVE UP ON MOBILE')
        // done()
    })
})
