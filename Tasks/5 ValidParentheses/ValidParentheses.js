/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/


function validParentheses(parens) {
    if (!parens) {
        return true
    }
    const res = parens.split("").reduce((acc, el) => {
        return acc < 0 ? -777 : el === "(" ? ++acc : --acc
    }, 0)
    return res === 0?  true:false
}

console.log(validParentheses("()") === true)
console.log(validParentheses("())") === false)
console.log(validParentheses("())(()") === false)
