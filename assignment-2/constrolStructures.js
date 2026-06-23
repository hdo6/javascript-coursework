// Count how many times a specific letter appears in a word and print the count

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