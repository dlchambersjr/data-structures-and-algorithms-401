'use strict';

// Testing module for linked-list.js

const listClasses = require('../libs/linked-list/linked-list');
const Linkedlist = listClasses.Linkedlist;
const Node = listClasses.Node;

describe('Test the creation of each class', () => {

  it('should create a new LinkedList and return null for both .head and .next', () => {

    const list = new Linkedlist();

    const actualHead = list.head;

    const expectedHead = null;
    expect(actualHead).toBe(expectedHead);

  });

  it('should create a new Node and return the passed value and null for .next', () => {

    const newNode = new Node('Code Fellows', null);

    const actualValue = newNode.value;
    const expectedValue = 'Code Fellows';
    const actualNext = newNode.next;
    const expectedNext = null;

    expect(actualValue).toBe(expectedValue);
    expect(actualNext).toBe(expectedNext);

  });

});

describe('Test the insertion of a new node into the list.', () => {

  it(`should return head = 'a' when the list is empty`, () => {

    const emptyList = new Linkedlist();
    const actual = emptyList.insert('a');
    const expected = 'a';

    expect(actual.head.value).toBe(expected);

  });

  it(`should return head = 'b' if the list is not empty.`, () => {

    const filledList = new Linkedlist();
    filledList.insert('a');

    const actual = filledList.insert('b');
    const expected = 'b';
    expect(actual.head.value).toBe(expected);

  });

  it(`should return next = 'b' of the node being inserted.`, () => {
    const filledList = new Linkedlist();
    filledList.insert('a');

    const actual = filledList.insert('b');
    const expected = 'a';

    expect(actual.head.next.value).toBe(expected);
  });

  it(`should return 'Please pass a value to be added' if no value is passed`, () => {

    const filledList = new Linkedlist();

    const actual = filledList.insert();
    const expected = 'Please pass a value to be added';

    expect(actual).toBe(expected);

  });

});

describe('Test to see if a particualr value is in list', () => {

  it('should return false if the value is not present', () => {

    const includedList = new Linkedlist();
    includedList.insert('a');
    includedList.insert('b');
    includedList.insert('c');

    const actual = includedList.includes('d');

    expect(actual).toBeFalsy();

  });

  it('should return a true if the value is present', () => {

    const includedList = new Linkedlist();
    includedList.insert('a');
    includedList.insert('b');
    includedList.insert('c');

    const actual = includedList.includes('a');

    expect(actual).toBeTruthy();
  });

  it(`should return null if the list is empty`, () => {
    const includedList = new Linkedlist();
    const actual = includedList.includes();
    const expected = 'A value is required';

    expect(actual).toBe(expected);

  });

  it(`should return 'EMPTY LIST' if the list is empty`, () => {

    const includedList = new Linkedlist();
    const actual = includedList.includes('a');
    const expected = 'Nothing to search - EMPTY LIST';

    expect(actual).toBe(expected);
  });

});

describe('Test to see if the list can be displayed', () => {

  it(`should return 'EMPTY' if there is nothing in the list`, () => {
    const printList = new Linkedlist();
    printList.insert('a');
    printList.insert('b');
    printList.insert('c');

    const actual = printList.print();
    const expected = 'c,b,a';

    expect(actual).toBe(expected);

  });

  it(`should return a string of items in the list`, () => {
    const printList = new Linkedlist();

    const actual = printList.print();
    const expected = 'EMPTY';

    expect(actual).toBe(expected);

  });

});