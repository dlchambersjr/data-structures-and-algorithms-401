'use strict';

const classes = require('../libs/queueWithStacks/queue-with-stacks.js');
const Stack = classes.Stack;
const PseudoQueue = classes.PseudoQueue;

xdescribe(`Test to verify the proper creation of the Stack class and it's instances`, () => {

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

xdescribe(`Test the push method for stacks`, () => {

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

  it(`should ask for a number if no value is sent`, () => {

    const pushStack = new Stack();
    const actual = pushStack.push();
    expect(actual).toBe('Please enter a number');

  });

});

xdescribe(`Test the pop method for stacks`, () => {

  it(`should return 'EMPTY STACK' if there are no values in the stack`, () => {

    const emptyPopStack = new Stack();

    const actual = emptyPopStack.pop();
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

  it(`should set top as null when the last value of the stack is popped.`, () => {

    const oneItemPopStack = new Stack();
    oneItemPopStack.push(1);

    const actual = oneItemPopStack.pop();
    expect(actual.value).toBe(1);
    expect(oneItemPopStack.top).toBeNull();

  });


});

xdescribe(`Test the peek method for stacks`, () => {

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

  it(`should return 'EMPTY STACK' when there are no values inthe stack`, () => {
    const peekStack = new Stack();

    const actual = peekStack.peek();
    expect(actual).toBe('EMPTY STACK');

  });

});

xdescribe(`Test to verify the proper creation of the PseudoQueue class and it's instances`, () => {

  it(`should create an empty instance of a PseudoQueue`, () => {

    let actualPseudoQueue = new PseudoQueue();

    expect(actualPseudoQueue).toBeDefined();

  });

  it(`should assign the PseudoQueue.front value to be null when first creted`, () => {

    let actualPseudoQueue = new PseudoQueue();

    expect(actualPseudoQueue.front).toBeNull();

  });

});

xdescribe(`Test the enPseudoQueue method`, () => {

  it(`should add a value from the back and assign front to that value when the PseudoQueue is empty`, () => {

    const enterPseudoQueue = new PseudoQueue();

    for (let i = 1; i < 6; i++) {
      enterPseudoQueue.enPseudoQueue(i);
    }

    const actual = enterPseudoQueue.peek();
    expect(actual.value).toBe(1);

  });

  it(`should add a value to the back and NOT change the front when the PseudoQueue already already has values`, () => {

    const addToPseudoQueue = new PseudoQueue();

    addToPseudoQueue.enPseudoQueue(1);
    addToPseudoQueue.enPseudoQueue('a');

    const actual = addToPseudoQueue.peek();
    expect(actual.value).toBe(1);

  });

  it(`should return 'Please enter a number' if no value is sent`, () => {

    const pushStack = new Stack();
    const actual = pushStack.push();
    expect(actual).toBe('Please enter a number');

  });

});

xdescribe(`Test the dePseudoQueue method`, () => {

  it(`should remove values from the PseudoQueue from the front and repoint front to the new front`, () => {

    const exitPseudoQueue = new PseudoQueue();

    for (let i = 1; i < 6; i++) {
      exitPseudoQueue.enPseudoQueue(i);
    }

    const actual = exitPseudoQueue.dePseudoQueue();
    expect(actual.value).toBe(1);
    expect(exitPseudoQueue.front.value).toBe(2);

  });

  it(`should set the front to null when removing the last value in the PseudoQueue`, () => {
    const lastValuePseudoQueue = new PseudoQueue();

    lastValuePseudoQueue.enPseudoQueue('Z');

    const actual = lastValuePseudoQueue.dePseudoQueue();
    const actualFront = lastValuePseudoQueue.peek();
    expect(actual.value).toBe('Z');
    expect(actualFront).toBe('EMPTY PseudoQueue');

  });

  it(`should return 'EMPTY PseudoQueue' if the list is empty`, () => {
    const peekPseudoQueue = new PseudoQueue();

    const actual = peekPseudoQueue.dePseudoQueue();
    expect(actual).toBe('EMPTY PseudoQueue');

  });

});

xdescribe(`Test the peek method for the PseudoQueue`, () => {

  it(`should return the value at the front of the PseudoQueue`, () => {
    const peekPseudoQueue = new PseudoQueue();

    for (let i = 1; i < 11; i++) {
      peekPseudoQueue.enPseudoQueue(i);
    }

    const actual = peekPseudoQueue.peek();
    expect(actual.value).toBe(1);

  });

  it(`should return 'EMPTY PseudoQueue' if the PseudoQueue is empty`, () => {
    const emptyPeekPseudoQueue = new PseudoQueue();

    const actual = emptyPeekPseudoQueue.peek();
    expect(actual).toBe('EMPTY PseudoQueue');

  });

});

//PseudoPseudoQueue

describe(`Test to verify the proper creation of the PseudoQueue class`, () => {

  it(`should create an empty instance of a PseudoQueue`, () => {

    let actualPseudoQueue = new PseudoQueue();

    expect(actualPseudoQueue).toBeDefined();

  });

  it(`should create two instances of a stack class as properties .`, () => {

    let stacksInPseudoQueue = new PseudoQueue();

    expect(stacksInPseudoQueue.enterStack).toBeDefined();
    expect(stacksInPseudoQueue.exitStack).toBeDefined();

  });

});

describe(`Test the enPseudoQueue method`, () => {

  it(`should add a value from the back and assign front to that value when the PseudoQueue is empty`, () => {

    const enterPseudoQueue = new PseudoQueue();

    for (let i = 1; i < 6; i++) {
      enterPseudoQueue.enqueue(i);
    }
    console.log(enterPseudoQueue.enterStack.storage);

    const actual = enterPseudoQueue;
    expect(actual.enterStack.storage[0]).toBe(1);

  });

  it(`should add a value to the back and not change the front`, () => {

    const addToPseudoQueue = new PseudoQueue();

    for (let i = 1; i < 6; i++) {
      addToPseudoQueue.enqueue(i);
    }

    addToPseudoQueue.enqueue('a');

    console.log(addToPseudoQueue.enterStack.storage);

    const actual = addToPseudoQueue;
    expect(actual.enterStack.storage[0]).toBe(1);

  });

  it(`should return 'Please enter a value' if no value is sent`, () => {

    const noValuePseudoQueue = new PseudoQueue();
    const actual = noValuePseudoQueue.enqueue();
    expect(actual).toBe('Please enter a value');

  });

});

describe(`Test the dequeue method`, () => {

  it(`should remove and return the first value in the Queue`, () => {

    const exitPseudoQueue = new PseudoQueue();

    for (let i = 1; i < 6; i++) {
      exitPseudoQueue.enqueue(i);
    }

    console.log(exitPseudoQueue.enterStack.storage);
    const actual = exitPseudoQueue.dequeue();
    expect(actual).toBe(1);
    expect(exitPseudoQueue.enterStack.storage[0]).toBe(2);

  });

  it(`should return 'EMPTY QUEUE' if the list is empty`, () => {
    const dequeueEmptyPseudoQueue = new PseudoQueue();

    const actual = dequeueEmptyPseudoQueue.dequeue();
    expect(actual).toBe('EMPTY QUEUE');

  });

});