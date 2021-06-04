//PS2.P2
//Serra Jung
//U63506154

/* Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn. Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”. Hint: Splitting a string returns an Array */

`use strict`
const splitString = str => str.split(' ');

function * getWords(str){
    for (w of splitString(str)){
        yield w;
    }
}

let test = 'All I know is something like a bird within her sang'
let split_words = getWords(test);
let count_words = splitString(test).length;
while (count_words --> 0){
    console.log(split_words.next().value)
}