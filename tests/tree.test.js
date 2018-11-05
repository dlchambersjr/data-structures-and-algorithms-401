'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../libs/tree/tree.js');

//Create the root node
const rootNode = new Node('F');

// Create the left branch
rootNode.left = new Node('B');
rootNode.left.left = new Node('A');
rootNode.left.right = new Node('D');
rootNode.left.right.left = new Node('C');
rootNode.left.right.right = new Node('E');

//Create the right branch
rootNode.right = new Node('G');
rootNode.right.right = new Node('I');
rootNode.right.right.left = new Node('H');

// Assign nodes to a branch
const binaryTreeData = new BinaryTree(rootNode);

xdescribe('Test to verify class creation', () => {

  it('should create a new instance of a node', () => {

    const actual = new Node();
    expect(actual).toBeDefined();

  });

  it('should create a new instance of a BinaryTree', () => {

    const actual = new BinaryTree();
    expect(actual).toBeDefined();

  });

  it('should create a new instance of a BnarySearchTree', () => {

    const actual = new BinarySearchTree();
    expect(actual).toBeDefined();

  });

});

xdescribe('Test to verify preOrder method', () => {

  it('should return the values of the tree in preOrder format when traversing the tree from the root', () => {

    const actual = binaryTreeData.preOrder();
    const expected = ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H'];

    expect(actual).toEqual(expected);

  });

  it('should return the values of the tree in preOrder format when traversing from a passed in node', () => {

    const subNodeStart = rootNode.left.right;
    const actual = binaryTreeData.preOrder(subNodeStart);
    const expected = ['D', 'C', 'E'];

    expect(actual).toEqual(expected);

  });

  it(`should return 'EMPTY TREE' when there are no nodes to traverse`, () => {
    const emptyTree = new BinaryTree();
    const actual = emptyTree.preOrder();
    const expected = 'EMPTY TREE';

    expect(actual).toEqual(expected);

  });

});

xdescribe('Test to verify inOrder methd', () => {

  it('should return the values of the tree in inOrder format when traversing the tree from the root', () => {

    const actual = binaryTreeData.inOrder();
    const expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    expect(actual).toEqual(expected);

  });

  it('should return the values of the tree in inOrder format when traversing from a passed in node', () => {

    const subNodeStart = rootNode.left.right;
    const actual = binaryTreeData.inOrder(subNodeStart);
    const expected = ['C', 'D', 'E'];

    expect(actual).toEqual(expected);

  });

  it(`should return 'EMPTY TREE' when there are no nodes to traverse`, () => {
    const emptyTree = new BinaryTree();
    const actual = emptyTree.inOrder();
    const expected = 'EMPTY TREE';

    expect(actual).toEqual(expected);

  });

});

xdescribe('Test to verify postOrder methd', () => {

  it('should return the values of the tree in postOrder format when traversing the tree from the root', () => {

    const actual = binaryTreeData.postOrder();
    const expected = ['A', 'C', 'E', 'D', 'B', 'H', 'I', 'G', 'F'];

    expect(actual).toEqual(expected);

  });

  it('should return the values of the tree in inOrder format when traversing from a passed in node', () => {

    const subNodeStart = rootNode.left.right;
    const actual = binaryTreeData.postOrder(subNodeStart);
    const expected = ['C', 'E', 'D'];

    expect(actual).toEqual(expected);

  });


  it(`should return 'EMPTY TREE' when there are no nodes to traverse`, () => {
    const emptyTree = new BinaryTree();
    const actual = emptyTree.postOrder();
    const expected = 'EMPTY TREE';

    expect(actual).toEqual(expected);

  });

});

xdescribe('Test to add nodes to a Binary Search Tree when empty', () => {

  it('should return VALUE REQUIRED if no value is passed', () => {

    const noValueSent = new BinarySearchTree();

    const actual = noValueSent.add();
    const expected = 'VALUE REQUIRED';
    expect(actual).toBe(expected);

  });

  it('should add the value to the tree if it is empty', () => {

    const emptyTree = new BinarySearchTree();

    const actual = emptyTree.add(50);
    const expected = 50;
    expect(actual).toBe(expected);

  });

  it('should add smaller values on the left side of the tree in the correct location when there are nodes in the tree.', () => {

    const treeHasValues = new BinarySearchTree();
    treeHasValues.add(50);
    treeHasValues.add(25);
    treeHasValues.add(27);
    treeHasValues.add(26);
    treeHasValues.add(28);

    const actual = treeHasValues.root.left.right.right;
    const expected = new Node(28);
    expect(actual).toEqual(expected);

  });

  it('should add larger values on the right side of the tree in the correct location when there are nodes in the tree.', () => {

    const treeHasValues = new BinarySearchTree();
    treeHasValues.add(50);
    treeHasValues.add(75);
    treeHasValues.add(77);
    treeHasValues.add(78);
    treeHasValues.add(76);

    const actual = treeHasValues.root.right.right.left;
    const expected = new Node(76);
    expect(actual).toEqual(expected);

  });

  it('should also handle characters as values correctly when there are nodes in the tree.', () => {

    const alphaValues = new BinarySearchTree();
    alphaValues.add('M');
    alphaValues.add('S');
    alphaValues.add('r');
    alphaValues.add('z');
    alphaValues.add('f');
    alphaValues.add('a');


    const actualLeft = alphaValues.root.left.left;
    const expectedLeft = new Node('a');
    expect(actualLeft).toEqual(expectedLeft);

    const actualRight = alphaValues.root.right.left;
    const expectedRight = new Node('r');
    expect(actualRight).toEqual(expectedRight);

  });

});

xdescribe('Test to search for a node value in a binarySearchTree', () => {

  it('should return VALUE REQUIRED if no search value is passed', () => {

    const treeIsEmpty = new BinarySearchTree();

    const actual = treeIsEmpty.search();
    const expected = 'VALUE REQUIRED';
    expect(actual).toBe(expected);

  });

  it('should return EMPTY TREE if there are no nodes', () => {

    const treeIsEmpty = new BinarySearchTree();

    const actual = treeIsEmpty.search(42);
    const expected = 'EMPTY TREE';
    expect(actual).toBe(expected);

  });

  it('should return the node of the requested value from the left when lower than the node.', () => {

    const leftValues = new BinarySearchTree();
    leftValues.add(50);
    leftValues.add(25);
    leftValues.add(27);
    leftValues.add(26);
    leftValues.add(28);

    const actual = leftValues.search(25);
    const expected = new Node(25);

    expect(actual.value).toBe(expected.value);

  });

  it('should return the node of the requested value from the right when higher than the node.', () => {

    const rightValues = new BinarySearchTree();
    rightValues.add(50);
    rightValues.add(75);
    rightValues.add(77);
    rightValues.add(76);
    rightValues.add(78);

    const actual = rightValues.search(78);
    const expected = 78;
    expect(actual.value).toEqual(expected);

  });

  it('should return VALUE NOT FOUND if the value is not in the tree.', () => {

    const rightValues = new BinarySearchTree();
    rightValues.add(50);
    rightValues.add(75);
    rightValues.add(77);
    rightValues.add(76);
    rightValues.add(78);

    const actual = rightValues.search(10);
    const expected = 'VALUE NOT FOUND';
    expect(actual).toBe(expected);

  });

});
