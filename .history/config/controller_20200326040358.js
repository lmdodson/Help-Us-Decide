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
                // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
                success: true,
                nextPage: "ANOT",
                modal: true,
                picture: true,
                pictureUrl: "../puzzles/ac/img/pipeDown.gif",
                audio: true,
                audioFileMp3: "../puzzles/ac/audio/pipe.mp3",
                audioFileOgg: "../puzzles/ac/audio/pipe.ogg",
                audioFileWav: "../puzzles/ac/audio/pipe.wav"
            });
        }
    }

    if (theLevel == "TWO" && constants.passwords("TWO").includes(thePassword)) {
        req.session.theSecret = constants.sessionSecret("TWO");
        // ! NOTE: CUSTOMIZE THE 10 FIELDS BELOW.
        if (thePassword == "t yoshisaur munchakoopas") {
            return res.json({
                success: true,
                nextPage: "ANO",
                modal: true,
                picture: true,
                pictureUrl: "../puzzles/ac/img/2/success.jpg",
                audio: true,
                audioFileMp3: "../puzzles/ac/audio/lEnd.mp3",
                audioFileOgg: "../puzzles/ac/audio/lEnd.ogg",
                audioFileWav: "../puzzles/ac/audio/lEnd.wav"
            });
        } else {
            return res.json({
                // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
                success: true,
                nextPage: "ANOTH",
                modal: true,
                picture: true,
                pictureUrl: "../puzzles/ac/img/pipeDown.gif",
                audio: true,
                audioFileMp3: "../puzzles/ac/audio/pipe.mp3",
                audioFileOgg: "../puzzles/ac/audio/pipe.ogg",
                audioFileWav: "../puzzles/ac/audio/pipe.wav"
            });
        }
    }

    if (
        theLevel == "THREE" &&
        constants.passwords("THREE").includes(thePassword)
    ) {
        req.session.theSecret = constants.sessionSecret("THREE");
        return res.json({
            // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
            success: true,
            nextPage: "ANOTHE",
            modal: true,
            picture: true,
            pictureUrl: "../puzzles/ac/img/3/success.jpg",
            audio: true,
            audioFileMp3: "../puzzles/ac/audio/lEnd.mp3",
            audioFileOgg: "../puzzles/ac/audio/lEnd.ogg",
            audioFileWav: "../puzzles/ac/audio/lEnd.wav"
        });
    }

    if (theLevel == "FOUR" && constants.passwords("FOUR").includes(thePassword)) {
        req.session.theSecret = constants.sessionSecret("FOUR");
        // ! NOTE: CUSTOMIZE THE 10 FIELDS BELOW.
        if (thePassword == "oyama") {
            return res.json({
                success: true,
                nextPage: "ANOTH",
                modal: true,
                picture: true,
                pictureUrl: "../puzzles/ac/img/4/success.jpg",
                audio: true,
                audioFileMp3: "../puzzles/ac/audio/lEnd.mp3",
                audioFileOgg: "../puzzles/ac/audio/lEnd.ogg",
                audioFileWav: "../puzzles/ac/audio/lEnd.wav"
            });
        } else {
            return res.json({
                // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
                success: true,
                nextPage: "AN",
                modal: true,
                picture: true,
                pictureUrl: "../puzzles/ac/img/pipeUp.gif",
                audio: true,
                audioFileMp3: "../puzzles/ac/audio/pipe.mp3",
                audioFileOgg: "../puzzles/ac/audio/pipe.ogg",
                audioFileWav: "../puzzles/ac/audio/pipe.wav"
            });
        }
    }

    if (theLevel == "FIVE" && constants.passwords("FIVE").includes(thePassword)) {
        req.session.theSecret = constants.sessionSecret("FIVE");
        // ! NOTE: CUSTOMIZE THE 10 FIELDS BELOW.
        if (thePassword == "mario jumpman mario") {
            return res.json({
                success: true,
                nextPage: "AN",
                modal: true,
                picture: true,
                pictureUrl: "../puzzles/ac/img/pipeUp.gif",
                audio: true,
                audioFileMp3: "../puzzles/ac/audio/pipe.mp3",
                audioFileOgg: "../puzzles/ac/audio/pipe.ogg",
                audioFileWav: "../puzzles/ac/audio/pipe.wav"
            });
        } else {
            return res.json({
                // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
                success: true,
                nextPage: "ANO",
                modal: true,
                picture: true,
                pictureUrl: "../puzzles/ac/img/5/success.jpg",
                audio: true,
                audioFileMp3: "../puzzles/ac/audio/lEnd.mp3",
                audioFileOgg: "../puzzles/ac/audio/lEnd.ogg",
                audioFileWav: "../puzzles/ac/audio/lEnd.wav"
            });
        }
    }

    if (theLevel == "SIX" && constants.passwords("SIX").includes(thePassword)) {
        req.session.theSecret = constants.sessionSecret("SIX");
        return res.json({
            // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
            success: true,
            nextPage: "ANOTHER",
            modal: true,
            picture: true,
            pictureUrl: "../puzzles/ac/img/6/success.jpg",
            audio: true,
            audioFileMp3: "../puzzles/ac/audio/lEnd.mp3",
            audioFileOgg: "../puzzles/ac/audio/lEnd.ogg",
            audioFileWav: "../puzzles/ac/audio/lEnd.wav"
        });
    }

    if (
        theLevel == "SEVEN" &&
        constants.passwords("SEVEN").includes(thePassword)
    ) {
        req.session.theSecret = constants.sessionSecret("SEVEN");
        return res.json({
            // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
            success: true,
            nextPage: "ANOTHERCASTLE",
            modal: true,
            picture: true,
            pictureUrl: "../puzzles/ac/img/7/success.jpg",
            audio: true,
            audioFileMp3: "../puzzles/ac/audio/lEnd.mp3",
            audioFileOgg: "../puzzles/ac/audio/lEnd.ogg",
            audioFileWav: "../puzzles/ac/audio/lEnd.wav"
        });
    }

    if (
        theLevel == "EIGHT" &&
        constants.passwords("EIGHT").includes(thePassword)
    ) {
        req.session.theSecret = constants.sessionSecret("EIGHT");
        return res.json({
            // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
            success: true,
            nextPage: "SOLVED",
            modal: true,
            picture: true,
            pictureUrl: "../puzzles/ac/img/8/success.png",
            audio: true,
            audioFileMp3: "../puzzles/ac/audio/dk.mp3",
            audioFileOgg: "../puzzles/ac/audio/dk.ogg",
            audioFileWav: "../puzzles/ac/audio/dk.wav"
        });
    }

    if (theLevel == "NINE" && constants.passwords("NINE").includes(thePassword)) {
        req.session.theSecret = constants.sessionSecret("NINE");
        return res.json({
            // ! NOTE: CUSTOMIZE THE 9 FIELDS BELOW.
            success: false,
            nextPage: "",
            modal: false,
            picture: false,
            pictureUrl: "",
            audio: false,
            audioFileMp3: "",
            audioFileOgg: "",
            audioFileWav: ""
        });
    }
    return res.json({
        success: false,
        message: "Boooooo"
    });
};