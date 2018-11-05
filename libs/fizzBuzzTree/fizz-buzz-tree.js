'use strict';

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

} //end of Node class defintition

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


  fizzBuzzTree(tree = this.root) {

    const traversePre = (node) => {
      if (node) {
        if (node.value % 15 === 0) node.value = 'fizzBuzz';
        if (node.value % 5 === 0) node.value = 'buzz';
        if (node.value % 3 === 0) node.value = 'fizz';
        traversePre(node.left);
        traversePre(node.right);
      }
      return tree;
    };

    if (!this.root) { return 'EMPTY TREE'; }
    else { return traversePre(tree.root); }

  }//end of fizzBuzzTree

}//end of Binary tree class definition

module.exports = {
  Node,
  BinaryTree,

};