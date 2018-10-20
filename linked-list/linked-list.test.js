'use strict';

const listClasses = require('./linked-list');

console.log(listClasses);

const Linkedlist = listClasses.Linkedlist;
const Node = listClasses.Node;


describe('Test the creation of each class', () => {

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

  it('should return null if the list is empty', () => {

    const currentList = new Linkedlist();

    const actual = currentList.insert('a');
    const expected = null;

    expect(actual).toBe(expected);

  });

  it('should return the current head if there are nodes.', () => { });

  it('should return the current next if there are nodes.', () => { });

  it('should return the new nodes next after insertion', () => { });

});

xdescribe('Test to see if a particualr value is in list', () => { });

xdescribe('Test to see if the list can be displayed', () => { });