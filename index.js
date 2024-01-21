require("https").globalAgent.options.rejectUnauthorized = false; // todo kymurray remove
const express = require("express");
require("./services/passport.js");
require("./routes/authRoutes.js");

const app = express();

require("./routes/authRoutes")(app);

var counter = 0;
app.get("/", (req, res) => {
  counter++;
  res.send({ yo: "this page has not been visited " + counter + " times" });
});

const PORT = process.env.PORT || 5000;
console.log("port is " + PORT);
app.listen(PORT);
