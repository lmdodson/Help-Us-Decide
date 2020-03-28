// var db = require("../models");

module.exports = function(app) {
	// render index page
	app.get("/", function(req, res) {
		res.render("index", {
			title: "Welcome to Whaddya"
		});
	});

	// render login page
	app.get("/login", function(req, res) {
		res.render("login", {
			title: "Whaddya Login"
		});
	});

	// render platforms selection page
	app.get("/platforms", function(req, res) {
		res.render("platforms", {
			title: "Platforms"
		});
	});

	// router.get('/A', function (req, res, next) {
	//     res.render('ac/step1', {
	//       level: "ONE",
	//       fieldLabel: "Flag:",
	//       placeholder: "Ransom Note",
	//       layout: 'layoutAC',
	//       title: 'It Starts...'
	//   });
	// });

	// render genres selection page
	app.get("/genres", function(req, res) {
		res.render("genres");
	});
	// render cards page
	app.get("/cards", function(req, res) {
		res.render("cards");
	});

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
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
