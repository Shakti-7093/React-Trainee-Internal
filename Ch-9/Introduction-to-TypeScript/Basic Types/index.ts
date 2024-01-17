let number:number = 42;
let string:string = "Hello World!";
let boolean:boolean = true;
let array:number[] = [1, 2, 3];
let tuple:[string, number] = ["TypeScript", 2023];
let any:any = "I can be anything!";

let assertionONE:any = "This is a string";
let assertionLengthONE:number = (assertionONE as string).length;

let assertionTWO:any = 258561;
let assertionLengthTWO:number = (<string>assertionTWO).length;

let typeBigInt:bigint = 524521854512n;

let typeNumber = 425;
let typeString = "String";

function add(a:number, b:number) {
    return a + b;
}

let result = add(10, 5);

let typeArray = [25, 20, 485, 56846];

let typeObject = { name: "Shakti", age: 18 };

console.log(number, string, boolean, array, tuple, any);
console.log(assertionLengthONE, assertionLengthTWO);
console.log(result, typeArray, typeObject, typeNumber, typeString);
console.log(typeBigInt);