function createArray<T>(length: number, defaultValue: T): T[] {
    return Array.from({ length }, () => defaultValue);
}

const stringArray = createArray(58, "Hello");
const numberArray = createArray(356, 8942);
const booleanArray = createArray(594, true);

console.log(stringArray);

console.log(numberArray);

console.log(booleanArray);