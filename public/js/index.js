$(window).on("load", function() {
  // !platform selection
  // store the platform choice to pass use later
  let platformChoice = "";

  // !user genre selection
  // the array in which to push user genre selections
  let genreChoice = [];
  let genre = "";
  let movieOptions = [];
  let movieName = "";

  // passes the user's genre selection to the db call
  function getMovies(genre) {
    console.log("in getMovies");
    // identifies the genre variable
    var genreString = genre || "";
    // passes genre to the api
    if (genreString) {
      // add the genre to the api
      genreString = "/category/" + genreString;
      // console.log("genreString: ", genreString);
    }
    // db call using the genre
    $.get("/api/movies" + genreString, function(data) {
      movies = data;
      console.log(movies);

      // grabs only the movie title for th
      for (i = 0; i < movies.length; i++) {
        var x = movies[i].title;
        // adds the movie title to the array
        movieOptions.push(x);
      }
      // function once the data is returned
    }).then(function() {
      // loops through the titles in movieOptions
      for (i = 0; i < movieOptions.length; i++) {
        //! utelly call
        // api config
        var utellyConfig = {
          async: true,
          crossDomain: true,
          url:
            "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
            movieOptions[i] +
            "&country=us",
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            // cleared until dotenv is configured
            "x-rapidapi-key":
              "8c82e4dd37msh31e61bbc05c60afp12c20fjsn273f40e54380"
          }
        };

        var Options = {};
        // ajax call to utelly


        $.ajax(utellyConfig).done(function (res) {
          // console.log(res)
          var imdb = res.results[0].external_ids.imdb.id

          // define the values for the db
          var apiKey = "04a53e64029155a93b244799fbc01994";
          var queryUrl =
            "https://api.themoviedb.org/3/find/" +
            imdb +
            "?api_key=" +
            apiKey +
            "&language=en-US&external_source=imdb_id";
          var base_url = "https://image.tmdb.org/t/p/w185";
          $.ajax(queryUrl).done(function(response) {
            if (!response.movie_results[0]) {
              var poster = response.tv_results[0].poster_path;
            } else {
              var poster = response.movie_results[0].poster_path;
            }
            console.log(poster);
            var poster_url = base_url + poster;
            // push the values to the db
            var Options = {
              title: res.results[0].name,
              img: poster_url,
              imdb: res.results[0].external_ids.imdb.id,
              platform: res.results[0].locations[0].display_name,
              // platformChoice: platformChoice
            };

            $.post("/api/options/", Options, function() {
              console.log("done");
            });

          });

          // }
        });
      }
    }); //close for loop

    // movieInfo(movieOptions);
  }

// request movies by platform


  // !icon selection logic

  $(".icon").click(function() {
    var state = $(this).attr("data-state");
    // select an unselected icon
    if (state === "default") {
      var selectedVal = $(this).attr("data-selected");
      $(this).attr("src", selectedVal);
      // console.log(selectedVal);

      $(this).addClass("selected");
      $(this).attr("data-state", "selected");
      $(this).removeClass("default");

      // ! verifying
      var state = $(this).attr("data-state");
      // console.log(state);

      // logic tied to the user's current location
      // if the user is at genres
      if (window.location.href.includes("genres")) {
        // save the users genre selection to a variable
        console.log("done");

        genre = $(this).attr("name");
        // genreChoice.push(choice)
        // console.log(genreChoice);

        // pass the user's choice to the getMovies function
        getMovies(genre);
        // if the user is at platforms
      } else if (window.location.href.includes("platforms")) {
        platformChoice = $(this).attr("name");
        // console.log(platformChoice);
      }
      // deselect a selected icon
    } else if (state === "selected") {
      var defaultVal = $(this).attr("data-default");
      $(this).attr("src", defaultVal);
      console.log(defaultVal);
      $(this).addClass("default");
      $(this).attr("data-state", "default");
      $(this).removeClass("selected");
    }
  });

  // !from tinder-like card swipe
  var animating = false;
  var cardsCounter = 0;
  var numOfCards = 5;
  var decisionVal = 80;
  var pullDeltaX = 0;
  var deg = 0;
  var $card, $cardReject, $cardLike;

  var rejected = [];
  var liked = [];

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

  var idCounter = 1;
  function release() {
    if (pullDeltaX >= decisionVal) {
      $card.addClass("to-right");
      liked.push(idCounter);
      console.log("Liked: " + liked);
      idCounter++;
    } else if (pullDeltaX <= -decisionVal) {
      $card.addClass("to-left");
      rejected.push(idCounter);
      console.log("Rejected: " + rejected);
      idCounter++;
    }

    if (Math.abs(pullDeltaX) >= decisionVal) {
      $card.addClass("inactive");

      setTimeout(function() {
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

    setTimeout(function() {
      $card
        .attr("style", "")
        .removeClass("reset")
        .find(".demo__card__choice")
        .attr("style", "");

      pullDeltaX = 0;
      animating = false;
    }, 300);
  }

  $(document).on("mousedown touchstart", ".demo__card:not(.inactive)", function(
    e
  ) {
    if (animating) return;

    $card = $(this);
    $cardReject = $(".demo__card__choice.m--reject", $card);
    $cardLike = $(".demo__card__choice.m--like", $card);
    var startX = e.pageX || e.originalEvent.touches[0].pageX;

    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      pullDeltaX = x - startX;
      if (!pullDeltaX) return;
      pullChange();
    });

    $(document).on("mouseup touchend", function() {
      $(document).off("mousemove touchmove mouseup touchend");
      if (!pullDeltaX) return; // prevents from rapid click events
      release();
    });
  });
});
