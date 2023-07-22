function switcheroo(inputString) {
  if (inputString.includes('c')) {
    return inputString;
  }

  const reg = '/a/g';
  return inputString.replace(reg, 'b');
}

module.exports = switcheroo;
