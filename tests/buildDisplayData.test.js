jest.mock('../src/client/js/fetchData.js')
const { buildData } = require('../src/client/js/buildDisplayData')

test('Check if fetchData label match', () => {
    return buildData().then(text => {
        return expect(text).toBe('<span>category: </span>Little Bears');
    })
})