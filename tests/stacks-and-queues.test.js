'use strict';

const classes = require('../libs/stacksAndQueues/stacks-and-queues.js');
const Stack = classes.Stack;
const Node = classes.Node;
const Queue = classes.Queue;

describe(`Test to verify the proper creation of the Stack class and it's instances`, () => {

  it(`should create an instance of a stack/node`, () => {

    let actualStack = new Stack();
    let actualNode = new Node();

    expect(actualStack).toBeDefined();
    expect(actualNode).toBeDefined();

  });

  it(`should assign the Stack.top and Node.value to be null when first created`, () => {

    let actualStack = new Stack();
    let actualNode = new Node();

    expect(actualStack.top).toBeNull();
    expect(actualNode.value).toBeNull();

  });

});

describe(`Test the push method for stacks`, () => {

  it(`should add a value and assign the top to that value when the stack is empty`, () => {

    const pushStack = new Stack();

    pushStack.push(1);

    const actual = pushStack.peek();
    expect(actual.value).toBe(1);
    expect(pushStack.top.value).toBe(1);

  });

  it(`should add a value and assign the top to that value when the stack already has values`, () => {

    const pushStack = new Stack();

    pushStack.push(1);
    pushStack.push('a');

    const actual = pushStack.peek();
    expect(actual.value).toBe('a');
    expect(pushStack.top.value).toBe('a');

  });

  it(`should throw an error if no value is sent`, () => {

    const pushStack = new Stack();
    const actual = pushStack.push();
    expect(actual).toBe('Please enter a number');

  });

});

describe(`Test the pop method for stacks`, () => {

  it(`should return 'EMPTY LIST' if there are no values in the stack`, () => {

    const emptyPopStack = new Stack();

    const actual = emptyPopStack.pop()
    expect(actual).toBe('EMPTY STACK');

  });

  it(`should remove the top value of the stack, reassign the top, and return the popped value when there is more than one item in the stack`, () => {
    const popStack = new Stack();

    for (let i = 10; i > 0; i--) {
      popStack.push(i);
    }

    const actual = popStack.pop();
    expect(actual.value).toBe(1);
    expect(popStack.peek().value).toBe(2);

  });

  it(`should return top as null when the last value of the stack is popped.`, () => {

    const oneItemPopStack = new Stack();
    oneItemPopStack.push(1);

    const actual = oneItemPopStack.pop();
    expect(actual.value).toBe(1);
    expect(oneItemPopStack.top).toBeNull();

  });


});

describe(`Test the peek method for stacks`, () => {

  it(`should return the value at the top of the stack`, () => {
    const peekStack = new Stack();

    for (let i = 1; i < 11; i++) {
      peekStack.push(i);
    }
    console.log(peekStack.top);

    const actual = peekStack.peek();
    console.log(actual);
    expect(actual.value).toBe(10);

  });

  it(`should return 'EMPTY LIST' when there are no values inthe stack`, () => {
    const peekStack = new Stack();

    const actual = peekStack.peek();
    expect(actual).toBe('EMPTY LIST');

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

describe(`Test the enqueue method`, () => {

  it(`should add a value from the back and assign front to that value when the queue is empty`, () => {

    const enterQueue = new Queue();

    for (let i = 1; i < 6; i++) {
      enterQueue.enqueue(i);
    }

    const actual = enterQueue.peek();
    expect(actual.value).toBe(1);

  });

  xit(`should add a value to the back and NOT change the front when the queue already already has values`, () => {

    const pushStack = new Stack();

    pushStack.push(1);
    pushStack.push('a');

    const actual = pushStack.peek();
    expect(actual.value).toBe('a');
    expect(pushStack.top.value).toBe('a');

  });

  xit(`should throw an error if no value is sent`, () => {

    const pushStack = new Stack();
    const actual = pushStack.push();
    expect(actual).toBe('Please enter a number');

  });

});

xdescribe(`Test the dequeue method`, () => {

  it(`should add values to the Queue from the back and return the first value added`, () => {

    const enterQueue = new Queue();

    for (let i = 1; i < 6; i++) {
      enterQueue.enqueue(i);
    }

    const actual = enterQueue.peek();
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

    const actual = peekQueue.peek();
    expect(actual.value).toBe(1);

  });

});

xdescribe(`Test the peek method for the Queue`, () => {

  it(`should add values to the Queue from the back and return the first value added`, () => {

    const enterQueue = new Queue();

    for (let i = 1; i < 6; i++) {
      enterQueue.enqueue(i);
    }

    const actual = enterQueue.peek();
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

    const actual = peekQueue.peek();
    expect(actual.value).toBe(1);

  });

});
