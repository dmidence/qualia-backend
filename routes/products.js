const { response } = require("express");
const express = require("express");
const router = express.Router();
const products = require("../models/productsModel");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: "public/",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
var upload = multer({ storage: storage });

// http://127.0.0.1:8888/pc2022.jpeg
//Store
router.get("/store/:storeId", async (req, res) => {
  res.send(await products.find({ storeId: req.params.storeId }));
});

//POST
router.post("/", upload.single("img"), async (req, res) => {
  console.log(req.body);
  try {
    req.body.img = req.file.filename;
    let newStore = new products({ ...req.body });
    let store = await newStore.save();
    res.status(200).json(store);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      title: "Ocurrio un error",
      msg: "Ocurrio un error al crear el producto",
    });
  }
});

//PUT
router.put("/:id", upload.single("img"), async (req, res) => {
  console.log(req.params.id);
  var response = await products.update(
    { _id: req.params.id },
    {
      ...req.body,
    }
  );

  res.send(response);
});

//DELETE
router.delete("/:id", async (req, res) => {
  var response = await products.deleteOne({ _id: req.params.id });
  res.send(response);
});

module.exports = router;
