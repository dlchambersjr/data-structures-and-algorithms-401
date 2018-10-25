# 8 - Merge two linked lists
Problem Domain:  

# Challenge


# Methods

### merge()
* Arity of 2
* Receives two linked lists and returns a new list that has "zippered".

## Solution
![whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/ll-merge.jpg)



# 7 - Linked List kth from the end.
Problem Domain:  Create a solution that will take an established liked list and find the value that is located "kth" from the end.

# Challenge
I need to create a method with an arity of 1 that receives a value.  It will then iterate over the list and find the value that is equal to the node in the linked list position that is equal to the position (value) from the end of the list.

# Methods

### findKth()
* Arity of 1
* Receives an argument that is used to indicate the kth node from the back.
* Once found, it will return the value of the node at the kth position.

## Solution
![whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/ll-kth-from-end.jpg)



# 06 - Linked List Insertions
Problem Domain:

# Challenge

# Methods

append ()
insertBefore()
insertAfter ()

## Solution
![whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/ll-insertions.jpg)



# Lab-05 Linked lists (SINGLY LINKED LIST)

## Summary
Problem Domain:  A solution is needed that will create a class called ```Linkedlist```.  This class will accept nodes and maintain a ```head``` property to point to the first node in the list.  Three methods will be attached to ```Linkedlist```, (```insert```, ```includes```, and ```print```), to manipulate the list.  There will also be a ```Node``` class that will create instances of ```Node``` to be added to the linked list.

## Challenge
Same as above...

## Methods

### insert(arity 1)
* Used to insert a node into the first position of the list.
* It will receive a value to be used when the node is created.
* It will move the HEAD pointer to redirect to the new node.

### includes(arity 1)
* Used to find a particular value in the list.
* It will receive a value to be searched for.
* it will return a boolean response based on whether the value exists or not.

### print(arity 0)
* Used to display the values of all nodes in the list.
* Does not receive any values

## Testing
ALL TESTS PASS WITH 100% Coverage

The following tests were performed:

### Verify the classes work
* Can I create an empty list - expects null for head
* Can I create an new node - expects 'Code Fellows' for value and null for next

### Insert
* insert-1: Inserting to an empty list - expects 'a' for the head from the node being added.
* insert-2: Inserting when other nodes are present - expects the value of the head to equal 'b'
* insert-3: Inserting when other nodes are present - expects the value of the inserted node's next to be 'a'
* insert-4: Verify a value is passed to insert - returns 'Please pass a value to be added'

### Include
* include-1: Return false if the value is NOT in the list
* include-2: Return true if the value IS in the list
* include-3: Check to see if a value is passed - returns 'A Value is required'
* include-4: Check to see if there is a list to search - returns 'Nothing to search - EMPTY LIST'

### Print
* print-1: Returns 'EMPTY' if the list is empty/doesn't exist
* print-2: Returns the list in form of a string of comma-separated values.