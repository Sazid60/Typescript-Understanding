type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed",
}

let cashInRegister = 100;
let nextPizzaId = 1;
let nextOrderId = 1;
let orderQueue: Order[] = [];

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]



// Void return type 
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza : Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${selectedPizza} was not found`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
}

function completedOrder(orderId: number) : Order | undefined



 {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQues`)
        return
    }
    order.status = "completed"
    return order
}

// Type Narrowing
// function getPizzaDetails(identifier : string | number){
//     if (typeof identifier === "string"){
//        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase()) 
//     }else if (typeof identifier === "number"){
//         return menu.find(pizza => pizza.id === identifier) 
//     } else{
//         throw new TypeError("Parameter `Identifier` must be either string or number")
//     }
// }

// Return Type 
function getPizzaDetails(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `Identifier` must be either string or number")
    }
}



addNewPizza({name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({name: "BBQ Chicken", price: 12 })
addNewPizza({name: "Spicy Sausage", price: 11 })
// placeOrder("Chicken Bacon Ranch")
// completedOrder(1)
// console.log("Menu:", menu)
// completedOrder(2)

// console.log("Menu", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)