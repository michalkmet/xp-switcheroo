function switcheroo(inputString) {
  if (inputString.includes('c')) {
    return inputString;
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
