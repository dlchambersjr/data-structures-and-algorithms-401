'use strict';

class Linkedlist {
  constructor(node = null) {
    this.head = node;
    this.next = null;
  }
  insert(value) {
    if (this.head === null) { return null; }
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
function errorHandler() {

}

module.exports = {
  Linkedlist: Linkedlist,
  Node: Node,
};
