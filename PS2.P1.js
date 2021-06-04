//PS2.P1
//Serra Jung
//U63506154

/* Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as
F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2) */


`use strict`
function* fibonacci(){
    let first_val = 0;
    let second_val = 1;
    let res = 0;
    while(true){
        res = first_val + second_val
        first_val = second_val
        second_val = res
        yield res;
    }
}

function* evenFibonacci(){
    for (f of fibonacci()){
        if (f % 2 == 0){
            yield f;
        }
        else{
            continue;
        }
    }
}

even_fibonacci = evenFibonacci();
let count = 6
while (count --> 0){
    console.log(even_fibonacci.next().value)
}