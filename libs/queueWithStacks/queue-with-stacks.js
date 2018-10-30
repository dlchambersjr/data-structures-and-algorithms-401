'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  // Add a value to the top of the stack
  push(value) {
    if (value) {
      this.storage.push((value));
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
      return 'EMPTY STACK';
    }
  }

}

class PseudoQueue {
  constructor() {
    this.enterStack = new Stack();
    this.exitStack = new Stack();
  }

  enqueue(value) {
    if (value) {
      this.enterStack.storage.push(value);

    } else { return 'Please enter a value'; }
  }

  dequeue() {
    let exitValue;

    if (this.enterStack.storage.length > 0) {
      for (let i = this.enterStack.storage.length; i > 0; i--) {
        this.exitStack.storage.push(this.enterStack.storage.pop());
      }

      exitValue = this.exitStack.storage.pop();

      for (let i = this.exitStack.storage.length; i > 0; i--) {
        this.enterStack.storage.push(this.exitStack.storage.pop());
      }
    } else { return 'EMPTY QUEUE'; }

    return exitValue;
  }

} //END of PseudoQueue Class


module.exports = {
  Stack,
  PseudoQueue,
};