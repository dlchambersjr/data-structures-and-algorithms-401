'use strict';

const leftJoin = (hashmapA, hashmapB) => {
  // Verify two hashmaps were passed in.
  if (!hashmapA || !hashmapB) return 'Two hashmaps required';

  // Verify at hashmaps are not empty
  if (hashmapA.serialize() === 'Empty Hash Table' || hashmapB.serialize() === 'Empty Hash Table') return 'Empty Hash Table';

  // Becasue we don't know the contents of the maps we need to serialize the data.
  const mapA = JSON.parse(hashmapA.serialize());
  const mapB = JSON.parse(hashmapB.serialize());

  // process through each array position of hashmapA.
  let joinedMap = mapA.reduce((output, objA) => {

    // Find the key:value pair for the current objext
    let keyA = Object.keys(objA);
    let valueA = objA[keyA];

    // check to see if there is a match in the second hash map
    let found = mapB.find(value => {
      let keyB = Object.keys(value);
      return keyA[0] === keyB[0];
    });

    // if there is a match, blend it with hashmapA - if not, blend null
    if (found) {
      let keyB = (Object.keys(found));
      let valueB = found[keyB];
      output.push({ [keyA[0]]: [valueA, valueB] });
    } else output.push({ [keyA[0]]: [valueA, null] });

    return output; //

  }, []);

  return joinedMap;
};

module.exports = leftJoin;