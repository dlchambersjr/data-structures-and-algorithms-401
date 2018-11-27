const treeIntersection = require('../new-challenges/treeIntersection/tree.intersection.js');

const { Node, BinaryTree } = require('../completed-work/tree/tree.js');

//Create the root node
const rootA = new Node('F');

// Create the left branch
rootA.left = new Node('B');
rootA.left.left = new Node('A');
rootA.left.right = new Node('D');
rootA.left.right.left = new Node('C');
rootA.left.right.right = new Node('E');

//Create the right branch
rootA.right = new Node('G');
rootA.right.right = new Node('I');
rootA.right.right.left = new Node('H');

// Assign nodes to a branch
const treeA = new BinaryTree(rootA);

//Create the root node
const rootB = new Node('M');

// Create the left branch
rootB.left = new Node('B');
rootB.left.left = new Node('A');
rootB.left.right = new Node('R');
rootB.left.right.left = new Node('N');
rootB.left.right.right = new Node('O');

//Create the right branch
rootB.right = new Node('P');
rootB.right.right = new Node('Q');
rootB.right.right.left = new Node('H');

// Assign nodes to a branch
const treeB = new BinaryTree(rootB);

//Create the root node
const rootC = new Node('1');

// Create the left branch
rootC.left = new Node('2');
rootC.left.left = new Node('3');
rootC.left.right = new Node('4');
rootC.left.right.left = new Node('5');
rootC.left.right.right = new Node('6');

//Create the right branch
rootC.right = new Node('7');
rootC.right.right = new Node('8');
rootC.right.right.left = new Node('9');

// Assign nodes to a branch
const treeC = new BinaryTree(rootC);

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

describe('findIntesection tests', () => {

  it('should return the values that are the same', () => {

    const actual = treeIntersection(treeA, treeB);
    const expected = ['A', 'B', 'H'];

    expect(actual).toEqual(expected);

  });

  it('should no duplicates if the trees are unique', () => {

    const actual = treeIntersection(treeA, treeC);
    const expected = [];

    expect(actual).toEqual(expected);
  });

  it('should return a user friendly error if either tree is empty', () => {

    const emptyA = new BinaryTree();

    const actual = treeIntersection(emptyA, treeC);
    const expected = 'Tree CANNOT be empty';

    expect(actual).toEqual(expected);


  });

  it('should return a user friendly error if a tree is not passed in', () => {

    const actual = treeIntersection();
    const expected = 'Tree REQUIRED';

    expect(actual).toEqual(expected);
  });

});