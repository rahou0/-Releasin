const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const logger = require("./src/utils/logger");
dotenv.config();
const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("./src/routes/index");

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => logger.info("Connecting to " + app.address().port));
