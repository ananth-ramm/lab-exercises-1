console.log('Hello World!!!')

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


console.log("5 + 10 =", add(5, 10));
console.log("10 - 5 =", subtract(10, 5));
console.log("5 * 10 =", multiply(5, 10));
console.log("10 / 5 =", divide(10, 5));

function greet(name) {
    console.log("Hello " + name);
}

greet("Stranger");


let fruits = ["apple", "mango", "watermelon", "blueberry", "strawberry"];


fruits[1] = "grape";   
fruits[4] = "passionfruit";         


fruits.unshift("banana");


fruits.pop();


console.log(fruits);


const book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    pages: 223,
    description: "A young wizard's journey begins."
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.description);

console.log(book);

book.description = "Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents mysterious deaths.";
console.log(book.description); 


// This function returns the addition of two numbers
function add(a, b) {
  return a + b;
}

// Tests for addition
if (add(2, 3) != 5) throw new Error("add() Test 1 failed");
if (add(-2, 2) != 0) throw new Error("add() Test 2 failed");
if (add(1.5, 1.5) != 3) throw new Error("add() Test 3 failed");


// This function returns the subtraction of two numbers
function subtract(a, b) {
  return a - b;
}

// Tests for subtraction
if (subtract(10, 5) != 5) throw new Error("subtract() Test 1 failed");
if (subtract(-3, -3) != 0) throw new Error("subtract() Test 2 failed");
if (subtract(5.5, 2.2).toFixed(1) != 3.3) throw new Error("subtract() Test 3 failed");


// This function returns the multiplication of two numbers
function multiply(a, b) {
  return a * b;
}

// Tests for multiplication
if (multiply(3, 4) != 12) throw new Error("multiply() Test 1 failed");
if (multiply(-2, 3) != -6) throw new Error("multiply() Test 2 failed");
if (multiply(2.5, 2) != 5) throw new Error("multiply() Test 3 failed");


// This function returns the division of two numbers
function divide(a, b) {
  if (b === 0) return "Error: Cannot divide by zero!";
  return a / b;
}

// Tests for division
if (divide(10, 2) != 5) throw new Error("divide() Test 1 failed");
if (divide(5, 0) != "Error: Cannot divide by zero!") throw new Error("divide() Test 2 failed");
if (divide(-6, 3) != -2) throw new Error("divide() Test 3 failed");

console.log("All tests passed successfully!");
