
console.log("(2) Dom.js loads");

//function that takes an array and convert it into html
function makeItHtml (inputArray) {
  "use strict";
  console.log("makeItHtml runs");
  return `<h2>${inputArray[0].name}</h2>`;
}