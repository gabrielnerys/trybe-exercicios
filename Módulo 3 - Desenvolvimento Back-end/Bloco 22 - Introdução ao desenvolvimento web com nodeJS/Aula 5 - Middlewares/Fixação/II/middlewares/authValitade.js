const users = require('../data/user');

const authValidate = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: "Username and password can't be blank!" });
  }

  const foundUser = users.find((u) => u.username === username);

  if (!foundUser) {
    return res.status(401).json({ message: "Invalid Credentials" })
  }

  if (!(username === foundUser.username && password === foundUser.password)) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  req.user = foundUser;

  next();
}

module.exports = authValidate;