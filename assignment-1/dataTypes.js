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
