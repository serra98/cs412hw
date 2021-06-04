//PS2.P3
//Serra Jung
// U63506154
/* Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
code to call the function on each value of the array [1,2,3,4,5,6,7]. Note: This is NOT a
generator problem. The .map( ) method on Array is what I'm looking for here */

const testArray =  [1,2,3,4,5,6,7];

const mapThree = testArray.map(x => x ** 3);

console.log(mapThree);




