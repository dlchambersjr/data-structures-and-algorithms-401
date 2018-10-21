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

    while (this.head) {
      if (this.head.value === value) { return true; }
      else { this.head = this.head.next; }
    }
    return false;
  }

  // display the list
  print() {
    let listContents = [];

    if (!this.head) {
      return 'EMPTY';
    } else {
      while (this.head) {
        listContents.push(this.head.value);
        this.head = this.head.next;
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
