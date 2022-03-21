function pigIt(str) {
  const words = str.split(' ');

  const result = words.map((element) => {
    element = [...element];
    const fe = element.shift();
    element = element.join('') + fe + 'ay';
    return element;
  });

  return result.join(' ');
}

console.log(pigIt('Pig latin is cool'));
