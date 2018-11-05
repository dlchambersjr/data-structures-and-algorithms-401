'use strict';

const { Node, BinaryTree } = require('../libs/fizzBuzzTree/fizz-buzz-tree.js');

//Create the root node
const rootNode = new Node('1');

// Create the left branch
rootNode.left = new Node('3');
rootNode.left.left = new Node('15');
rootNode.left.right = new Node('16');

//Create the right branch
rootNode.right = new Node('5');
rootNode.right.left = new Node('7');
rootNode.right.right = new Node('45');

// Assign nodes to a branch
const fizzyTree = new BinaryTree(rootNode);
let newTree = new BinaryTree();

describe('Test to verify class creation', () => {

  it('should create a new instance of a node', () => {

    const actual = new Node();
    expect(actual).toBeDefined();

  });

  it('should create a new instance of a BinaryTree', () => {

    const actual = new BinaryTree();
    expect(actual).toBeDefined();

  });

});

describe('Test to verify fizzBuzzTree method', () => {

  it('should return the values of the tree in fizzBuzzTree format when traversing the tree from the root', () => {

    newTree = fizzyTree.fizzBuzzTree(fizzyTree);
    const expected = ['1', 'fizz', 'fizzBuzz', '16', 'buzz', '7', 'fizzBuzz'];

    const actual = newTree.preOrder();

    expect(actual).toEqual(expected);

  });

  it(`should return the values of the tree in fizzBuzzTree format when traversing the tree from the root and it contains alpha values`, () => {

    fizzyTree.root.value = 'c';

    newTree = fizzyTree.fizzBuzzTree(fizzyTree);


    const expected = ['c', 'fizz', 'fizzBuzz', '16', 'buzz', '7', 'fizzBuzz'];

    const actual = newTree.preOrder();

    expect(actual).toEqual(expected);
  });

  it(`should return 'EMPTY TREE' when there are no nodes to traverse`, () => {
    const emptyTree = new BinaryTree();
    const actual = emptyTree.fizzBuzzTree();
    const expected = 'EMPTY TREE';

    expect(actual).toEqual(expected);

  });


});
