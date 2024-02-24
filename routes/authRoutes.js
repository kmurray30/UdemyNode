const passport = require("passport");
const util = require("util");

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
    // console.log(req);
    // console.log(
    //   util.inspect(req, {
    //     depth: 5,
    //     colors: true,
    //   })
    // );
    res.send(req.session);
    // res.send(req.user);
  });
};
