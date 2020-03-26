exports.passwords = function(login) {
  PASSWORDS = {
    LOGIN: ["password!"]
  };
  return PASSWORDS[login];
};

exports.sessionSecret = function(login) {
  SECRETS = {
    LOGIN: "7iuntujyhxz453tf5yg75im7igv6n5f6yge645dyt"
  };
  return SECRETS[login];
};
