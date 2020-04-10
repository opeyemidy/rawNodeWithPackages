var express = require("express");

var app = express();

app.set("view engine", "ejs");

("// serving static files(middleswares)");
app.use("/assets", express.static("assets"));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/contact", function(req, res) {
  res.render("contact", { qs: req.query });
});

app.get("/profile/:id", function(req, res) {
  var data = {
    name: "ryu",
    age: 29,
    job: "ninja",
    hobbies: ["eating", "fighting", "fishing"]
  };
  res.render("profile", { id: req.params.id, data: data });
});

app.listen(3000, function() {
  console.log("http://127.0.0.1:3000");
});
