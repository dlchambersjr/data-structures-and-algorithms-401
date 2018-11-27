'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const HashMap = require('../hashtable/hashtable.js');

const treeIntersection = (treeA, treeB) => {

  if (!treeA || !treeB) { return 'Tree REQUIRED'; }

  if (!treeA.root || !treeB.root) { return 'Tree CANNOT be empty'; }

  const findIntersection = new HashMap(50);
  const outputArray = [];

  const inOrderFind = (node) => {

    if (node) {
      inOrderFind(node.left, outputArray);

      if (findIntersection.contains(node.value)) {
        outputArray.push(node.value);
      } else findIntersection.add(node.value, node.value);

      inOrderFind(node.right, outputArray);
    }

  };

  inOrderFind(treeA.root);
  inOrderFind(treeB.root);

  return outputArray;

  // if (!this.root) { return 'EMPTY TREE'; }
  // else { return traverseIn(node, []); }

};//end of inOrder


module.exports = treeIntersection, BinaryTree;