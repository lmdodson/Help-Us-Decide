// NOTE: 13 ITEMS TO CHANGE.

var constants = require("./constants");

exports.check = function(req, res, next) {
  thePassword = req.body.password;
  theLogin = req.body.login;

  console.log("In Controller");

  if (
    theLogin == "LOGIN" &&
    constants.passwords("LOGIN").includes(thePassword)
  ) {
    {
      req.session.theSecret = constants.sessionSecret("LOGIN");
      return res.json({
        success: true,
        nextPage: "platforms"
      });
    }
    console.log("Boo");
    return res.json({
      success: false,
      message: "Boooooo"
    });
  }
};
