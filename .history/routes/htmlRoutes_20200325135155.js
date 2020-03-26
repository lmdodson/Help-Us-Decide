// var db = require("../models");

module.exports = function (app) {
  // render index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // render platforms selection page
  app.get("/platforms", function (req, res) {
    res.render("platforms");
  });

  // render genres selection page
  app.get("/genres", function (req, res) {
    res.render("genres");
  });
  // render cards page
  app.get("/cards", function (req, res) {
    res.render("cards");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
};