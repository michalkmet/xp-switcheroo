const switcheroo = require('./switcheroo');

describe('Story 1', () => {
  it('User can pass "c", it should return "c"', () => {
    expect(switcheroo('c')).toBe('c');
  });
});
