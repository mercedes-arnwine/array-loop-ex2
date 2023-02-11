var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

//stuff.forEach(function (index, item) {
// if (index % 2 === 0) {
//   console.log(item);
// }
//});

//Create a function expression with the variable name removeItem
//that accepts an array and an item as parameters. You’re going to use
//this function to delete an element of your choosing from any array.
// In the body of the function, remove the item from the array and log out
//the specific element that was removed. If the element doesn’t exist,
// log out a message that no such element exists in the array.
//Call the removeItem function and pass it the stuff array and one of the elements
// from the array. Call the function again with the same array and an element that
//it does not contain. Log out the stuff array.

var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log(`That isn't present in the array`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  }
};

removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "tea");
console.log(stuff);
