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
    return this.storage.push(new Node(value));
  }

  // remove a value from the top of the stack
  pop() {
    return this.storage.pop();
  }

  // Look a the top of the stack
  peek() {
    return this.storage[this.storage.length - 1];
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
  front() {
    return this.storage[this.storage.length - 1];
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};