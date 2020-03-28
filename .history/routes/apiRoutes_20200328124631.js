var db = require("../models");

module.exports = function (app) {
  // Get all movies
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

  app.get("/api/authors/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Author.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function (dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/api/users", function (req, res) {
    db.users.findAll({
      // where: {
      //   user: req.params.user,

      // }
    }).then(function (test) {
      res.json(test);
    })
  })

  app.get("/api/genres", function (req, res) {
    db.movies
      .findAll({
        where: {
          category: req.params.genre
        },
        limit: 5
      }).then(function (test) {
        res.json(test)
      })
  })

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