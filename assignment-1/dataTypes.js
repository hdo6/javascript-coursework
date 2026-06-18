// Do, Hoai Chinh
// Assignment 1: Data Types and Operations in JavaScript
// COP 2801

// Part 1
// Task 1.1

// Number holding your age
let age = 21;

// String holding your full name
let fullName = "Hoai Chinh Do";

// Boolean indicating whether you're currently enrolled in this course
let isEnrolled = true;

// Undefined variable named target (declare but don't assign)
let futureGoal;

// Null variable named completedCourse representing a course you haven't finished
let completedCourse = null;

// Print each variable and its type
console.log("Age:", age, "Type:", typeof age);
console.log("Full Name:", fullName, "Type:", typeof fullName);
console.log("Enrolled:", isEnrolled, "Type:", typeof isEnrolled);
console.log("Future Goal:", futureGoal, "Type:", typeof futureGoal);
console.log("Completed Course:", completedCourse, "Type:", typeof completedCourse);

// undefined = Variable declared but never assigned a value (automatic, unintentional)

// null = Variable intentionally assigned to represent "empty" or "no value" (manual, intentional)

// Part 2: Type Conversion and Operations
// Task 2.1: Perform Type Conversions

// 1. Convert age (Number) to String
let ageAsString = String(age);
console.log(`Original: ${age} (${typeof age}) → Converted: ${ageAsString} (${typeof ageAsString})`);

// 2. Convert fullName (String) to Boolean
let nameAsBoolean = Boolean(fullName);
console.log(`Original: ${fullName} (${typeof fullName}) → Converted: ${nameAsBoolean} (${typeof nameAsBoolean})`);

// 3. Convert isEnrolled (Boolean) to Number
let enrolledAsNumber = Number(isEnrolled);
console.log(`Original: ${isEnrolled} (${typeof isEnrolled}) → Converted: ${enrolledAsNumber} (${typeof enrolledAsNumber})`);

// 4. Convert completedCourse (Null) to Number
let nullAsNumber = Number(completedCourse);
console.log(`Original: ${completedCourse} (${typeof completedCourse}) → Converted: ${nullAsNumber} (${typeof nullAsNumber})`);

// Task 2.2: Explain the Null Conversion
// Converting null to Number returns 0 because:
// JavaScript's type coercion rules treat null as "no value" which is numerically represented as 0
// ECMAScript specification explicitly defines Number(null) to return +0

//Part 3: Arithmetic and Logical Operations
//Task 3.1: Arithmetic Operations

// Create two Number variables
let x = 2;
let y = 7;

// Perform and print results
console.log(`Addition (${x} + ${y}):`, x + y);
console.log(`Subtraction (${x} - ${y}):`, x - y);
console.log(`Multiplication (${x} * ${y}):`, x * y);
console.log(`Division (${x} / ${y}):`, x / y);
console.log(`Modulus (${x} % ${y}):`, x % y);

// Test division by zero
let a = 10;
let b = 0;
console.log(`\nDivision by zero test (${a} / ${b}):`, a / b);
console.log(`Modulus by zero test (${a} % ${b}):`, a % b);

//JavaScript does NOT throw an error
// Instead, it returns Infinity or NaN and continues executing.


// Task 3.2: Logical Operations
// Create new Boolean variable
let hasCompletedAssignment = false;

// Perform logical operations and print results
console.log("=== Logical Operations Results ===");
console.log(`isEnrolled: ${isEnrolled}`);
console.log(`hasCompletedAssignment: ${hasCompletedAssignment}`);
console.log("-----------------------------------");

// AND (&&) - both must be true
let andResult = isEnrolled && hasCompletedAssignment;
console.log(`AND (${isEnrolled} && ${hasCompletedAssignment}): ${andResult}`);
console.log(`Explanation: Both must be true → ${andResult}`);

// OR (||) - at least one must be true
let orResult = isEnrolled || hasCompletedAssignment;
console.log(`OR (${isEnrolled} || ${hasCompletedAssignment}): ${orResult}`);
console.log(`Explanation: At least one is true → ${orResult}`);

// NOT (!) - reverses the value
let notEnrolled = !isEnrolled;
let notCompleted = !hasCompletedAssignment;
console.log(`NOT (!${isEnrolled}): ${notEnrolled}`);
console.log(`NOT (!${hasCompletedAssignment}): ${notCompleted}`);


// Task 3.3: Truth Table (Demonstrate Understanding)

// | A     | B     | A && B | A || B |
// |-------|-------|--------|--------|
// | true  | true  | true   | true   |
// | true  | false | false  | true   |
// | false | true  | false  | true   |
// | false | false | false  | false  |

// EXPLANATION:

// AND (&&) - Both must be true:
// - Only row where both A AND B are true → Result is true
// - All other combinations → Result is false

// OR (||) - At least one must be true:
// - Only row where BOTH are false → Result is false
// - All other combinations (at least one true) → Result is true