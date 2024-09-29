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

//   Default Parameter
function greet(person: string = "Anonymous") {
    return `Hello ${person}`;
  }
  
  const res1 = greet();
  console.log(res1);

//   Return Annotation 
// Regular Function
function double1(x: number): number {
    return x * x;
  }
  
  const res2 = double1(2);
  console.log(res2);
  
  // Using Arrow Functions
  const double2 = (x: number): number => x * x;
  const res3 = double2(2);
  console.log(res3);

//   Void Types 
function printMessage(message: string): void {
    console.log(`This is my message: ${message}`);
    // ERROR 👇
    // return message;
  }
  
  printMessage("Hello How Are You?");

// Never 
  // 1.
function throwError(msg: string): never {
  throw new Error(msg);
}

// 2.
function infiniteLoop(): never {
  while (true) {}
}

// 3.
let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns(); // This line will cause a compile-time error because the function never returns


// Arrays Type 
// -------------------------
const nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);

const str: string[] = ["one", "two", "three"];
console.log(str);
// -------------------------

// -------------------------
const items: string[] = [];
items.push("Remote");
items.push("Keyboard");
// items.push(21); // NO nO
console.log(items);

const numList: number[] = [];
numList.push(20);
numList.push(2000);
numList.push(-1);
// numList.push("Hello") // ERROR
console.log(numList);
// -------------------------

const items3: Array<string> = [];
// const items3: string[] = [];

const items4: Array<number> = [];
// const items4: numbers[] = []

// Multi dimensional array

const singleDi: number[] = [1, 2, 3, 4, 5];
const multiDi: number[][] = [[1, 2, 3, 4, 5]];
const triple: number[][][] = [[[1, 2, 3, 4, 5]]];

console.log(singleDi);
console.log(multiDi);
console.log(triple);

// Object in Typescript

// type variableName (annotations/types) = {property:value}

// -------------------------
// Define a person object
const person2: { firstName: string; lastName: string; age: number } = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// Access and log properties
console.log(`Name: ${person2.firstName} ${person2.lastName}, Age: ${person2.age}`);
// -------------------------

// -------------------------
// Using objects as function return value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Alex",
    age: 19,
    location: "USA",
  };
}

const res4 = printUser();
console.log(res4);

function printUserName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

printUserName({ firstName: "HuXn", lastName: "WebDev" });
// -------------------------

// Type-Alias
type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};

const result1 = printUserInfo({ name: "Alex", age: 20, location: "USA" });
console.log(result1); 


// Optional properties
type User1 = {
  name: string;
  age?: number;
  location: string;
};

const user: User1 = {
  name: "HuXn",
  age: 20,
  location: "Arabic",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);


// Read Only Property
type Person2 = {
  name: string;
  age: number;
  readonly email: string;
};

const user7: Person2 = {
  name: "John",
  age: 20,
  email: "test@gmail.com",
};

console.log(user7.email); // Valid
// user.email = "john@gmail.com" // 🚫 Not Valid

// Intersection Type
type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User5 = UserInfo & AccountDetails;

const huxn: User5 = {
  first: "HuXn",
  last: "WebDev",
  age: 18,
  email: "test@gmail.com",
  password: "strongpassword123",
};

console.log(
  `Name: (${huxn.first} ${huxn.last}) Age: (${huxn.age}) Email: (${huxn.email}) Password: (${huxn.password})`
);

// Union Types
let password: string | number = 20;

type UserInfo1 = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails1 = {
  email: string;
  password: string;
};

let user8: UserInfo1 | AccountDetails1 = {
  first: "HuXn",
  last: "WebDev",
  age: 29,
};

console.log(user8);

const items2: (number | string)[] = [1, 3, "hello"];
console.log(items);

// Literal Types
// ----------------------------
let color1: "red" | "blue" | "green";
color1 = "green";
console.log(color1);
// ----------------------------

// ----------------------------
let isTrue: true | false;
isTrue = true;
console.log(isTrue);
// ----------------------------

// ----------------------------
let number = 1 | 2 | 3;
number = 1;
console.log(number);
// ----------------------------

// ----------------------------
let password1: "secretpassword" = "secretpassword";
// password1 = "tryinganotherpassword"; // Warning ⚠️
console.log(password1);
// ----------------------------

// Enum
enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);

// Interfaces
//  Interfaces is a way to define a cntract for the shape of an object. it specifies the properties and their types that an object must have. Interfaces are a powerful toool for enforcing a certain structure in your Code.
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

// Usage
const computerExample: Computer = {
  name: "i7",
  ram: 16,
  hdd: 23000,
};

console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.hdd);
// ---------------------------

// ----------------------------------
// Interface #1 (Simple Interface)
interface Movie {
  readonly name: string; // 👈 Readonly Property
  ratings: number;
  genra?: string; // 👈 Optional Property
}

const movie1: Movie = {
  name: "John Wick",
  ratings: 7,
  genra: "Action",
};

// movie1.name = "Another Movie" // 👈 ERROR
console.log(movie1);
// ----------------------------------



// Interfaces for function
// ---------------------------
// Example 1

// Interface for a function
interface MathOperation {
  (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3));
console.log(subtract(7, 2));
// ---------------------------

// ---------------------------
// Example 2

// Define an interface for a Car
interface Car {
  brand: string;
  model: string;
  year: number;
}

// Function that accepts an object adhering to the Car interface
function displayCarInfo(car: Car): void {
  console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}

// Create an object that adheres to the Car interface
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};

// Call the function with the object
displayCarInfo(myCar);
// ---------------------------


// Interfaces with method
// Interface with method
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi there!");
  },
};

const huxn: Person = {
  firstName: "HuXn",
  lastName: "WebDev",
  age: 18,
  sayHello() {
    console.log("What's good");
  },
};

greet(john);
greet(huxn);

// ----------------------------------
// Interface #3 (Interface with method properties)
interface Song {
  songName: string;
  singerName?: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "Natural",
  singerName: "Imagin Drigon",
  printSongInfo: (songName, singerName) => {
    return `Song: (${songName}) Singer: (${singerName})`;
  },
};

console.log(song1.printSongInfo("Natural", "Imagin Drigon"));
// ---------------------------