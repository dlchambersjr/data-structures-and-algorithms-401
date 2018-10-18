function reverseArray(input) {
  let output = [];
  let count = input.length - 1;
  for (let i = 0; i < input.length; i++) {
    output[i] = input[count - i];
  }
  return output;
}