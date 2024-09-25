const add = require('./calculator');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number when a single number is provided', () => {
    expect(add("1")).toBe(1);
});

test('returns the sum of two numbers separated by a comma', () => {
    expect(add("1,2")).toBe(3);
});

test('returns the sum of multiple numbers separated by commas', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test('handles newlines as delimiters along with commas', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});