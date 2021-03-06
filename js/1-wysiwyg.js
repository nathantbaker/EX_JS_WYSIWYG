var Wysiwyg = (function() {
"use strict";

  var famousPeople = [
    {
      title: "Samurai",
      name: "Tomoe Gozen",
      bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
      lifespan: {
        birth: 1747,
        death: 1797
      }
    },
    {
      title: "Mr.",
      name: "Nathan T. Baker",
      bio: "He trained at Nashville Software School and now he's a class 3 Wizard of Codery.",
      image: "https://pbs.twimg.com/profile_images/766387817337409536/N2Mcn3tJ.jpg",
      lifespan: {
        birth: 1985,
        death: 2076
      }
    },
    {
      title: "Sir",
      name: "Steve Jobs",
      bio: "Steven Paul 'Steve' Jobs was an American information technology entrepreneur and inventor. He was the co-founder, chairman, and chief executive officer (CEO) of Apple Inc.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Steve_Jobs_with_red_shawl_edit2.jpg",
      lifespan: {
        birth: 1955,
        death: 2011
      }
    },
    {
      title: "The",
      name: "Britney Spears",
      bio: "Britney Jean Spears is an American singer, dancer and actress. Born in McComb, Mississippi, and raised in Kentwood, Louisiana, she performed acting roles in stage productions and television shows as a child before signing with Jive Records in 1997.",
      image: "http://i.forbesimg.com/media/lists/people/britney-spears_416x416.jpg",
      lifespan: {
        birth: 1981,
        death: "current"
      }
    }
  ];

  return {
    showPeople: function() {
      var targetElement = document.getElementById("output");
      targetElement.innerHTML = makeItHtml(famousPeople);
    },
    getNumberOfPeople: function() {
      return famousPeople.length;
    }
  };

})();