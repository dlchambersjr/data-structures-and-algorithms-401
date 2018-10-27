'use strict';

class Node {
  constructor(value = null) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  // Add a value to the top of the stack
  push(value) {
    if (value) {
      this.storage.push(new Node(value));
      this.top = this.peek();
      return this;
    } else return 'Please enter a number';
  }

  // remove a value from the top of the stack
  pop() {

    if (this.storage.length >= 2) {
      this.top = this.storage[this.storage.length - 2];
      return this.storage.pop();
    }

    if (this.storage.length === 1) {
      this.top = null;
      return this.storage.pop();
    }

    else { return 'EMPTY STACK'; }
  }

  // Look a the top of the stack
  peek() {
    if (this.storage.length > 0) {
      return this.storage[this.storage.length - 1];
    } else {
      this.top = null;
      return 'EMPTY LIST';
    }
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.storage = [];
  }

  // Add a value to the end of the Queue
  enqueue(value) {
    return this.storage.unshift(new Node(value));
  }

  // remove a value from the front of the Queue
  dequeue() {
    let exitNode = this.storage.pop();
    return exitNode;
  }

  // Look a the first value in the Queue
  peek() {
    return this.storage[this.storage.length - 1];
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};