'use strict';

// Testing module for linked-list.js

const listClasses = require('../libs/linked-list/linked-list');
const Linkedlist = listClasses.Linkedlist;
const Node = listClasses.Node;

xdescribe('Test the creation of each class', () => {

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

xdescribe('Test the insertion of a new node into the list.', () => {

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

xdescribe('Test to see if a particualr value is in list', () => {

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

xdescribe('Test to see if the list can be displayed', () => {

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

// Lab-06
xdescribe('Tests to APPEND a node to the END of the list', () => {

  it('should append to the end if the list is empty', () => {
    const appendList = new Linkedlist();

    const actual = appendList.append('a');

    expect(actual.next).toBeNull();

  });

  it('should append to the list if there are already nodes', () => {

    const appendList = new Linkedlist();
    appendList.insert('a');
    appendList.insert('b');
    appendList.insert('c');

    appendList.append('5');

    const actual = appendList.head.next.next.next.next;

    expect(actual).toBeNull();


  });

  it('it should only append if there is a value passed', () => {

    const appendList = new Linkedlist();

    const actual = appendList.append();
    const expected = 'Please pass a value to be added';

    expect(actual).toBe(expected);

  });

});

xdescribe('Tests to INSERT a node BEFORE a node with a specifc value', () => {

  it('should insert if the list is empty', () => { });

  it('should insert before the target node if there are items in the list', () => { });

  it('should insert before the first node with targeted value', () => { });

});

xdescribe('Tests to INSERT a node AFTER a node with a specific value', () => {

  it('should insert if the list is empty', () => { });

  it('should insert after the target node if there are items in the list', () => { });

  it('should insert after the first node with targeted value', () => { });

});

// Lab-07 kth from the end
describe('Test for inserting a node kth from the end', () => {

  it('should return the value of the last node when kth from end is equal to the last node', () => {

    const endOfList = new Linkedlist();
    endOfList.insert('0');
    endOfList.insert('1');
    endOfList.insert('2');
    endOfList.insert('3');
    endOfList.insert('4');



    const actual = endOfList.findKth(0);
    const expected = '0';

    expect(actual).toBe(expected);

  });

  it('should return the value of the first node when kth from end is equal to the first node', () => {

    const endOfList = new Linkedlist();
    endOfList.insert('0');
    endOfList.insert('1');
    endOfList.insert('2');
    endOfList.insert('3');
    endOfList.insert('4');

    const actual = endOfList.findKth(4);
    const expected = '4';

    expect(actual).toBe(expected);

  });

  it(`should return 'Empty List' when there are no nodes`, () => {

    const endOfList = new Linkedlist();

    const actual = endOfList.findKth(4);
    const expected = 'Empty List';

    expect(actual).toBe(expected);

  });

  it(`should return 'List is too small' when there are no nodes`, () => {

    const endOfList = new Linkedlist();
    endOfList.insert('0');
    endOfList.insert('1');
    endOfList.insert('2');
    endOfList.insert('3');
    endOfList.insert('4');

    const actual = endOfList.findKth(5);
    const expected = 'List is too small';

    expect(actual).toBe(expected);

  });

});