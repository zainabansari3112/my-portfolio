// let username = "zainab"
// console.log(username)
// let company = prompt('which company created javascript?');
//  if(company == 'nestscape'){ 
//    console.log("you are right");
//  }else{
//    console.log("you are wrong");
//  }

//  
// let temperature = 30;

// if (temperature > 30) {
//   console.log("It's hot outside.");
// } else if (temperature >= 20) {
//   console.log("It's warm outside.");
// } else {
//   console.log("It's cold outside.");
// }

// let chat = prompt('ASK ME Anything?');
// if( chat == 'hello'){
//     console.log("  hello ! I am good")
// }else{
//     console.log("greate days today")
// }else{
//     console.log("my nick name is gp")
// }
// if( chat == 'what is your name'){
//     console.log("my name is chat gpt")
// }

// Prompt user for a number
// let number = prompt("Enter a number:");

// Convert the input to a number
// number = parseFloat(number);

// Check if the number is positive, negative, or zero
// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// }

// Prompt user for their score
// let user = prompt("Ask me anything:");
// if(user == 'hello'){
//     console.log("hello ! i am good");
// }else if ( user == 'my day is good'){
//     console.log("this very nice");
// }else if (user == 'my day is bad today'){
//     console.log("oo soo sorry keep going");
// }
// else{
//     console.log(" its ok next time try hard enough");
// }

// function calculateInterestAndTotal(principal, rate, time) {
//     let simpleInterest = (principal * rate * time) / 100;
//     let totalAmount = principal + simpleInterest;
//     return {
//         simpleInterest: simpleInterest,
//         totalAmount: totalAmount
//     };
// }

// // Example usage:
// let principal = 2000;
// let rate = 6;
// let time = 2;

// let result = calculateInterestAndTotal(principal, rate, time);
// alert("Simple Interest: " + result.simpleInterest);  // Output: Simple Interest: 240
// alert("Total Amount: " + result.totalAmount);  // Output: Total Amount: 2240

// 
// simple interest formula

// function calculateSI(principal,rate,time){
//     let simple = (principal* rate* time)/100 ;
//     return simple ;
// }
// let principal =prompt("enter the principal")
// let rate =prompt("enter the rate st %")
// let time =prompt("enter the time")

// let Interest = calculateSI(principal,rate,time) ;
//     alert("this is simple interest " + Interest)
// function gst(price,igst,cgst,sgst,ugst){
//     let igstrate = (price * igstrate)/100 ;
//     let cgstrate = (price * cgstrate)/100 /2;
//     let ugstrate = (price * cgstrate)/100 /2;
//     let sgstrate = (price * cgstrate)/100 /2;
     
//     return{
//         igstrate: igstrate,
//         cgstrate: cgstrate,
//         ugstrate: ugstrate,
//         sgstrate: sgstrate
//     };
// }
// let price = prompt("enter the price");
// let igst = prompt("enter the igst");
// let cgst = prompt("enter the cgst");
// let ugst = prompt("enter the ugstrate");
// let sgst = prompt("enter the sgstrate");


// let result =gst(price,igst,cgst,sgst,ugst) ;
// alert( "this is the resulte" + result.igstrate)


// function isPrime(num) {
//     if (num <= 1) 
//       return false; // Numbers less than or equal to 1 are not prime
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false; // Divisible by another number, not prime
//       }
//     }
//     return true;
//   }
  
//   function generatePrimes(limit) {
//     let primes = [];
//     for (let i = 2; i <= limit; i++) {
//       if (isPrime(i)) {
//         primes.push(i);
//       }
//     }
//     return primes;
//   }
  
//   // Example usage: generate primes up to 50
//   let primeNumbers = generatePrimes(50);
//   alert(primeNumbers);
  


// function isPrime(num) {
//   if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//           return false; // num is divisible by i, so it's not prime
//       }
//   }
//   return true; // No divisors found, so num is prime
// }

// console.log(isPrime(7)); // true
// console.log(isPrime(2)); // false
// console.log(isPrime(5)); // false
// console.log(isPrime(11)); // true

// prime number code her

