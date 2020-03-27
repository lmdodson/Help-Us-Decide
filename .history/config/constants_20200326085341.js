/* eslint-disable semi */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
exports.passwords = function (level) {
  PASSWORDS = {
    // eslint-disable-next-line prettier/prettier
    "LOGIN": ["password!", "pass"]
  // eslint-disable-next-line semi
  }
  return PASSWORDS[level];
}

exports.sessionSecret = function (level) {
  SECRETS = {
    // eslint-disable-next-line prettier/prettier
    "LOGIN": "7iuntujyhxz453tf5yg75im7igv6n5f6yge645dyt"
  // eslint-disable-next-line semi
  }
  return SECRETS[level];
}
