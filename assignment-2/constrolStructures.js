
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



