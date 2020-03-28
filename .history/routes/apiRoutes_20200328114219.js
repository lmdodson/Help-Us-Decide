var db = require("../models");

module.exports = function (app) {
  // Get all movies
  app.get("/api/genres", function (req, res) {
    db.movies
      .findAll({
        where: {
          category: "Adventure"
        },
        limit: 10
      })
      .then(function (test) {
        res.json(test);
        // console.log(test);
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