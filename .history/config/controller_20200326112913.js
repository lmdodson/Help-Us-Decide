/* eslint-disable semi */
// NOTE: 13 ITEMS TO CHANGE.

var constants = require("./constants");

exports.check = function(req, res, next) {
  theUser = req.body.user;
  thePassword = req.body.password;
  theLogin = req.body.login;

  console.log("In Controller");

  if (
    theLogin == "LOGIN" &&
    constants.passwords(theUser).includes(thePassword)
  ) {
    {
      req.session.theSecret = constants.sessionSecret(theUser);
      return res.json({
        success: true,
        modal: true,
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
