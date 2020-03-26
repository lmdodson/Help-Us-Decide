// NOTE: 13 ITEMS TO CHANGE.

var constants = require("constants");

exports.check = function (req, res, next) {
    thePassword = req.body.password;
    theLevel = req.body.level;

    if (
        theLevel == "LOGIN" &&
        constants.passwords("LOGIN").includes(thePassword)
    ) {
        req.session.theSecret = constants.sessionSecret("LOGIN");
        return res.json({
            success: true,
            nextPage: "platforms"
        });
    }
};