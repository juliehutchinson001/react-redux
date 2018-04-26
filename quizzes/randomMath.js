/*
 * Instructions from your teacher:
 * Write a function that returns an integer between 
 * 0 and 1 less than a supplied integer. 
 * 
 * For example: random(6) would return a number between 0  and 5. 
*/

function random(n) {
    // should return a number between 0 and n - 1
    n = Math.floor(Math.random() * n)
    return n
  }
  
  // 
  console.log(random(6));
  