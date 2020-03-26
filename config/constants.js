/* eslint-disable semi */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
exports.passwords = function (user) {
  PASSWORDS = {
    // eslint-disable-next-line prettier/prettier
    "USER1": ["pass"],
    "USER2": ["DIFFpass"]
  // eslint-disable-next-line semi
  }
  return PASSWORDS[user];
}

exports.sessionSecret = function (login) {
  SECRETS = {
    // eslint-disable-next-line prettier/prettier
    "USER1": "7iuntujyhxz453tf5yg75im7igv6n5f6yge645dyt",
    "USER2": "lkhjgjsjhg;lknljgvuyrd754durtjcfkhgvfxjhf"


  // eslint-disable-next-line semi
  }
  return SECRETS[login];
}
