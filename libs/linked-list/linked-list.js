'use strict';

// TODO: Error handling needs to be added

class Linkedlist {
  constructor(node = null) {
    this.head = node;
  }

  //insert a new node in the list
  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    return this;
  }

  //search for a value in the list
  includes(value) {
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
