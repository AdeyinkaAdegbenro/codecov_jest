const hello_world = require('./hello_world');

test('tests 2 is even', () => {
    expect(hello_world(2)).toBe("Hello Even World");
});

test('tests 3 is odd', () => {
    expect(hello_world(3)).toBe("Hello Odd World");
});