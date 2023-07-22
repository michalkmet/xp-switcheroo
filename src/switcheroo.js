function switcheroo(inputString) {
  if (typeof inputString != 'string' || inputString.length === 0) {
    throw new Error('Wrong input');
  }
  return [...inputString]
    .map((char) => {
      if (char === 'a') {
        char = 'b';
      } else if (char === 'b') {
        char = 'a';
      }
      return char;
    })
    .join('');
}

module.exports = switcheroo;
