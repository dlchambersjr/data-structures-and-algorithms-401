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

    console.log(current && !foundNode);

    // FIXME: I can't seem to get this to work right.  I feel like the code is right...

    // while (current && !foundNode) {

    //   console.log(current && !foundNode);
    //   console.log(value, current.value);

    //   console.log(value < current.value);

    //   if (value < current.value) {
    //     current = current.left;
    //   }
    //   else if (value > current.value); {
    //     current = current.right;
    //   } else {
    //     foundNode = true;
    //   }

    // }

    if (!foundNode) { return 'VALUE NOT FOUND' }
    return current;

  } //end of search


}//end of Binary Search tree class definition

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};