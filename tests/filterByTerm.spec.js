const functions = require('../src/client/js/functions')

// describe("Filter function", () => {
//     test("it should filter by a search term (link)", () => {
//         // actual test
//         });
// });

test('adds to be equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('adds not to be 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

test('should be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})