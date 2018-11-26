'use strict';

const HashMap = require('../new-challenges/hashtable/hashtable.js');

describe('Test hashTable class', () => {

  it('should create a new HashMap', () => {
    const actual = new HashMap(26);
    expect(actual).toBeDefined();
  });

});

describe('Test hashTable add method', () => {

  it('should add a value to the hash map', () => {

    let addHash = new HashMap(25);
    addHash.add('David', 'Dad');
    addHash.add('Lisa', 'Mom');
    addHash.add('Carolynn', 'Daughter');

    const actual = addHash.map[18];

    expect(actual).toBeDefined();
  });

  it('should require a value to be passed', () => {

    let addHash = new HashMap(25);


    const actual = addHash.add('David', null);

    expect(actual).toBe('Key/Value Required');
  });

  it('should require a key to be passed', () => {

    let addHash = new HashMap(25);
    addHash.add('David', 'Dad');

    const actual = addHash.add(null, 'Dad');

    expect(actual).toBe('Key/Value Required');
  });

});

describe('Test hashTable find method', () => {

  it('should return the keyand value from the hash map', () => {

    let findHash = new HashMap(25);

    findHash.add('David', 'Dad');
    findHash.add('Lisa', 'Mom');

    const actual = findHash.find('David');

    expect(actual).toBe('Dad');
  });

  it('should require a key to be passed', () => {

    let findHash = new HashMap(25);

    const actual = findHash.find();

    expect(actual).toBe('Key Required');
  });

  it('should return a message if key is not present', () => {

    let findHash = new HashMap(25);

    findHash.add('David', 'Dad');
    findHash.add('Lisa', 'Mom');

    const actual = findHash.find('Josh');

    expect(actual).toBe('Key not Found');
  });

});

describe('Test hashTable contains method', () => {

  it('should return TRUE if the key exists', () => {

    let containsHash = new HashMap(25);

    containsHash.add('David', 'Dad');
    containsHash.add('Lisa', 'Mom');

    const actual = containsHash.contains('Lisa');

    expect(actual).toBeTruthy();
  });

  it('should return FALSE if the key DOES NOT exist', () => {

    let findHash = new HashMap(25);

    findHash.add('David', 'Dad');

    const actual = findHash.contains('Lisa');

    expect(actual).toBeFalsy();
  });

  it('should require a key to be passed', () => {

    let containsHash = new HashMap(25);

    containsHash.add('David', 'Dad');
    containsHash.add('Lisa', 'Mom');

    const actual = containsHash.contains();

    expect(actual).toBe('Key Required');
  });

});

describe('Test hashTable GetHash method', () => {

  it('should return the hash of the key', () => {


    let getHash = new HashMap(25);
    const key = 'David';

    const actual = getHash.getHash(key);

    expect(actual).toBe(8);
  });

  it('should require a key to be passed', () => {

    let getHash = new HashMap(25);

    const actual = getHash.getHash();

    expect(actual).toBe('Key Required');
  });

});

describe('Test hashTable serialize method', () => {

  it('should return the hash map as serialized data', () => {

    let serialHash = new HashMap(25);
    serialHash.add('David', 'Dad');
    serialHash.add('Lisa', 'Mom');
    serialHash.add('Carolynn', 'Daughter');
    const actual = serialHash.serialize();

    expect(actual).toContain('[{"David":"Dad"},{"Lisa":"Mom"},{"Carolynn":"Daughter"}]');

  });

  it('should throw a plain language error if hash map is empty', () => {

    let serialHash = new HashMap(25);

    const actual = serialHash.serialize();

    expect(actual).toContain('Empty Hash Table');
  });

});

describe('Test hashTable deserialize method', () => {

  it('should take a json string and place it in the hash table', () => {

    let populateHash = new HashMap(25);

    const inputJSON = '[{"David":"Dad"},{"Lisa":"Mom"},{"Carolynn":"Daughter"}]';

    const actual = populateHash.deserialize(inputJSON);

    expect(actual.map[18]).toBeDefined();

  });

  it('should return a plain language error if no string is passed', () => {

    let populateHash = new HashMap(25);

    const actual = populateHash.deserialize();

    expect(actual).toBe('Key Required');

  });

  it('should return a plain language error if bad JSON is passed in', () => {

    let populateHash = new HashMap(25);

    const actual = populateHash.deserialize('Bad JSON String');

    expect(actual).toBe('Not Valid JOSN');

  });

});


