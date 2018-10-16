'use strict';

// Module f0r insertShiftArray function

 module.exports = (arr, num) => {
 
if (arr === [] || num === '') {return null;}

 let newArr = []
 let midArr = Math.ceil(arr.length/2);

for (let i=0; i<arr.length; i++) {
    if (i===midArr) {
        newArr[newArr.length] = num;
    }
    newArr[newArr.length] = arr[i];
}

return newArray;
}