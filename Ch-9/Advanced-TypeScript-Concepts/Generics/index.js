function createArray(length, defaultValue) {
    return Array.from({ length: length }, function () { return defaultValue; });
}
// Example usage:
var stringArray = createArray(58, "Hello");
var numberArray = createArray(356, 8942);
var booleanArray = createArray(594, true);
console.log(stringArray);
console.log(numberArray);
console.log(booleanArray);
