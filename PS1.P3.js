//PS1.P3
/* Write a function that accepts two input parameters: a string, and a decorator function. The
function should execute the passed decorator function on the passed string and return the
result. */

//‘supercalifragilisticexpialidocious’
//[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]

'use strict'
function func1(str, func){
    return(func(str));
}

//first part
console.log("running first part");
const res = func1("supercalifragilisticexpialidocious", splitfunc => splitfunc.replace(/c/gi, ",c").split(","));
console.log(res);

//second part
console.log("running second part");
const res2 = func1("supercalifragilisticexpialidocious",splitfunc => { return {
    originalString: "supercalifragilisticexpialidocious",
    modifiedString: splitfunc.replace(/a/gi, "A"),
    numberReplaced: "supercalifragilisticexpialidocious".match(/a/g).length,
    length: "supercalifragilisticexpialidocious".length
}});
console.log(res2);