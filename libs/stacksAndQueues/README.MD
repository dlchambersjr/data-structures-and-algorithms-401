# CODE: Stacks and Queues Linked lists (SINGLY LINKED LIST)

## Summary
Problem Domain-1:  A solution is needed that will create a class called ```Stack```.  This class will accept nodes from a ```Node``` class to be stored in a ```storage``` property.  It will also maintain a ```top``` property to point to the top node in the stack.  Three methods will be attached to the class, (```push```, ```pop```, and ```peek```), to manipulate the stack.  

Problem Domain-2:  A solution is needed that will create a class called ```Queues```.  This class will accept nodes from a ```Node``` class to be stored in a ```storage``` property.  It will also maintain a ```front``` property to point to the first node in the queue.  Three methods will be attached to the class, (```enqueue```, ```dequeue```, and ```peek```), to manipulate the queue.

## Challenge
Same as above...

## Stack Methods

### push(arity 1)
* Used to add a node on the top of the stack.
* It will receive a value to be used when the node is created.
* It will move the TOP pointer to redirect to the new node.

### pop(arity 0)
* Used to remove the top node from the stack
* will return the node being removed or EMPTY STACK if there are no nodes present.

### peek(arity 0)
* Used to reveal the top node on the stack.
* Does not receive any values
* Will return EMPTY STACK if the stack is empty.

## Queue Methods

### enqueue(arity 1)
* Used to add a node to the rear of the queue.
* It will receive a value to be used when the node is created.
* It will move the FRONT pointer to redirect to first node in the list.

### dequeue(arity 0)
* Used to remove the the first node in the front of the queue
* Will return the node being removed or EMPTY QUEUE if there are no nodes present.
* Will redirect front to be the new first node in the queue

### peek(arity 0)
* Used to reveal the first node in the queue.
* Does not receive any values
* Will return EMPTY QUEUE if the queue is empty.

## Testing
ALL TESTS PASS WITH 97.37% Coverage

The following tests were performed:

### Verify the classes work
* Can I create an empty Stack - expects null for top.
* Can I create an empty Queue - expects null for queue.
* Can I create an empty node - expects null value

### Stack.push()
* push-1: adding to an empty stack and assigning the value.
* push-2: adding to a stack that has nodes and re-pointing TOP.
* push-3: asks for a value if nothing is sent.

### Stack.pop()
* pop-1: Return EMPTY STACK if there are no nodes.
* pop-2: Remove the top of the stack and re-point the TOP.
* pop-3: Returns the top Node in the list and sets TOP to null if no node remain.

### Stack.peek()
* peek-1: Returns 'EMPTY STACK if there are no nodes.
* peek-2: Returns the top node in the stack.

### Queue.enqueue()
* enqueue-1: add a value to the back of the queue when it's empty and assign the value to front.
* enqueue-2: add a value to the rear of the queue when there are already items in the queue.
* enqueue-3: Return 'Please enter a number' when no value is entered.

### Queue.dequeue()
* dequeue-1: Remove a node from the front of the queue and re-point the front.
* dequeue-2: Remove the last item in the queue and re-point the front to null.
* dequeue-3: Return EMPTY QUEUE when trying to remove a value when nothing is there.

### Queue.peek()
* peek-1: Returns 'EMPTY QUEUE if there are no nodes.
* peek-2: Returns the first node in the queue.