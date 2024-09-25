const add = require('./calculator'); // Import add function

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number when a single number is provided', () => {
    expect(add("1")).toBe(1);
});
