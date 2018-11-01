const multiBracketValidation = function (input) {

  const brackets = ['(', '{', '[', ')', '}', ']'];
  let bracketArray = input.split('')
    .filter(char => brackets.includes(char));

  if (bracketArray.length % 2 !== 0) { return false; }

  const pairs = ['()', '{}', '[]'];

  let i = 0;

  while (i < bracketArray.length - 1) {
    let search = bracketArray[i] + bracketArray[i + 1];

    if (pairs.includes(search)) {
      bracketArray.splice(i, 2);
      i -= 2;
    }
    i++;
  }

  return bracketArray.length === 0;

};

module.exports = multiBracketValidation;