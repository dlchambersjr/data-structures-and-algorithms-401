# CODE: Queues with Stacks

## Summary
Problem Domain: A PseudoQueue class needs to be created that has only two stacks as properties.  Then, by using the built in methods of a predefined stack class, two methods, enqueue and dequeue, will be added to the PseudoQueue class to process values in and out of the PseudoQueue.

## Challenge
Users of the PseudoQueue class should not be aware that the methods of push(), pop(), and peek() are being used to actually manage the contents of the queue.


## Solution
![whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/queues-with-stacks.jpg)


## Queue Methods

### enqueue(arity 1)
*  Receives a value to be added to the PseudoQueue

### dequeue(arity 0)
*  

## Testing
ALL TESTS PASS WITH 97.37% Coverage

The following tests were performed:

### Verify the PseudoQueue class works
* Can I create an empty instance of a PSeudoQueue.
* Are two empty instances of the stack class added to the instance of the PseudoQueue.

### Queue.enqueue()
* enqueue-1: add a value to the back of the queue when it's empty.
* enqueue-2: add a value to the rear of the queue when there are already items in the queue.
* enqueue-3: Return 'Please enter a value' when no value is entered.

### Queue.dequeue()
* dequeue-1: Remove and return the value at the front of the queue.   
* dequeue-2: Return EMPTY QUEUE when trying to remove a value when nothing is there.
