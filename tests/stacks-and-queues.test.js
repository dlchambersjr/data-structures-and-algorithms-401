'use strict';

const classes = require('../libs/stacksAndQueues/stacks-and-queues.js');
const Stack = classes.Stack;
const Node = classes.Node;
const Queue = classes.Queue;

describe(`Test to verify the proper creation of the Stack class and it's instances`, () => {

  it(`should create an empty instance of a stack/node`, () => {

    let actualStack = new Stack();
    let actualNode = new Node();

    expect(actualStack).toBeDefined();
    expect(actualNode).toBeDefined();

  });

  it(`should assign the Stack.top and Node.value to be null when first creted`, () => {

    let actualStack = new Stack();
    let actualNode = new Node();

    expect(actualStack.top).toBeNull();
    expect(actualNode.value).toBeNull();

  });

});

describe(`Test the manipulation of the stack`, () => {

  it(`should add values to the top of the stack and return the last number added`, () => {

    const pushStack = new Stack();

    for (let i = 1; i < 6; i++) {
      pushStack.push(i);
    }

    const actual = pushStack.peek();
    expect(actual.value).toBe(5);

  });

  it(`should remove the top value of the stack`, () => {
    const popStack = new Stack();

    for (let i = 10; i > 0; i--) {
      popStack.push(i);
    }

    const actual = popStack.pop();

    expect(actual.value).toBe(1);

  });

  it(`should return the value at the top of the stack`, () => {
    const peekStack = new Stack();

    for (let i = 1; i < 11; i++) {
      peekStack.push(i);
    }

    const actual = peekStack.peek();
    console.log(actual.value);
    expect(actual.value).toBe(10);

  });

});


describe(`Test to verify the proper creation of the Queue class and it's instances`, () => {

  it(`should create an empty instance of a queue`, () => {

    let actualQueue = new Queue();

    expect(actualQueue).toBeDefined();

  });

  it(`should assign the Queue.front value to be null when first creted`, () => {

    let actualQueue = new Queue();

    expect(actualQueue.front).toBeNull();

  });

});

describe(`Test the manipulation of the Queue`, () => {

  it(`should add values to the Queue from the back and return the first value added`, () => {

    const enterQueue = new Queue();

    for (let i = 1; i < 6; i++) {
      enterQueue.enqueue(i);
    }

    const actual = enterQueue.front();
    expect(actual.value).toBe(1);

  });

  it(`should remove the front value in the queue and return it`, () => {
    const exitQueue = new Queue();

    for (let i = 10; i > 0; i--) {
      exitQueue.enqueue(i);
    }

    const actual = exitQueue.dequeue();

    expect(actual.value).toBe(10);


  });

  it(`should return the value at the front of the Queue`, () => {
    const peekQueue = new Queue();

    for (let i = 1; i < 11; i++) {
      peekQueue.enqueue(i);
    }

    const actual = peekQueue.front();
    expect(actual.value).toBe(1);

  });

});
