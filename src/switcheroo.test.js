const switcheroo = require('./switcheroo');

describe('Story 1', () => {
  it('UAT 1.1: User can pass "c", it should return "c"', () => {
    expect(switcheroo('c')).toBe('c');
  });
  it('UAT 1.2: User can pass "ccc", it should return "ccc"', () => {
    expect(switcheroo('ccc')).toBe('ccc');
  });
});

describe('Story 2', () => {
  it('UAT 2.1: User can pass "aa", it should return "aa"', () => {
    expect(switcheroo('aa')).toBe('aa');
  });
});
