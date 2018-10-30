'use strict';

const classes = require('../libs/fifoAnimalShelter/fifo-animal-shelter.js');

const AnimalShelter = classes.AnimalShelter;

//AnimalShelter Queue

describe(`Test to verify the proper creation of the AnimalShelter class`, () => {

  it(`should create an empty instance of an AnimalShelter`, () => {

    let shelter = new AnimalShelter();

    expect(shelter).toBeDefined();

  });

  it(`should create two instances of a stack class as properties .`, () => {

    let stacksInShelter = new AnimalShelter();

    expect(stacksInShelter.enterStack).toBeDefined();
    expect(stacksInShelter.exitStack).toBeDefined();

  });

});

describe(`Test the enqueue method`, () => {

  it(`should add a value from the back when the AnimalShelter is empty`, () => {

    const enterShelter = new AnimalShelter();

    enterShelter.enqueue('cat-1');

    console.log(enterShelter.enterStack.storage);

    const actual = enterShelter;
    expect(actual.enterStack.storage[0]).toBe(1);

  });

  it(`should add and remove values and maintain the correct front value.`, () => {

    const addToShelter = new AnimalShelter();

    for (let i = 1; i < 6; i++) {
      addToShelter.enqueue(i);
    }

    addToShelter.enqueue('a');
    addToShelter.enqueue('b');

    for (let i = 1; i < 6; i++) {
      addToShelter.dequeue();
    }

    addToShelter.enqueue('c');

    const actual = addToShelter;
    expect(actual.enterStack.storage[0]).toBe('a');

  });

  it(`should return 'Please enter a value' if no value is sent`, () => {

    const noValueShelter = new AnimalShelter();
    const actual = noValueShelter.enqueue();
    expect(actual).toBe('Please enter a value');

  });

});

xdescribe(`Test the dequeue method`, () => {

  it(`should remove and return the first value in the Queue`, () => {

    const exitShelter = new AnimalShelter();

    for (let i = 1; i < 6; i++) {
      exitShelter.enqueue(i);
    }

    const actual = exitShelter.dequeue();
    expect(actual).toBe(1);
    expect(exitShelter.enterStack.storage[0]).toBe(2);

  });

  it(`should return 'EMPTY QUEUE' if the queue is empty`, () => {
    const dequeueEmptyShelter = new AnimalShelter();

    const actual = dequeueEmptyShelter.dequeue();
    expect(actual).toBe('EMPTY QUEUE');

  });

});