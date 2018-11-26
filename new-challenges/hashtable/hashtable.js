'use strict';

class HashMap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let total = 0;
    let primeNum = 31;

    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * primeNum + value) % this.size;
    }

    return total;
  }


  add(key, value) {
    if (!key || !value) { return 'Key/Value Required'; }
    let index = this.hash(key);

    if (!this.map[index]) { this.map[index] = []; }

    this.map[index].push({ [key]: value });

  }


  find(key) {
    if (!key) { return 'Key Required'; }

    let index = this.hash(key);
    let found;

    if (this.map[index]) {
      found = this.map[index].find(contents => Object.keys(contents) == key);
    }

    if (found) { return found[key]; }

    return 'Key not Found';

  }

  contains(key) {
    if (!key) { return 'Key Required'; }

    let index = this.hash(key);
    let found;

    if (this.map[index]) {
      found = this.map[index].find(contents => Object.keys(contents) == key);
    }

    if (found) { return true; }

    return false;

  }

  getHash(key) {
    if (!key) { return 'Key Required'; }
    let index = this.hash(key);
    return index;
  }

  serialize() {
    let output = [];

    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        output = output.concat(this.map[i]);
      }
    }

    if (output.length) {
      return JSON.stringify(output);
    } else { return 'Empty Hash Table'; }

  }

  deserialize(input) {

    if (!input) { return 'Key Required'; }

    try {
      const convertInput = JSON.parse(input);

      for (let i = 0; i < convertInput.length; i++) {
        let key = Object.keys(convertInput[i]);
        this.add(key[0], convertInput[i][key]);
      }

      return this;

    } catch (error) { return 'Not Valid JOSN'; }

  }

}

module.exports = HashMap;