var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/movies", function (req, res) {
  //   db.movies
  //     .findAll({
  //       where: {
  //         category: "Adventure"
  //       },
  //       limit: 5
  //     })
  //     .then(function (test) {
  //       res.json(test);
  //       // console.log(test);
  //     });
  // });

  // get all movies of a specific genre
  // Get route for returning posts of a specific category
  app.get("/api/movies/category/:genre", function(req, res) {
    db.movies
      .findAll({
        where: {
          category: req.params.genre
        },
        limit: 5
      })
      .then(function(dbMovies) {
        res.json(dbMovies);
      });
  });

  app.get("/api/users", function(req, res) {
    db.users
      .findAll({
        // where: {
        //   user: req.params.user,
        // }
      })
      .then(function(users) {
        res.json(users);
      });
  });

  // Create a new example
  app.post("/api/options", function(req, res) {
    db.Options.create(req.body).then(function(options) {
      res.json(options);
    });
  });

  app.get("/cards", function(req, res) {
    // greab the users movie options
    db.Options.findAll({
      // attributes: ["title"],
      // where: {
      //   id: 1
      // }
    }).then(function(dbOptions) {
      var card0 = dbOptions[0].title;
      var id0 = dbOptions[0].id;
      var img0 = dbOptions[0].img;

      var card1 = dbOptions[1].title;
      var id1 = dbOptions[1].id;
      var img1 = dbOptions[1].img;

      var card2 = dbOptions[2].title;
      var id2 = dbOptions[2].id;
      var img2 = dbOptions[2].img;

      var card3 = dbOptions[3].title;
      var id3 = dbOptions[3].id;
      var img3 = dbOptions[3].img;

      var card4 = dbOptions[4].title;
      var id4 = dbOptions[4].id;
      var img4 = dbOptions[4].img;

      res.render("cards", {
        // title: dbOptions.title
        title: "Movie Choices",
        page: "cards",
        movie0: card0,
        id0: id0,
        img0: img0,
        movie1: card1,
        id1: id1,
        img1: img1,
        movie2: card2,
        id2: id2,
        img2: img2,
        movie3: card3,
        id3: id3,
        img3: img3,
        movie4: card4,
        id4: id4,
        img4: img4
      });
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
