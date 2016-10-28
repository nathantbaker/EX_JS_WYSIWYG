console.log("(3) main.js loads");

Wysiwyg.showPeople();
// console.log("targeting container:", output.innerHTML);

// document.getElementById("person-2").addEventListener("click", showDots);

// Event listeners are created after that
var num = Wysiwyg.getNumberOfPeople(); //get number of people
console.log("number of people:", num);



for (var i = 0; i < num; i++) {
  var targetPerson = "person-" + (i + 1);
  console.log("targetPerson:", targetPerson);
  var targetElement = document.getElementById(targetPerson);
  console.log("targetElement:", targetElement);
  targetElement.addEventListener("click", showDots);
//   var el = document.getElementById("outside");
// el.addEventListener("click", modifyText, false);
}