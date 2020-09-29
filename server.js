const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/frontend-angular"));

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/dist/frontend-angular/index.html");
});

app.listen(process.env.PORT || 4200);
