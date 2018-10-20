'use strict';

const listClasses = require('../libs/linked-list/linked-list');

const Linkedlist = listClasses.Linkedlist;
const Node = listClasses.Node;

xdescribe('Test the creation of each class', () => {

  it('should create a new LinkedList and return null for both .head and .next', () => {

    const list = new Linkedlist();

    const actualHead = list.head;
    const expectedHead = null;
    const actualNext = list.head;
    const expectedNext = null;

    expect(actualHead).toBe(expectedHead);
    expect(actualNext).toBe(expectedNext);

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

  xit(`should return head when the list is empty to 'a'`, () => {

    const emptyList = new Linkedlist();

    const actual = emptyList.insert('a');
    const expected = 'a';

    expect(actual.head).toBe(expected);

  });

  xit('should return the current head if there are nodes.', () => {

    const filledList = new Linkedlist();
    filledList.insert('a');

    const actual = filledList.insert('b');
    const expected = 'a';

    expect(actual.head).toBe(expected);

  });

  it('should return the 1st nodes next if there are nodes.', () => {
    const filledList = new Linkedlist();
    filledList.insert('a');
    filledList.insert('b');

    const actual = filledList.insert('c');
    const expected = 'b';

    expect(actual.next).toBe(expected);


  });

  xit('should return the new nodes next after insertion', () => { });

});

xdescribe('Test to see if a particualr value is in list', () => { });

xdescribe('Test to see if the list can be displayed', () => { });