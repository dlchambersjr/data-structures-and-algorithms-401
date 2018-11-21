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
    console.log(index, key, value);

    if (!this.map[index]) { this.map[index] = []; }

    this.map[index].push({ [key]: value });

  }

  getHash(key) {
    if (!key) { return 'Key Required'; }
    let index = this.hash(key);
    return index;
  }

  find(key) {
    if (!key) { return 'Key Required'; }

    let index = this.hash(key);

    console.log(key);
    console.log(index);

    console.log(this.map[index].length);

    console.log(this.map[index]);

    console.log(this.map[index][0]);
    console.log(this.map[index][0][key]);

    if (this.map[index]) {
      for (let i = 0; i < this.map[index].length; i++) {
        console.log(this.map[index][i]);
        if (this.map[index][i] === key) {
          return this.map[index][i];
        }
      }
      return 'Key not Found';
    }


  }


  update(key, newValue) {

  }


}



module.exports = HashMap;