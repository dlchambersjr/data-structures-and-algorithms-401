# CODE: Queues with Stacks

## Summary
Problem Domain: A solution is needed that will create a queue of cats and dogs entering an animal shelter.  It will utilize a pre-existing stack class with methods of push(), pop(), and peek().  The queue will be manipulated by the methods of enqueue and dequeue, which can each receive a dog or cat as an argument.

## Challenge
End users should not be aware of the two stacks that are within the queue.  In addition, the user may request to dequeue the first cat, dog, or animal in the queue.


## Solution
![whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/fifo-animal-shelter.jpg)


## Queue Methods

### enqueue(arity 1)
* Receives a value to be added to the queue
* Adds teh value to the rear of the queue

### dequeue(arity 1)
* Receives an optional value (dog/cat/empty) to retrieve from the queue.
* Returns the first dog/cat/animal.

## Testing
ALL QUEUE TESTS PASS WITH 100% Coverage

The following tests were performed:

### Verify the queue class works
* Can I create an empty instance of a queue.
* Are two empty instances of the stack class added to the instance of the queue.

### Queue.enqueue()
* enqueue-1: add a value to the back of the queue when it's empty.
* enqueue-2: add a value to the rear of the queue when there are already items in the queue.
* enqueue-3: Return 'Please enter a Cat or Dog' when no value is entered.

### Queue.dequeue()
* dequeue-1: Remove and return the first cat in the queue when a cat is requested.   
* dequeue-2: Remove and return the first dog in the queue when a dog is requested.   
* dequeue-3: Remove and return the first animal in the queue when no preference is made.   
* dequeue-5: Return 'No animals in the Shelter' when trying to remove an animal that is not there.
