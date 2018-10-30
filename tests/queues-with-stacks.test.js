'use strict';

const classes = require('../libs/queueWithStacks/queue-with-stacks.js');
const Stack = classes.Stack;
const PseudoQueue = classes.PseudoQueue;

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

describe(`Test the enqueue method`, () => {

  it(`should add a value from the back when the PseudoQueue is empty`, () => {

    const enterPseudoQueue = new PseudoQueue();

    for (let i = 1; i < 6; i++) {
      enterPseudoQueue.enqueue(i);
    }
    console.log(enterPseudoQueue.enterStack.storage);

    const actual = enterPseudoQueue;
    expect(actual.enterStack.storage[0]).toBe(1);

  });

  it(`should add and remove values and maintain the correct front value.`, () => {

    const addToPseudoQueue = new PseudoQueue();

    for (let i = 1; i < 6; i++) {
      addToPseudoQueue.enqueue(i);
    }

    addToPseudoQueue.enqueue('a');
    addToPseudoQueue.enqueue('b');

    for (let i = 1; i < 6; i++) {
      addToPseudoQueue.dequeue();
    }

    addToPseudoQueue.enqueue('c');

    const actual = addToPseudoQueue;
    expect(actual.enterStack.storage[0]).toBe('a');

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

    const actual = exitPseudoQueue.dequeue();
    expect(actual).toBe(1);
    expect(exitPseudoQueue.enterStack.storage[0]).toBe(2);

  });

  it(`should return 'EMPTY QUEUE' if the queue is empty`, () => {
    const dequeueEmptyPseudoQueue = new PseudoQueue();

    const actual = dequeueEmptyPseudoQueue.dequeue();
    expect(actual).toBe('EMPTY QUEUE');

  });

});