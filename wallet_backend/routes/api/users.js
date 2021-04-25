const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// user model
const User = require("../../models/User");

/**
 * utils
 */
const { getRandom } = require("../../helpers/utils");

/**
 * register user
 */
router.post("/", (req, res) => {
  const { name, email, phone, password, userRef } = req.body;

  //Validate request
  if (!name || !email || !phone || !password) {
    return res
      .status(400)
      .json({ msg: "Please enter name, email, phone, and password" });
  }

  //Check if user exist
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      phone,
      account_number: getRandom(11),
      account_balance: getRandom(5),
      userRef,
      password,
    });

    //create salt
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;

        newUser.save().then((user) => {
          jwt.sign(
            { id: user._id },
            config.get("secret"),
            {
              expiresIn: 3600,
            },
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
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
