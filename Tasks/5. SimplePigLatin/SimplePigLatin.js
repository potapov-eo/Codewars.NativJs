/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str) {
   return str.split(" ").map(w=>{
       let code =(letter) => letter.charCodeAt(0);
       let strStartsWithALetter=(lett) => (code(lett) >= 65 && code(lett) < 91) || (code(lett) >= 97 && code(lett) < 123)
       return  w.length>1? w.slice(1,w.length)+w[0]+"ay":strStartsWithALetter(w)?w+"ay":w
    }).join(" ")
}

console.log(pigIt('Pig latin is cool') === 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string') === 'hisTay siay ymay tringsay')

// w.length>1? w.slice(1,w.length)+w[0]+"ay":(/^\p{L}$/u).test(w)?w+"ay":w  does not work in codewards


















