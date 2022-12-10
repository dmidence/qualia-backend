const cors = require("cors");
const express = require("express");

const { dbConection } = require("./config/db");

dbConection();
// Routes
const usersRouter = require("./routes/user");
const storeRouter = require("./routes/store");
const templateRouter = require("./routes/template");
const htmlTemplate = require("./routes/htmlTemplate");
const products = require("./routes/products");
const buysRouter = require("./routes/buys");
//Confs
const app = express();
const router = express.Router();

const bodyParser = require("body-parser");
app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));

app.use("/api", router);
app.use("/users", usersRouter);
app.use("/stores", storeRouter);
app.use("/templates", templateRouter);
app.use("/htmltemplate", htmlTemplate);
app.use("/products", products);
app.use("/buys", buysRouter);

router.get("/", (req, res) => {
  res.send("Qualia Space te da la bienvenida");
});
app.use(router);

app.listen(8888, () => console.log(`Server runing on port 8888`));
