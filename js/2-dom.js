
console.log("(2) Dom.js loads");

// Event listeners are created after that
var targetPerson = "";
var num = Wysiwyg.getNumberOfPeople(); //get number of people
for (var i = i; i < num; i++) {
  targetPerson = "person-" + i;
  console.log("targetPerson:", targetPerson);
  document.getElementById(targetPerson).addEventListener("click", function(){
    showDots(event);
  });
}

// When you click on one of the person elements, a dotted border should appear around it.
function showDots (event) {
  "use strict";
  alert("You clicked it:", event);
}

//function that takes an array and convert it into html
function makeItHtml (inputArray) {
  "use strict";

  console.log("makeItHtml runs");

  var string = "";
  var counter = 1;

  for (var prop in inputArray) {
    string +=`<div class="row person-row" id="person-`;
    string += counter; // add unique listener id to each person
    counter++; // increase counter
    string +=`">
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