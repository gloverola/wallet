const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// user model
const User = require("../../models/User");

/**
 * Login User
 */
router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    res.status(400).json({ msg: "Please enter all fields" });

  // Check for user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        config.get("secret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return res.status(200).json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              phone: user.phone,
              account_balance: user.account_balance,
              account_number: user.account_number,
            },
            message: "Login successful",
          });
        }
      );
    });
  });
});

module.exports = router;
