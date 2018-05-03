/*
 * Write a random number (decimal) whose decimal point
 * is in the 10th point.
*/

// What is the ouput? 
for (var i = 0; i < 10; i += (0.1)) {
    console.log("$"+i.toFixed(1))
    console.log(Number(i.toFixed(1)))
    console.log(Math.round(i * 100) / 100);
    
  } 