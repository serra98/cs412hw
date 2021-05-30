//problem 1 PS1.P1
//Write a function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in reverse alphabetical order.

function reverse_alphabetical_order(str)
{
    return str.split('').sort().reverse().join('');

}
console.log(reverse_alphabetical_order("exioi"));
console.log(reverse_alphabetical_order("supercalifragilisticexpialidocious"));