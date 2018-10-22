'use strict';

class Linkedlist {
  constructor(node = null) {
    this.head = node;
  }

  //insert a new node in the list
  insert(value) {
    if (!value) { return 'Please pass a value to be added'; }
    const newNode = new Node(value, this.head);
    this.head = newNode;
    return this;
  }

  //search for a value in the list
  includes(value) {
    // Check that a value was passed
    if (!value) {
      return 'A value is required';
    }

    // Check if there is anything to search
    if (!this.head) { return 'Nothing to search - EMPTY LIST'; }

    let current = this.head;

    while (current) {
      if (current.value === value) { return true; }
      else { current = current.next; }
    }
    return false;
  }

  // display the list
  print() {
    let listContents = [];

    let current = this.head;

    if (!current) {
      return 'EMPTY';
    } else {
      while (current) {
        listContents.push(current.value);
        current = current.next;
      }
      return listContents.join(',');
    }
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = {
  Linkedlist: Linkedlist,
  Node: Node,
};
