exports.passwords = function(level) {
  PASSWORDS = {
    LOGIN: ["password!"]
  };
  return PASSWORDS[level];
};

exports.sessionSecret = function(level) {
  SECRETS = {
    LOGIN: "7iuntujyhxz453tf5yg75im7igv6n5f6yge645dyt"
  };
  return SECRETS[level];
};
