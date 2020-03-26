/* eslint-disable semi */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
exports.passwords = function (login) {
  PASSWORDS = {
    // eslint-disable-next-line prettier/prettier
    "LOGIN": ["password!", "pass"]
  // eslint-disable-next-line semi
  }
  return PASSWORDS[login];
}

exports.sessionSecret = function (login) {
  SECRETS = {
    // eslint-disable-next-line prettier/prettier
    "LOGIN": "7iuntujyhxz453tf5yg75im7igv6n5f6yge645dyt"
  // eslint-disable-next-line semi
  }
  return SECRETS[login];
}
