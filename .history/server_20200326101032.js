require("dotenv").config();
var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
var cookieParser = require("cookie-parser");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(express.static("public"));

app.use(cookieParser());

// session
app.use(
  session({
    secret: "theSecret",
    resave: true,
    saveUninitialized: false,
    cookie: {}
  })
);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
var router = require("./routes/htmlRoutes");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

app.use("/", routes);

module.exports = app;
