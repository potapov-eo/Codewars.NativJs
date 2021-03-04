/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/
const fn0 = (x) => x
function zero(fn=fn0) {return fn(0)}
function one(fn=fn0) {return fn(1)}
function two(fn=fn0) {return fn(2)}
function three(fn=fn0) {return fn(3)}
function four(fn=fn0) {return fn(4)}
function five(fn=fn0) {return fn(5)}
function six(fn=fn0) {return fn(6)}
function seven(fn=fn0) {return fn(7)}
function eight(fn=fn0) {return fn(8)}
function nine(fn=fn0) {return fn(9)}

function plus(y) {return function fnPlus(x){ return x+y}}
function minus(y) {return function fnMinus(x){ return x-y}}
function times(y) {return function fnMinus(x){ return x*y}}
function dividedBy(y) {return function fnMinus(x){ return Math.floor(x/y)}}

console.log(seven(times(five())) === 35)
console.log(four(plus(nine()))=== 13)
console.log(eight(minus(three())) === 5)
console.log(six(dividedBy(two())) === 3)
