//PS1.P2
/*Write a function that takes as its input the following formatted strings:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
‘2^8’ (where ^ is exponentiation)

function should
Determine the operator (+, *, -, ^, or /) embedded in the string
Return a function to implement the input operator that returns the result

 */

`use strict`
function calc(str) {

    var operator = str[1];
    switch(operator){
        case `+`:
            return (left, right) => left + right;
            break
        case '^':
            return (left, right) => left ** right;
        case `-`:
            return (left, right) => left - right;
            break
        case `*`:
            return (left, right) => left * right;
            break
        case `/`:
            return (left, right) => left / right;
            break
    }
}

const evaluate = str => {
    return calc(str)(parseInt(str[0]),parseInt(str[2]));
}
const expression = '2*8';
let operator = evaluate(expression);
console.log(`${expression} = ${operator}`)