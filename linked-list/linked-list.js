'use strict';

class Linkedlist {
  constructor(node = null) {
    this.head = node;
  }
  insert(value) {
    console.log(this);

    if (this.head === null) {
      let newNode = new Node(value, null);
      this.head = newNode.value;
      return this;
    } else {
      let newNext = this.head;
      console.log(newNext);
      this.head = value;
      console.log(this);
      let newNode = new Node(value, newNext);
      console.log(newNode);
      return newNode;
    }
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


// - method to find if a particular value is included in the link.
Linkedlist.prototype.includes = (value) => {



};

// - method to display all of the node values in the list.
Linkedlist.prototype.print = () => {


};


//Catch errors and handles the results
// function errorHandler() {

// }

module.exports = {
  Linkedlist: Linkedlist,
  Node: Node,
};
