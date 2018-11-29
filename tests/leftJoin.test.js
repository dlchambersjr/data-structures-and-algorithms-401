'use strict';

const HashTable = require('../new-challenges/hashtable/hashtable.js');

const leftJoin = require('../new-challenges/leftJoin/left-join.js');

const mapA = new HashTable(25);
mapA.add('fond', 'enamored');
mapA.add('wrath', 'anger');
mapA.add('diligent', 'employed');
mapA.add('outfit', 'garb');
mapA.add('guide', 'usher');

const mapB = new HashTable(25);
mapB.add('fond', 'averse');
mapB.add('wrath', 'delight');
mapB.add('diligent', 'idle');
mapB.add('guide', 'follow');
mapB.add('flow', 'jam');

const emptyMap = new HashTable(25);

describe('Testing leftJoin', () => {

  it('should require two maps be passed', () => {

    const actual = leftJoin();
    const expected = 'Two hashmaps required';

    expect(actual).toBe(expected);

  });

  it('should require the maps not be empty', () => {

    const actualA = leftJoin(mapA, emptyMap);
    const actualB = leftJoin(emptyMap, mapA);
    const expected = 'Empty Hash Table';

    expect(actualA).toBe(expected);
    expect(actualB).toBe(expected);

  });

  it('should return the left joined results', () => {

    const actual = leftJoin(mapA, mapB);

    console.log(actual);
    const expected = 5;
    const expectedB = { 'outfit': ['garb', null] };

    expect(actual.length).toBe(expected);
    expect(actual[4]).toEqual(expectedB);

  });

});