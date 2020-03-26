// NOTE: 13 ITEMS TO CHANGE.

var constants = require("../config/constants");

exports.check = function (req, res, next) {
    thePassword = req.body.password;
    theLevel = req.body.level;

    if (theLevel == "ONE" && constants.passwords("ONE").includes(thePassword)) {
        req.session.theSecret = constants.sessionSecret("ONE");
        // ! NOTE: CUSTOMIZE THE 10 FIELDS BELOW.
        if (thePassword == "jumpman") {
            return res.json({
                success: true,
                nextPage: "AN",
                modal: true,
                picture: true,
                pictureUrl: "../puzzles/ac/img/1/success.jpg",
                audio: true,
                audioFileMp3: "../puzzles/ac/audio/lEnd.mp3",
                audioFileOgg: "../puzzles/ac/audio/lEnd.ogg",
                audioFileWav: "../puzzles/ac/audio/lEnd.wav"
            });
        } else {
            return res.json({
                success: false,
                message: "Boooooo"
            });
        }
    }
};