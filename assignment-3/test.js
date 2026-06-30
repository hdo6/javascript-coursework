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