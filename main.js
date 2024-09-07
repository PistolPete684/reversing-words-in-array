//takes in the argument 'string' which is a string
function reverse(string){
  // you have to return a string because trim makes a new array
  return string.trim()
    //the split method splits the words into an array at the spaces ' '
    .split(' ')
    //the reverse method reverses the array
    .reverse()
    //the join method joins elements of an array
    .join(' ');
    //Test
}