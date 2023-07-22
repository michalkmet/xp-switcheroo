const switcheroo = require('./switcheroo');

describe('hello', () => {
  it('should return hello', () => {
    expect(switcheroo()).toBe('hello');
  });
});
