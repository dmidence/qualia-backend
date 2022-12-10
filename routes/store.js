const { response } = require("express");
const express = require("express");
const router = express.Router();
const stores = require("../models/storesModel");

//ALL STORES
router.get("/allstores", async (req, res) => {
  res.send(await stores.find({}));
});

//ALL
router.get("/userId/:userId", async (req, res) => {
  res.send(await stores.find({ userId: req.params.userId }));
});

//ONE
router.get("/:id", async (req, res) => {
  let store = await stores.find({ _id: req.params.id });
  res.send(store[0]);
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
    });
  }
});

//PUT
router.put("/:id", async (req, res) => {
  console.log(req.body);
  var response = await stores.update(
    { _id: req.params.id },
    {
      ...req.body,
    }
  );

  res.send(response);
});

router.delete("/:id", async (req, res) => {
  var response = await stores.deleteOne({ _id: req.params.id });
  res.send(response);
});

module.exports = router;
