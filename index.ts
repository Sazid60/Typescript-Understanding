
// Time to use typescript___________________________________________________________________________________________________________________
let myName: string = "Sazid";

// 
let numberOOfWheels: number = 4
let isStudent: boolean = false

// 
type Food = string
let favoriteFood: Food = "pizza"

// Custom Type
type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

let person1: Person = {
    name: "sazid",
    age: 25,
    isStudent: true
}
let person2: Person = {
    name: "saz",
    age: 25,
    isStudent: true
}

// Nested Type Properties 
type Person1 = {
    name: string,
    age: number,
    isStudent: boolean,
    address: {
        street: string,
        city: string,
        country: string,
    }
}

let person3: Person1 = {
    name: "sazid",
    age: 25,
    isStudent: true,
    address: {
        street: "s",
        city: "ci",
        country: "Cu",
    }
}
let person4: Person1 = {
    name: "saz",
    age: 25,
    isStudent: true,
    address: {
        street: "s",
        city: "ci",
        country: "Cu",
    }
}

// Nested Type Properties

type Address = {
    street: string,
    city: string,
    country: string,
}

type Person2 = {
    name: string,
    age: number,
    isStudent: boolean,
    address : Address
}

let person5: Person2 = {
    name: "sazid",
    age: 25,
    isStudent: true,
    address: {
        street: "s",
        city: "ci",
        country: "Cu",
    }
}
let person6: Person2 = {
    name: "saz",
    age: 25,
    isStudent: true,
    address: {
        street: "s",
        city: "ci",
        country: "Cu",
    }
}



// Optional Properties 

type Address1 = {
    street: string,
    city: string,
    country: string,
}

type Person3 = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address
}

let person7: Person3 = {
    name: "sazid",
    age: 25,
    isStudent: true,
    address: {
        street: "s",
        city: "ci",
        country: "Cu",
    }
}
let person8: Person3 = {
    name: "saz",
    age: 25,
    isStudent: true,
    address: {
        street: "s",
        city: "ci",
        country: "Cu",
    }
}

// Typing Array 
 let ages = [100,101]

type Person4 = {
    name: string,
    age: number,
    isStudent: boolean,
}

let person9 = {
    name: "sazid",
    age: 25,
    isStudent: true,
}
let person10 = {
    name: "saz",
    age: 25,
    isStudent: true,
}

let people : Person4[] =  [person1,person2]
// let people : Array<Person4> =  [person1,person2]
// Same kaj korbe


// Litteral type
let myName1 = "Saz"
// myName1=true

const myName2: "Saz" = "Saz"


// Unions Types
// type user = {
//     username: string
//     role: "guest" | "member" | "admin"
// }
// type userRole = "guest" | "member" | "admin"
// let userRole = "admin"


// Litteral type
// let myName1 = "Saz"
// // myName1=true

// const myName2: "Saz" = "Saz"



// Unions Types
// type user = {
//     username: string
//     role: "guest" | "member" | "admin"
// }
// type userRole = "guest" | "member" | "admin"
// let userRole = "admin"


// Function Return Type
type userRole = "guest" | "member" | "admin"

type user = {
    username: string
    role: userRole
}

const users: user[] = [
    { username: "s", role: "admin" },
    { username: "a", role: "member" },
    { username: "z", role: "guest" }
]

function fetchUserDetails(username: string): user {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

// Ts Type any 
let value: any = 1
value.toUpperCase()
value = "hi"


// Utility Type
type User1 = {
    id: number
    username: string
    role: "guest" | "member" | "admin"
}

//  type updatedUser = {
//     id?:number
//     username?: string
//     role?: "guest" | "member" | "admin"
//  } we will uaw tility instead

type updatedUser = Partial<User1>


const users1: User1[] = [
    { id: 1, username: "s", role: "admin" },
    { id: 2, username: "a", role: "member" },
    { id: 3, username: "z", role: "guest" }
]

function updateUser(id: number, updates: updatedUser) {
    const foundUser = users1.find(user => user.id === id)
    if (!foundUser) {
        console.error("User Nott Found")
        return
    }
    Object.assign(foundUser, updates)
}

updateUser(1, { username: "sa" })
updateUser(2, { username: "zi" })

console.log(users1)



// Omit Type 
type User2 = {
    id: number;
    username: string;
    role: "guest" | "member" | "admin";
};

// Define updatedUser1 as Partial of User2
type updatedUser1 = Partial<User2>;

let nextUserId = 1;

// Array to store users
const users2: User2[] = [
    { id: nextUserId++, username: "s", role: "admin" },
    { id: nextUserId++, username: "a", role: "member" },
    { id: nextUserId++, username: "z", role: "guest" }
];

// Function to update user details
function updateUser1(id: number, updates: updatedUser1): void {
    const foundUser = users2.find(user => user.id === id);
    if (!foundUser) {
        console.error("User Not Found");
        return;
    }
    Object.assign(foundUser, updates); // Apply updates to the found user
}

// Update user examples
updateUser1(1, { username: "sa" });
updateUser1(2, { username: "zi" });

// Function to add a new user (Omitting "id")
function addNewUser(newUser: Omit<User2, "id">): User2 {
    const user: User2 = {
        id: nextUserId++,
        ...newUser
    };
    users2.push(user); // Add the new user to the array
    return user; // Return the new user (to fulfill the function return type)
}

// Adding a new user
addNewUser({ username: "paki", role: "admin" });
console.log(users2);


// generics 
const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]
function getLastItem<PlaceholderType>(array: PlaceholderType[]) {
    return array[array.length - 1]
}

console.log()