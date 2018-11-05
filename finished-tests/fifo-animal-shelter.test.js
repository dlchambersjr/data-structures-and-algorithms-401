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

    const actual = enterShelter;
    expect(actual.enterStack.storage[0]).toBe('cat-1');

  });

  it(`should add values and maintain the correct front value.`, () => {

    const addToShelter = new AnimalShelter();
    addToShelter.enqueue('dog-1');
    addToShelter.enqueue('cat-1');

    addToShelter.enqueue('cat-2');

    const actual = addToShelter;
    expect(actual.enterStack.storage[0]).toBe('dog-1');

  });

  it(`should return 'Please enter a value' if no value is sent`, () => {

    const noValueShelter = new AnimalShelter();
    const actual = noValueShelter.enqueue();
    expect(actual).toBe('Please enter a Cat or Dog');

  });

});

describe(`Test the dequeue method`, () => {

  it(`should remove and return the first requested cat in the Queue`, () => {

    const exitShelter = new AnimalShelter();

    exitShelter.enqueue('cat');
    exitShelter.enqueue('cat');
    exitShelter.enqueue('dog');
    exitShelter.enqueue('dog');
    exitShelter.enqueue('cat');

    const actual = exitShelter.dequeue('cat');
    expect(actual).toBe('cat');
    expect(exitShelter.enterStack.storage[0]).toBe('cat');

  });

  it(`should remove and return the first dog in the Queue`, () => {

    const exitShelter = new AnimalShelter();

    exitShelter.enqueue('cat');
    exitShelter.enqueue('cat');
    exitShelter.enqueue('dog');
    exitShelter.enqueue('dog');
    exitShelter.enqueue('cat');

    const actual = exitShelter.dequeue('dog');
    expect(actual).toBe('dog');
    expect(exitShelter.enterStack.storage[0]).toBe('cat');
    expect(exitShelter.enterStack.storage[2]).toBe('dog');


  });

  it(`should remove and return the animal in the Queue`, () => {

    const exitShelter = new AnimalShelter();

    exitShelter.enqueue('dog');
    exitShelter.enqueue('cat');
    exitShelter.enqueue('dog');
    exitShelter.enqueue('dog');
    exitShelter.enqueue('cat');

    const actual = exitShelter.dequeue();
    expect(actual).toBe('dog');
    expect(exitShelter.enterStack.storage[0]).toBe('cat');
    expect(exitShelter.enterStack.storage[2]).toBe('dog');

  });

  it(`should return 'EMPTY QUEUE' if the queue is empty`, () => {
    const dequeueEmptyShelter = new AnimalShelter();

    const actual = dequeueEmptyShelter.dequeue();
    expect(actual).toBe('No animals in the Shelter');

  });

});