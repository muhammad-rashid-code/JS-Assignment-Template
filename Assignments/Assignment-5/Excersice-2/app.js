var number1 = +(prompt("Enter the first number:"));
var number2 = +(prompt("Enter the second number:"));

var difference = number1 - number2;

var product = number1 * number2;

var quotient = number1 / number2;

var remainder = number1 % number2;

document.write("Subtraction: " + number1 + " - " + number2 + " = " + difference + "<br>");
document.write("Multiplication: " + number1 + " * " + number2 + " = " + product + "<br>");
document.write("Division: " + number1 + " / " + number2 + " = " + quotient + "<br>");
document.write("Modulus: " + number1 + " % " + number2 + " = " + remainder);