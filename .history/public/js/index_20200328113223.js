$(window).on('load', function () {
  // var dotenv = require('dotenv').config()
  // !platform selection
  // store the platform choice to pass use later
  let platformChoice = "";


  // !user genre selection
  // the array in which to push user genre selections
  let genreChoice = [];
  let genre = "";

  // function to send genre choice
  function genrePass(genreData) {
    $.post("/api/genres", genreData).then(console.log(genreData + " added!"))
  }

  //   $("#genres").click(function () {
  //   if ()
  // })
  // pass genre choices to backend
  // for(i=0; i<genreChoice.length; i++) {

  // }
  // !submit button function
  // function submit(genreData) {
  //   var currentURL = window.location.href;
  //   if (currentURL.includes("/genres")) {
  //     for (var i = 0; i <= genreChoice.length; i++) {
  //       $.post("/api/genres", ).then(console.log("genre post success"))
  //     }
  //   } else if (currentURL.includes("/platforms")) {

  //   }
  // }
  // !utelly api 
  // api settings
  // var utelly = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+ movie + "&country=us",
  // 	"method": "GET",
  // 	"headers": {
  // 		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
  // 		"x-rapidapi-key": process.env.UTELLY_API_KEY
  // 	}
  // }

  // ajax call
  // $.ajax(utelly).done(function (response) {
  //   console.log(response);
  //   var platform = response.locations[0]
  //   var poster = response.picture
  // });


  // filter 

  // !icon selection logic

  $(".icon").click(function () {
    var state = $(this).attr("data-state");

    if (state === "default") {
      $(this).addClass("selected");
      $(this).attr("data-state", "selected");


      // add the selected genre to the array
      genre = $(this).attr("name");
      genreChoice.push(genre)
      genrePass({
        genre: genre
      });

      console.log(genreChoice)
    } else if (state === "selected") {
      $(this).addClass("selected");
      $(this).attr("data-state", "default");
    }
  });

  function submitStep() {

    // grab user input
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    // don't allow for a blank password
    if (password == "") {
      alert("Please enter valid login information.");
    }

    // user object
    var userData = {
      user: user,
      password: password,
    };

    console.log(userData);
    userCheck = function (userData) {

      // pull the data from api users
      $.get("api/users", function (data) {

        // iterate through the users in the api
        for (var i = 0; i < data.length; i++) {

          // check the user data against what is in the database
          if (data[i].user == userData.user && data[i].password == userData.password) {
            console.log("user exists");
            console.log("next step!")

            // open the sucess modal if the user passes the check
            $('#successModal').modal();
            $('#successModal').modal('open');

            // when users click continue on the modal, pass user to the next page
            document.getElementById("continueButton").href = "/platforms";
            return (userData);
          } else {
            console.log("user doesn't exist")
            $('#failModal').modal();
            $('#failModal').modal('open');

            // when users click continue on the modal, pass user to the next page
            function close() {
              $('#failModal').modal('close');
            };

          }
        }
      })
    }

    // call the userCheck function, passing in the user input
    userCheck(userData);
  }

  // !from tinder-like card swipe
  var animating = false;
  var cardsCounter = 0;
  var numOfCards = 6;
  var decisionVal = 80;
  var pullDeltaX = 0;
  var deg = 0;
  var $card, $cardReject, $cardLike;

  function pullChange() {
    animating = true;
    deg = pullDeltaX / 10;
    $card.css(
      "transform",
      "translateX(" + pullDeltaX + "px) rotate(" + deg + "deg)"
    );

    var opacity = pullDeltaX / 100;
    var rejectOpacity = opacity >= 0 ? 0 : Math.abs(opacity);
    var likeOpacity = opacity <= 0 ? 0 : opacity;
    $cardReject.css("opacity", rejectOpacity);
    $cardLike.css("opacity", likeOpacity);
  }

  function release() {
    if (pullDeltaX >= decisionVal) {
      $card.addClass("to-right");
    } else if (pullDeltaX <= -decisionVal) {
      $card.addClass("to-left");
    }

    if (Math.abs(pullDeltaX) >= decisionVal) {
      $card.addClass("inactive");

      setTimeout(function () {
        $card.addClass("below").removeClass("inactive to-left to-right");
        cardsCounter++;
        if (cardsCounter === numOfCards) {
          cardsCounter = 0;
          $(".demo__card").removeClass("below");
        }
      }, 300);
    }

    if (Math.abs(pullDeltaX) < decisionVal) {
      $card.addClass("reset");
    }

    setTimeout(function () {
      $card
        .attr("style", "")
        .removeClass("reset")
        .find(".demo__card__choice")
        .attr("style", "");

      pullDeltaX = 0;
      animating = false;
    }, 300);
  }

  $(document).on("mousedown touchstart", ".demo__card:not(.inactive)", function (
    e
  ) {
    if (animating) return;

    $card = $(this);
    $cardReject = $(".demo__card__choice.m--reject", $card);
    $cardLike = $(".demo__card__choice.m--like", $card);
    var startX = e.pageX || e.originalEvent.touches[0].pageX;

    $(document).on("mousemove touchmove", function (e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      pullDeltaX = x - startX;
      if (!pullDeltaX) return;
      pullChange();
    });

    $(document).on("mouseup touchend", function () {
      $(document).off("mousemove touchmove mouseup touchend");
      if (!pullDeltaX) return; // prevents from rapid click events
      release();
    });
  });

  console.log('All assets are loaded')

})
// !example js
// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);