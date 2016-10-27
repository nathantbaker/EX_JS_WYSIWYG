
console.log("(2) Dom.js loads");

// Event Listeners
var outputElement = document.getElementById("output");


//function that takes an array and convert it into html
function makeItHtml (inputArray) {
  "use strict";
  console.log("makeItHtml runs");
  var string = "";

  for (var prop in inputArray) {
    string +=
      `
        <div class="row person-row">
          <person class="person">
            <div class="col-sm-4">
              <image class="image">
                <img src="${inputArray[prop].image}">
              </image>
            </div>
            <div class="col-sm-8">
                <name class="name">${inputArray[prop].title} ${inputArray[prop].name}</name>
                <age class="age">${inputArray[prop].lifespan.birth} - ${inputArray[prop].lifespan.death}</age>
                <bio class="bio">${inputArray[prop].bio}</bio>
            </div>
          </person>
        </div>
      `
    ;
  }

  return string;
}