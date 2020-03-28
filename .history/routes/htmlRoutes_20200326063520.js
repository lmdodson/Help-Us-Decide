// var db = require("../models");
var constants = require("../config/constants");
var controller = require("../config/controller");
var express = require("express");
var router = express.Router();

// *****************************

// GET method route
app.get('*', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('*', function (req, res) {
  res.send('POST request to the homepage')
})

router.post("*", (req, res) => res.send({
  success: false,
  message: '404',
}), );

// *****************************
module.exports = function (app) {
  // render index page
  app.get("/", function (req, res) {
    res.render("index", {
      title: "Welcome to Whaddya"
    });
  });

  // render login page
  app.get("/login", function (req, res) {
    res.render("login", {
      title: "Whaddya Login",
      login: "LOGIN"
    });
  });

  router.get('/platforms', function (req, res, next) {
    if (req.session.theSecret == constants.sessionSecret("LOGIN")) {
      res.render('platforms', {
        title: 'Platforms !!'
      });
    } else {
      console.log("no can do...")
    }
  });

  // render platforms selection page
  // app.get("/platforms", function (req, res) {
  //   res.render("platforms", {
  //     title: "Platforms"
  //   });
  // });


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

  router.post("/check", controller.check);
  module.exports = router;

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