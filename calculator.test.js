const add = require('./calculator'); // Import add function

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});
