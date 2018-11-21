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

    console.log(actual);

    expect(actual).toBe();
  });

  it('should require a key to be passed', () => {

    let findHash = new HashMap(25);

    const actual = findHash.find();

    expect(actual).toBe('Key Required');
  });

  xit('should return a message if key is not present', () => {

    let addHash = new HashMap(25);
    addHash.add('David', 'Dad');

    const actual = addHash.add(null, 'Dad');

    expect(actual).toBe('Key/Value Required');
  });

});

describe('Test hashTable contains method', () => {

  xit('should return TRUE if the key exists', () => {


    let findHash = new HashMap(25);
    const key = 'David';
    findHash.add(key, 'Dad');

    const actual = findHash.find(key);

    console.log(actual);

    expect(actual.key).toBeDefined();
  });

  xit('should return FALSE if the key exists', () => {


    let findHash = new HashMap(25);
    const key = 'David';
    findHash.add(key, 'Dad');

    const actual = findHash.find(key);

    console.log(actual);

    expect(actual.key).toBeDefined();
  });

  xit('should return a message if key is not present', () => {

    let addHash = new HashMap(25);
    addHash.add('David', 'Dad');

    const actual = addHash.add(null, 'Dad');

    expect(actual).toBe('Key/Value Required');
  });

});

describe('Test hashTable GerHash method', () => {

  it('should return the hash of the key', () => {


    let getHash = new HashMap(25);
    const key = 'David';

    const actual = getHash.getHash(key);

    console.log(actual);

    expect(actual).toBe(8);
  });

  it('should require a key to be passed', () => {

    let getHash = new HashMap(25);

    const actual = getHash.getHash();

    expect(actual).toBe('Key Required');
  });

});

