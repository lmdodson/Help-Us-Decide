// NOTE: CHANGE ITEMS AS NEEDED.

// ! NOTE: ITEMS CAN BE USED AND CUSTOMIZED, OR REMOVED/COMMENTED OUT.
exports.passwords = function (level) {
    PASSWORDS = {
        ONE: ["jumpman", "ossan"]
    };
    return PASSWORDS[level];
};

exports.sessionSecret = function (level) {
    SECRETS = {
        ONE: "leeevvviiilllll1S3c-r-e-t-!"
    };
    return SECRETS[level];
};