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

    let current = this.root;
    console.log(current);

    console.log(current !== null && value !== current.value);
    while (current && value !== current.value) {

      console.log(value < current.value);
      if (value < current.value) {

        console.log(current.left);
        if (current.left) {

          // current = current.left;
          console.log(current.left.value === value);
          if (current.left.value === value) {
            return current.left;

          } else { current = current.left; }

        } else {
          console.log(current.right);
          if (current.right) {
            if (current.right.value === value) {
              return current.right;

            } else current = current.right;
          }
        }
      }
    }

    return current;

  } //end of search


}//end of Binary Search tree class definition

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};