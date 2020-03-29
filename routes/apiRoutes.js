var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/movies", function (req, res) {
    db.movies
      .findAll({
        where: {
          category: "Adventure"
        },
        limit: 5
      })
      .then(function (test) {
        res.json(test);
        // console.log(test);
      });
  });

  // get all movies of a specific genre
  // Get route for returning posts of a specific category
  app.get("/api/movies/category/:genre", function (req, res) {
    db.movies
      .findAll({
        where: {
          category: req.params.genre
        },
        limit: 5
      })
      .then(function (dbMovies) {
        res.json(dbMovies);
      });
  });

  app.get("/api/users", function (req, res) {
    db.users
      .findAll({
        // where: {
        //   user: req.params.user,
        // }
      })
      .then(function (test) {
        res.json(test);
      });
  });

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};