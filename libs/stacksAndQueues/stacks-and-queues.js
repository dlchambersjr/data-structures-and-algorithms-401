'use strict';

class Node {
  constructor(value = null) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
}


module.exports = {
  Node,
  Stack,
};