type Person = {
    name: string;
};

const person : Person = {
    name:"Jon",
};
console.log(person.name)

// Annotation of string
let myName : string = "Sazid";
myName = "Another Name"
console.log(myName)

// Annotation of Number
// let favNumber : number = 7;
// favNumber += 2
// console.log(favNumber)

// Boolean Annotation
let isHard : boolean = false;
console.log(isHard)

// Type inference
// In TypeScript, type inference refers to the compiler's ability to automatically determine the type of a variable or expression based on how it is initialized or used, without the need for explicit type annotations.

// Here we're inferring the types!
let tech = "TypeScript";
let favNumber = 8;
let tsHard = true;

console.log(tech, favNumber, tsHard);

// ERROR
// tech = false
// favNumber = "Hello"
// tsHard = 20

// Any Type 
let color: any = "crimson";
color = 20;
color = true;
color();
color.toUpperCase();
console.log(color);

// ____________________________Function Parameter________________
// 1. Parameter Annotation
 
// Regular Func
function addOne(num: number) {
    return num + 1;
  }
  
  const result = addOne(3);
  console.log(result);
  
  // Arrow Func Annotations
  const double = (x: number, y: number) => x * y;
  const res = double(2, 10);
  console.log(res);
  
  // Also notice, TypeScript will gives you warning if you provide more or less arguments then you specifiy in your parameters area.
  
  // double(2, 10, 20); // 👈 Warning