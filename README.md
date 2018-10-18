# 03 Array Binary Search
We require a solution that will take in a sorted array of numbers and a value to be found within the array.  The solution will return the index value of the matched value or undefined if the value is not located in the array

## Challenge
The search needs to be efficient by repeatedly narroowing the search field through the elimation of half of the remaing numbers after each pass. 

## Stretch Goal
I created four additional sorted arrays with lengths of 100, 10,000, 100,000, 1,000,000.  I then searched each array for a number in the top and bottom half of the array.  Prior to adding these tests, the time to execute the four standard tests was .057s.  AFTER adding the four additional arrays... .406s ... WHAAAAT!   

I tried 100,000,000 by itself and I busted the memory stack.  I backed down to 50,000,000 and searched the extremes of 1 and 50,000,000 and it ONLY TOOK 3.896s  AWESOME!!!

## Solution
![array-binary-search-whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/array-binary-search.jpg)

# 02 Insert/Shift an Array
We require a solution that will accept both an array and a value to be insterted into the middle of the array

## Challenge
The primary challenge is to identify the middle of the array and insert the value at that position without using any built in methods.

## Solution
![array-shift-whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/array-shift.jpg)

# 01 Reverse an Array
We require a solution that will reverse the contents of an array without using an array method to accompish the task.

## Challenge
See above

## Solution
![array-reverse-whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/array-reverse.jpg)
