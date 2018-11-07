'use strict';

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

} //end of Node class defintition

class Queue {
  constructor() {
    this.front = null;
    this.storage = [];
  }

  // Add a value to the end of the Queue
  enqueue(value) {
    if (value) {
      this.storage.unshift(new Node(value));
      this.front = this.peek();
      return this;
    } else return 'Please enter a number';
  }

  // remove a value from the front of the Queue
  dequeue() {

    if (this.storage.length >= 2) {
      this.front = this.storage[this.storage.length - 2];
      return this.storage.pop();
    }

    if (this.storage.length === 1) {
      this.front = null;
      return this.storage.pop();
    }
    else { return 'EMPTY QUEUE'; }
  }

  // Look a the front of the Queue
  peek() {
    if (this.storage.length > 0) {
      return this.storage[this.storage.length - 1];
    } else {
      this.front = null;
      return 'EMPTY QUEUE';
    }
  }
}



class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder(node = this.root) {
    const traversePre = (node, outputArray) => {
      if (node) {
        outputArray.push(node.value);
        traversePre(node.left, outputArray);
        traversePre(node.right, outputArray);
      }
      return outputArray;
    };

    if (!this.root) { return 'EMPTY TREE'; }
    else { return traversePre(node, []); }

  }//end of preOrder

  inOrder(node = this.root) {
    const traverseIn = (node, outputArray) => {
      if (node) {
        traverseIn(node.left, outputArray);
        outputArray.push(node.value);
        traverseIn(node.right, outputArray);
      }
      return outputArray;
    };

    if (!this.root) { return 'EMPTY TREE'; }
    else { return traverseIn(node, []); }

  }//end of inOrder

  postOrder(node = this.root) {
    const traversePost = (node, outputArray) => {
      if (node) {
        traversePost(node.left, outputArray);
        traversePost(node.right, outputArray);
        outputArray.push(node.value);
      }
      return outputArray;
    };

    if (!this.root) { return 'EMPTY TREE'; }
    else { return traversePost(node, []); }

  }//end of postOrder


  breadthFirst(node = this.root) {
    if (!node) { return 'EMPTY TREE'; }

    const visitedQueue = new Queue();
    const output = [];

    visitedQueue.enqueue(node);

    while (visitedQueue.storage.length > 0) {
      node = visitedQueue.dequeue();

      if (node.value.left) { visitedQueue.enqueue(node.value.left); }
      if (node.value.right) { visitedQueue.enqueue(node.value.right); }

      output.push(node.value.value);
    }
    return output.join(',');

  }//end of breadthFirst


}//end of Binary tree class definition

class BinarySearchTree {
  constructor(root = null) {
    this.root = null;
  }

  add(value) {
    if (!value) { return 'VALUE REQUIRED'; }
    else if (isNaN(value)) { value = value.toLowerCase(); }

    const nodeToAdd = new Node(value);

    if (!this.root) {
      this.root = nodeToAdd;
      return this.root.value;
    }

    let current = this.root;

    while (current) {
      if (nodeToAdd.value < current.value) {
        if (!current.left) {
          current.left = nodeToAdd;
          return this;
        } else current = current.left;
      } else {
        if (!current.right) {
          current.right = nodeToAdd;
          return this;
        } else current = current.right;
      }
    }
  } // End of add


  search(value) {

    if (!value) { return 'VALUE REQUIRED'; }
    if (!this.root) return 'EMPTY TREE';
    if (this.root.value === value) { return this.root; }

    let current = this.root;
    let foundNode = false;

    while (current && !foundNode) {

      if (value < current.value) {
        current = current.left;
      }
      else if (value > current.value) {
        current = current.right;
      } else {
        foundNode = true;
      }

    }

    if (!foundNode) { return 'VALUE NOT FOUND'; }
    else { return current; }

  } //end of search

}//end of Binary Search tree class definition




module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};