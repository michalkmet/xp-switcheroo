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
  it('UAT 2.1: User can pass "aa", it should return "bb"', () => {
    expect(switcheroo('aa')).toBe('bb');
  });
  it('UAT 2.2: User can pass "bb", it should return "aa"', () => {
    expect(switcheroo('bb')).toBe('aa');
  });
});

describe('Story 3', () => {
  it('UAT 3.1: User can pass "ab", it should return "ba"', () => {
    expect(switcheroo('ab')).toBe('ba');
  });
  it('UAT 3.2: User can pass "ab", it should return "ba"', () => {
    expect(switcheroo('ab')).toBe('ba');
  });
});

describe('Story 4', () => {
  it('UAT 4.1: User can pass "abab", it should return "baba"', () => {
    expect(switcheroo('abab')).toBe('baba');
  });
  it('UAT 4.2: User can pass "bbbaaa", it should return "aaabbb"', () => {
    expect(switcheroo('bbbaaa')).toBe('aaabbb');
  });
});

describe('Story 5', () => {
  it('UAT 5.1: User can pass "abcab", it should return "bacba"', () => {
    expect(switcheroo('abcab')).toBe('bacba');
  });
  it('UAT 5.2: User can pass "bbbaaca", it should return "aaabbcb"', () => {
    expect(switcheroo('bbbaaca')).toBe('aaabbcb');
  });
});
