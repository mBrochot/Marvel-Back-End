require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

//--------Import des routes---------\\
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
const searchRoutes = require("./routes/search");

//-----Initialisation des routes-----\\
app.use(charactersRoutes);
app.use(comicsRoutes);
app.use(searchRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
