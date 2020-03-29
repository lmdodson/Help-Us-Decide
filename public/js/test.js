function getMovies(genre) {
    // identifies the genre variable
    var genreString = genre || "";
    // passes genre to the api
    if (genreString) {
        // add the genre to the api
        genreString = "/category/" + genreString;
    }
    // db call using the genre
    $.get("/api/movies" + genreString, function (data) {
        console.log("Movies ", data);
        movies = data;
        for (i = 0; i < movies.length; i++) {
            var x = movies[i].title;
            movieOptions.push(x);
        }
    });
    console.log(movieOptions);

    for (i = 0; i < movieOptions.length; i++) {
        console.log("here");
        console.log(movieOptions[i]);
        // api settings
        var utellyConfig = {
            async: true,
            crossDomain: true,
            url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" +
                movieOptions[i] +
                "&country=us",
            method: "GET",
            headers: {
                "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.UTELLY_API_KEY
            }
        };

        // ajax call
        $.ajax(utellyConfig).done(function (response) {
            console.log(response);
            var platform = response.locations[0];
            var poster = response.picture;
        });
    }

    movieInfo(movieOptions);
}