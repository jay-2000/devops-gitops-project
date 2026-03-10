const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 FULLY AUTOMATED GITOPS PIPELINE!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
