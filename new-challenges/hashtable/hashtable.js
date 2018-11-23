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

    if (found) { return found[key]; };

    return 'Key not Found';

  }

  contains(key) {
    if (!key) { return 'Key Required'; }

    let index = this.hash(key);
    let found;

    if (this.map[index]) {
      found = this.map[index].find(contents => Object.keys(contents) == key);
    }

    if (found) { return true; };

    return false;

  }

  getHash(key) {
    if (!key) { return 'Key Required'; }
    let index = this.hash(key);
    return index;
  }



}



module.exports = HashMap;