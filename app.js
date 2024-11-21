const express = require("express");
const bodyParser = require("body-parser");
const bfhlRoutes = require("./routes/bfhl-routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/bfhl", bfhlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});