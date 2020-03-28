// var db = require("../models");
var constants = require('../config/constants');
var controller = require('../config/controller');
var express = require("express");

module.exports = function (app) {
  // render login page 
  app.get('/', function (req, res) {
    res.render('login', {
      title: "Welcome to Whaddya",
      login: "LOGIN",
    });
  });

  // render platforms page
  app.get('/platforms', function (req, res) {
    res.render('platforms', {
      title: "Platforms",
      nextPage: "/genres",
      page: "platforms"
    });
  });

  // render genres selection page
  app.get('/genres', function (req, res) {
    res.render('genres', {
      title: "Genres Choices",
      nextPage: "/cards",
      page: "genres"
    });
  });

  // render cards page
  app.get('/cards', function (req, res) {
    res.render('cards', {
      title: "Movie Choices",
      nextPage: "cards",
      page: "cards"
    });
  });


  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404', {
      title: "404",
      page: "404"
    });
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

  // app.post('/check', controller.check);
  module.exports = app;

};