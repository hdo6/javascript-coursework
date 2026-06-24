
//Part 1: Count how many times a specific letter appears in a word and print the count

function countLetter(word, letter)
{
    let count = 0;
    for (let i = 0; i < word.length; i++)
    {
        if (word[i] === letter)
        {
            count++;
        }
    }
    return count;
}

// Example usage
const word = "javascript";
const letter = "a";
console.log(countLetter(word, letter)); // Output: 2


// 1. Step-by-Step
//Initialize count = 0

//Loop through each character of "javascript":

// i=0: "j" → not "a" → skip

// i=1: "a" → match → count = 1

// i=2: "v" → skip

// i=3: "a" → match → count = 2

// i=4 to i=9: "script" → no matches

// Return count = 2

// 2. Loop Type
// for loop (counter-controlled/definite loop) - runs exactly word.length times.

// If Empty String (word = "")
// Returns 0 - loop condition 0 < 0 is false, so loop never runs, count stays 0. No error.




// Part 2:Find the Bugs 



// Snippet A: Count Down from 5 



// let count = 5; 

// while (count >= 0) 

// { 

// console.log(count); 

// count = count - 1; 

// } 

// console.log("Blast off!"); 



// The loop should count down from 5 to 1,  

// but it also prints 0 because the condition includes >= 0. 

// For a countdown, we want to stop before 0. 



//Corrected Snippet A: Count Down from 5 

let count = 5;

while (count > 0)
{ // Changed >= to > 

    console.log(count);

    count = count - 1;

}

console.log("Blast off!");





// Snippet B: Check if Passing 



// let score = 60; 

// if (score > 60) 

// { 

// console.log("pass"); 

// } else 

// { 

// console.log("fail"); 

// } 



// The condition uses > (greater than)  

// instead of >= (greater than or equal to),  

// so when score = 60, it goes to the else block and prints "fail" instead of "pass". 



// Corrected Snippet B: Check if Passing 

let score = 60;



if (score >= 60)
{

    console.log("pass");

} else
{

    console.log("fail");

}





// Snippet C: Add Up Numbers 



// let numbers = [10, 20, 30, 40]; 

// let total = 0; 



// for (let i = 0; i <= numbers.length; i++) 

// { 

// total = total + numbers[i]; 

// } 



// console.log("Total: " + total); 



//The loop condition i <= numbers.length causes an off-by-one error -  

// when i equals 4 (the array length), it tries to access numbers[4] 

// which is undefined, resulting in total = 10 + 20 + 30 + 40 + undefined = NaN. 



// Corrected Snippet C: Add Up Numbers 



let numbers = [10, 20, 30, 40];

let total = 0;



for (let i = 0; i < numbers.length; i++)
{ // Changed <= to < 

    total = total + numbers[i];

}



console.log("Total: " + total);


// Part 3: Improve the Code 





// var x = 85; 

// var g = ""; 


// if (x >= 90) 

// { 

// g = "A"; 

// } else 

// { 

// if (x >= 80) 

// { 

// g = "B"; 

// } else 

// { 

// if (x >= 70) 

// { 

// g = "C"; 

// } else 

// { 

// if (x >= 60) 

// { 

// g = "D"; 

// } else 

// { 

// g = "F"; 

// } 

// } 

// } 

// } 



// console.log(g); 





// improved code 

const scored = 85;

let grade = "";



if (scored >= 90)
{

    grade = "A";

} else if (scored >= 80)
{

    grade = "B";

} else if (scored >= 70)
{

    grade = "C";

} else if (scored >= 60)
{

    grade = "D";

} else
{

    grade = "F";

}



console.log(grade); // Output: B 



// 1. Renamed x to scored - Makes it clear this variable represents the student's test score, improving readability 



// 2. Renamed g to grade - Clearly indicates this variable stores the letter grade, making the code self-documenting 



// 3. Used const for score - The score doesn't change, so const prevents accidental reassignment and signals intent 



// Used let for grade - The grade is assigned later, so let is appropriate for variables that will be modified 



// 5. Replaced nested if-else with else if - Eliminates unnecessary nesting, making the code flatter, cleaner, and easier to read and maintain 


// Part 4: 

//Problem 1: Is It Positive, Negative, or Zero? 

// Write code that checks a number and prints whether it's positive, negative, or zero. 


let num = 5; // Test with different values: 5, -3, 0 


// Write an if/else if/else statement that: 

// - Prints "positive" if num is greater than 0 

// - Prints "negative" if num is less than 0 

// - Prints "zero" if num equals 0 

// Your code here: 



if (num > 0)
{

    console.log("positive");

} else if (num < 0)
{

    console.log("negative");

} else
{

    console.log("zero");

}






// Problem 2: Add Only Positive Numbers 

//Write code that loops through an array and adds up only the positive numbers. 



let numbers_4 = [1, -2, 3, -4, 5];

let total_4 = 0;



// Use a loop to go through each number in the array 

// If the number is positive (greater than 0), add it to total 

// Skip negative numbers and zero 

// Your code here: 



for (let i = 0; i < numbers_4.length; i++)
{

    // Check if the number is positive 

    if (numbers
    [i] > 0)
    {

        total_4 += numbers_4[i];

    }

}


// Print the total 

// Expected output: 9 (because 1 + 3 + 5 = 9) 

console.log("Total of positive numbers: " + total_4);




// Problem 3: Print a Multiplication Table 

// Write code that prints the multiplication table for a given number (1 through 10). 


let numb_4 = 3;


// Use a for loop that counts from 1 to 10 

// Each time through the loop, print: num x counter = result 

// For example, if num is 3: 

// 3 x 1 = 3 

// 3 x 2 = 6 

// 3 x 3 = 9 

// ... and so on up to 3 x 10 = 30 

// Your code here: 



for (let i = 1; i <= 10; i++)
{

    console.log(numb_4 + " x " + i + " = " + (numb_4 * i));

}

// After it works, change num to a different value and run again 

