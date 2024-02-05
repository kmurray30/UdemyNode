require("https").globalAgent.options.rejectUnauthorized = false; // todo kymurray remove
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport.js");
require("./routes/authRoutes.js");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

var counter = 0;
app.get("/", (req, res) => {
  counter++;
  res.send({ yo: "this page has not been visited " + counter + " times" });
});

const PORT = process.env.PORT || 5000;
console.log("port is " + PORT);
app.listen(PORT);
