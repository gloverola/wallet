const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const mongoose = require("mongoose");
const config = require("config");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Initialize App
const app = express();

//Bodyparser middleware
app.use(express.json());

//Environment Variables
dotenv.config({ path: "./config.env" });

// Create Server
const server = http.createServer(app);
const io = socketio(server).sockets;

// Dev logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Database Configuaration
const db = config.get("mongoURI");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("home page"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Web Socket
require("./middleware/socket")(app, io, db);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
