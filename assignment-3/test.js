// Assignment 3 - Part 1
// Create an array of five book objects
// Create an array of five book objects (each with title, author, and pages),
//  then write code that loops through and prints only the books with more than 200 pages

const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 281
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        pages: 224
    },
    {
        title: "Of Mice and Men",
        author: "John Steinbeck",
        pages: 107
    }
];

// Loop through and print only books with more than 200 pages
console.log("Books with more than 200 pages:");
console.log("--------------------------------");

for (let i = 0; i < books.length; i++)
{
    if (books[i].pages > 200)
    {
        console.log(`Title: ${books[i].title}`);
        console.log(`Author: ${books[i].author}`);
        console.log(`Pages: ${books[i].pages}`);
        console.log("--------------------------------");
    }
}

//
// How does the code access properties inside each object?
// The code uses dot notation (e.g., books[i].title, books[i].author, books[i].pages) to access the properties of each book object. The array index i first retrieves the object at that position, then the dot operator accesses the specific property value.

// What type of loop does the code use to go through the array?
// The code uses a for loop with a counter variable (let i = 0; i < books.length; i++) that iterates through each index of the array. This is a traditional index-based loop that manually controls the iteration from the first element to the last.

// Why do we need both arrays AND objects to solve this problem? What role does each play?
//The array acts as a container that holds and organizes all the book records together, allowing us to iterate through the collection systematically. The objects represent individual book entities, each bundling related data (title, author, pages) into a single structured unit, making it easy to access and manage each book's properties as a cohesive whole.
//


// PART 2 - Debugging Snippets
// Snippet A: Access Object Property
// 1. Find the bug:
// The code uses student[major] but major is not a string – it's an undeclared variable.

// 2. Explain what's wrong:
//When using bracket notation, the value inside the brackets must be a string (or a variable that evaluates to a string). Here, major is being treated as a variable name rather than the property name, but no such variable exists, so it throws a ReferenceError.

// 3. Corrected code

let student = {
    name: "Maria",
    age: 20,
    major: "Computer Science"
};

console.log(student["major"]);  // Fixed: property name as a string


// Snippet B: Add to Array
//1. Find the bug:
//The code uses a hardcoded index fruits[3] = "grape" to add the new fruit, which assumes the array will always have exactly 3 elements.

//2. Explain what's wrong:
//This approach is fragile because if the array's length changes (e.g., items are added or removed), the hardcoded index might overwrite existing elements or create gaps in the array. Instead, you should use the push() method which automatically adds items to the end regardless of the current length.

//3. Corrected code:


let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits);

//Snippet C: Calculate Total Price

//1. Find the bug:
//The code uses price as a standalone variable inside the loop, but price doesn't exist – it should be cart[i].price to access each object's price property.

//2. Explain what's wrong:
//Inside the loop, the code fails to reference the current cart item correctly. Instead of accessing cart[i].price, it tries to use an undeclared variable price, which will either cause a ReferenceError or (in non-strict mode) create a global variable with undefined value, resulting in NaN for the total.

// 3. Corrected code:


let cart = [
    { item: "Shirt", price: 25 },
    { item: "Pants", price: 40 },
    { item: "Shoes", price: 60 }
];

let total = 0;
for (let i = 0; i < cart.length; i++)
{
    total = total + cart[i].price;  // Fixed: access price via cart[i].price
}
console.log("Total: $" + total);

// Snippet D: Find a User
//1. Find the bug:
//The code prints either "Found!" or "Not found" for every single element in the array, so it outputs a message for each user (3 times total) rather than just one final result.

//2. Explain what's wrong:
//The if/else statement is inside the loop, causing it to execute on every iteration. This means it prints something for each user instead of printing a single "Found!" when the user exists or one "Not found" if no user matches. The "Not found" message should only display after the entire loop completes without finding a match.

//3. Corrected code:

let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let searchId = 2;
let found = false;

for (let i = 0; i < users.length; i++)
{
    if (users[i].id === searchId)
    {
        console.log("Found!");
        found = true;
        break;  // Optional: stops searching once found
    }
}

if (!found)
{
    console.log("Not found");
}