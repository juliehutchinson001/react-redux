/*
 * 1) The code sample provides an array fruit. 
 * Your job is write a function that returns a 
 * random fruit from the array. The function is 
 * outlined but you need to fill in the body 
 * and provide a return value. 
 */

var fruit = ["Apple", "Banana", "Cherry", "Durian"];

randomFruit() => {
  // should return a random fruit? 
  let select_idx = Math.floor(Math.random() * fruit.length);
  // console.log(select_idx);
  let select_fruit = fruit[select_idx];
  // console.log(select_fruit);
  return select_fruit;
}

console.log(randomFruit());
