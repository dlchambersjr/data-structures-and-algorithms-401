'use strict';

//Module for binarySearch

module.exports = (inputArray, value) => {
  
  let startIndex = 0;
  let endIndex = inputArray.length - 1;

  while (startIndex <= endIndex ){
    let midIndex = Math.ceil((startIndex + endIndex)/2);

    if(value === inputArray[midIndex]){
      return midIndex;

    } else if(value < inputArray[midIndex]){
      endIndex = midIndex - 1; 

    } else startIndex = midIndex + 1;
  }

  return undefined;
};
