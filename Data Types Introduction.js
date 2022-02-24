//Data Types Introduction

//programming = telling computer how to manipulate data

//variable is a named location for storing a value and has a type

// comments can be a single line, and are denoted by "//"
/*
  We can also allow our comments to take up
  multiple lines.
  There are lots of reasons why this might be the case
  In order to create a multiline comment, we place "/", and ""*" before our
  multiline comment, and "*", and "/" afterwards.
*/

//initial glance at functions
var elements = document.getElementsByClassName("title");

//above = example of calling a function
//grabs any elements or components from a webpage that have class name of "title" and saves them in a variable called elements

//functions are prime mechanism to manipulate data
//functions range from extremely simple use cases (scenarios in which you would use the function or program)
//e.g. returning what is inputted (functions take inputs and have outputs
//to somewhat more complex use cases (e.g. our "call" to document.getElementsByClassName("title"))

//Coding challenges

//this function returns 1
function returnOne() {
    return 1;
}

//this part is similar to what happens when you click "run tests"
var result = returnOne();
console.log(result); //should log 1 to the console

//save result of calling function (assign function's return value to a variable)
//log it to console (console.log(result))
//check to see if it worked

//this is a good model of what "Submit" or "Run Tests" is doing
//it takes function, runs it with arguments (this function took no arguments, but others will)
//compare results with desired outcomes, notify developer as to whether it was successful or not