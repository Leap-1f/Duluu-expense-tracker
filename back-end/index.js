const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercelasdsadadsad"));
app.get("/api", (req, res) => res.send("hello leap guys"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
