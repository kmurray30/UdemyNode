const passport = require("passport");

module.exports = (app) => {
  var counter = 0;
  app.get("/", (req, res) => {
    counter++;
    res.send({ yo: "this page has been visited " + counter + " times" });
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
