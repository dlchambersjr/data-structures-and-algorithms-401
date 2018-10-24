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

  findKth(k) {

    // check for an empty list
    if (this.head === null) { return 'Empty List'; }

    let search = this.head;
    let follow = this.head;
    let count = 0;

    //Move the search 'k' ahead of the follower
    while (count < k) {
      if (search.next === null) { return 'List is too small'; }
      search = search.next;
      count++;
    }

    // move both search and follow until search reaches the end of the list
    while (search.next != null) {
      search = search.next;
      follow = follow.next;
    }

    return follow.value;
  }

}

// Define the Node Class
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
