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

class AnimalShelter {
  constructor() {
    this.enterStack = new Stack();
    this.exitStack = new Stack();
  }

  enqueue(type) {
    if (type) {
      this.enterStack.storage.push(type);

    } else { return 'Please enter a Cat or Dog'; }
  }

  dequeue(preference) {
    let foundAnimal;
    let exit = this.exitStack.storage;
    let enter = this.enterStack.storage;

    while (enter.length > 0) {
      exit.push(enter.pop());
    }

    while (exit.length > 0) {
      if (!preference) {
        foundAnimal = exit.pop();
        preference = 'found';
      }

      if (preference === 'cat') {
        foundAnimal = exit.pop();
        preference = 'found';
      } else if (preference === 'dog') {
        foundAnimal = exit.pop();
        preference = 'found';
      } else enter.push(exit.pop);
    }

    if (preference === 'found') {
      return foundAnimal;
    } else { return 'No animals in the Shelter'; }

  }

} //END of AnimalShelter Class

module.exports = {
  Stack,
  AnimalShelter,
};