"use strict";

// Create Listeners
function createListeners() {
  var inputEl = document.getElementById("input");
  var num = Wysiwyg.getNumberOfPeople(); //get number of people

  // Listeners for each person
  for (var i = 0; i < num; i++) {
    var targetPerson = "person-" + (i + 1);
    var targetElement = document.getElementById(targetPerson);
    targetElement.addEventListener("click", showDots);
    }

  // Listener for text input
  inputEl.addEventListener("keyup", function(event) {
    var targetEl = document.getElementsByClassName("dots")[0].getElementsByClassName("bio")[0];
    targetEl.innerHTML = inputEl.value;
    if (13 == event.keyCode) {
      inputEl.value = "";
    }
  });
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
  targetElement.currentTarget.classList.add("dots");
  document.getElementById("input").focus();
  createListeners();
}

//function that takes an array and convert it into html
function makeItHtml (inputArray) {
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
                      <div class="bio">${inputArray[prop].bio}</div>
                  </div>
               </person>
              </div>
            `
    ;
  }

  return string;
}