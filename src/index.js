const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3002;

app.use(morgan("combined"));

app.engine("hbs", handlebars.engine({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => res.render("home"));
app.get("/news", (req, res) => res.render("news"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
