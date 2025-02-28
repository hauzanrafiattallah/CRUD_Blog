const express = require("express");
const app = express();
const port = 3000;

const postRoutes = require("./routes/postRoutes");

app.get("/", (req, res) => {
  res.send("Hello World wkwkwkkwkwkwk!");
});

app.use("/api", postRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
