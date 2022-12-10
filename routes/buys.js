const { response } = require("express");
const express = require("express");
const router = express.Router();
const stores = require("../models/buysModel");

//ALL
router.get("/userId/:userId", async (req, res) => {
  res.send(await stores.find({ userId: req.params.userId }));
});

//POST
router.post("/", async (req, res) => {
  let newStore = new stores({ ...req.body });
  try {
    let store = await newStore.save();
    res.status(200).json(store);
  } catch (error) {
    res.status(400).json({
      title: "Ocurrio un error",
      msg: "Ocurrio un error al crear la tienda",
      error,
    });
  }
});

module.exports = router;
