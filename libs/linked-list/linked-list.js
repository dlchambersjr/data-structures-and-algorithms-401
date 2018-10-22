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

  // Append a value to the list
  append(value) {
    let currentNode = this.head;

    if (!value) { return 'Please pass a value to be added'; }

    if (!currentNode) {
      currentNode = new Node(value, currentNode);
      return currentNode;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(value, currentNode.next);
    return this;
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
