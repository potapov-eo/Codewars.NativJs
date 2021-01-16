/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
    The output should be two capital letters with a dot separating them.
    It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F*/

function abbrevName(name){
   const arrNames= name.split(" ")
    return (arrNames[0][0]+"."+arrNames[1][0]).toLocaleUpperCase()
}
console.log(abbrevName("Evgeny Potapov"))