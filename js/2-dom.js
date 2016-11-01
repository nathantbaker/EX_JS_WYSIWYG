console.log("(2) Dom.js loads");


// Create Listeners
function createListeners() {
  var num = Wysiwyg.getNumberOfPeople(); //get number of people
  console.log("number of people:", num);
  for (var i = 0; i < num; i++) {
    var targetPerson = "person-" + (i + 1);
    console.log("targetPerson:", targetPerson);
    var targetElement = document.getElementById(targetPerson);
    console.log("targetElement:", targetElement);
    targetElement.addEventListener("click", showDots);
    }
}

function clearDots() {
  var num = Wysiwyg.getNumberOfPeople(); //get number of people
  for (var i = 0; i < num; i++) {
    var targetPerson = "person-" + (i + 1);
    var targetElement = document.getElementById(targetPerson);
    targetElement.classList.remove("dots");
    }
}

// When you click on one of the person elements, a dotted border should appear around it.
function showDots (targetElement) {
  clearDots();
  console.log("targetElement:", targetElement);
  targetElement.currentTarget.classList.add("dots");
  // targetElement.div.classList.toggle("dots");


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