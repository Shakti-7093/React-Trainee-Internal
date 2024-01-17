function addition(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

const numbers = [10, 25, 53, 84, 15];
const result = addition(numbers);
console.log("The sum of the array is:", result);