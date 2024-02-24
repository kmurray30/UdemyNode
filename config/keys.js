// keys.js - figure out what set of creds to return
if (process.env.NOCE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
