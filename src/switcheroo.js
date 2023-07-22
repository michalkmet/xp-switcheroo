function switcheroo(inputString) {
  if (!isValid(inputString)) {
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

function isValid(inputString) {
  if (typeof inputString != 'string' ||
      inputString.length === 0 ||
      (
        !inputString.includes('a') &&
        !inputString.includes('b') && 
        !inputString.includes('c')
      )
    ) {
    return false;
  }
  return true;
}
module.exports = switcheroo;
