const uuid = require("uuid");

// Schemas
const Trx = require("../models/Transactions");
const User = require("../models/User");

module.exports = (app, io, db) => {
  io.on("connection", function (socket) {
    // Join every user to the room ID
    socket.on("joinService", ({ roomID }) => {
      socket.join(roomID);
    });

    // Manage send event
    socket.on(
      "send",
      { amount, account_numberm, description, sender, roomID },
      (callback) => {}
    );
  });
};
