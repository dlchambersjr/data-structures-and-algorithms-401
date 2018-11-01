# CODE: multiBracketValidation

## Summary
Problem Domain: A solution is needed that will evaluate a string and return a boolean describing if the brackets are balanced (e.g., there is an opening and closing bracket (round, square, or curly) in the proper order for each bracket in the string).

## Challenge
same as above


## Solution
![whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/multi-bracket-validation.jpg)


## Function

### multiBracketValidation(arity 1)
* Receives a string value to be evaluated for balanced brackets
* Returns TRUE if the brackets are balanced
* Returns FALSE if the brackets are NOT balanced

## Testing
ALL TESTS PASS WITH 100% Coverage

The following tests were performed:

### Check for odd number of brackets
* Will evaluate the number of brackets in the string.
* Returns ```false``` if the number is odd since it is impossible to be balanced.

### Filter everything but brackets from string
* Checks a known balanced bracket string with characters to determine if it is balanced.
* Will return TRUE if all the characters are removed.

### Check for balanced brackets
* Checks a known balanced bracket string (without characters).
* Returns TRUE because its balanced.

### Check for UNbalanced brackets
* Checks a known UNbalanced bracket string (without characters).
* Returns FALSE because its balanced.