// function isPrime(num){
//    if (num<=1) return false;
//    for (let i = 2; i<=Math.sqrt(num);i++){
//      if(num % i === 0){
//        return ("this is not a prim number");
//      }
//    }
//    return ("this is a prime number");
//  }

//  num = prompt("enter any number")
//  let result = isPrime(num)
//  alert(result)

// var testArray = [1,4,2,3,4,5,6,7,8,9,10];
// console.log(testArray);
// console.log(testArray.fill("K",3,7));

// const array2 = [11, 5, 4, 10, 20, 25, 30];
// const result = array2.filter((x) => x > 2);
// console.log("Original Array", array2);
// console.log("Result", result);

// var array= [2,3,4,5,6,7,8.34,56,23,12,24,67];
//  console.log(array);
//  console.log(array.fill("g",2,5));
// var array3= array.filter((x)=> x>10);
// console.log(array3);

// let array = [23,24,34,5,6,7,8,9]
// let newarray=array.filter((x)=> x>10)
// console.log(newarray);

// Prompt the user for numbers (comma-separated)
// const input = prompt("Enter numbers separated by commas (e.g., 1,2,3,4):");

// Convert the input string into an array of numbers
// const numbers = input.split(",").map(Number);

// Filter numbers divisible by 2
// const divisibleByTwo = numbers.filter(num => num % 2 === 0);

// console.log("Numbers divisible by 2:", divisibleByTwo);
// alert("Numbers divisible by 2: " + divisibleByTwo.join(", "));





// var box = [1,2,3,4,5,6,7,8,9]
// alert (box);
// alert (box.fill("new",3,6))
// var boxnew = box.filter((x)=> x >2)
// alert (boxnew)

// function isPrime(x){
//     if (x<=1 )return false
//     for (i=2;i<=Math.sqrt(x); i++);
//     if (x%i===0){
//         return true;
//     }
//     return false;
// }
// x= prompt("enter the any number");
// let action = isPrime(x);
// alert(action);

// function prim(f){
//     if (f<=1) return false;
//     for ( i=2; i<=Math.sqrt;i++){
//         if(f%i===0){
//             return false;
//         }
//     }
//     return true;

// }
// f=prompt("any number")
// let zainab = prim(f)
// alert(zainab)



// Sample customer data
// let customerData = {
//     name: "John Doe",
//     address: "123 Main Street, Springfield, USA",
//     orders: [
//         { topic: "Laptop", price: 1200, shipping: "Standard" },
//         { topic: "Phone", price: 800, shipping: "Express" },
//         { topic: "Headphones", price: 150, shipping: "Free" }
//     ]
// };

// Function to simulate adding customer data using a callback
// function addCustomerData(customer, callback) {
//     setTimeout(() => {
//         // Simulate checking if the customer data is valid
//         if (customer.name && customer.address && customer.orders.length > 0) {
//             // Simulate a successful addition of customer data
//             callback(null, "Customer data added successfully!");
//         } else {
//             // Simulate an error if data is incomplete
//             callback("Error: Missing customer data.", null);
//         }
//     }, 1000);  // Simulate a delay (1 second) for adding data
// }

// Function to simulate fetching customer data using a Promise
// function fetchCustomerData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (customerData) {
//                 resolve(customerData);  // Resolve with the customer data
//             } else {
//                 reject("Error: No customer data found.");
//             }
//         }, 1000);  // Simulate a delay (1 second) for fetching data
//     });
// }

// Adding customer data using the callback function
// addCustomerData(customerData, (error, result) => {
//     if (error) {
//         console.log(error);  // In case of an error
//     } else {
//         console.log(result);  // "Customer data added successfully!"

//         // Fetching the customer data using a Promise
//         fetchCustomerData()
//             .then(fetchedData => {
//                 console.log("Customer Data Fetched:");
//                 console.log(fetchedData);

//                 // Displaying orders
//                 console.log("Orders:");
//                 fetchedData.orders.forEach(order => {
//                     console.log(`${order.topic} - $${order.price} - Shipping: ${order.shipping}`);
//                 });
//             })
//             .catch(error => {
//                 console.log(error);  // If fetching fails
//             });
//     }
// });













 