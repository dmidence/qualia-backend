const { response } = require("express");
const express = require("express");
const router = express.Router();
const templates = require("../models/htmlTemplateModel");

//ALL
router.get("/store/", async (req, res) => {
  res.send(await templates.find({}));
});

//ONE
router.get("/:id", async (req, res) => {
  let store = await templates.find({ _id: req.params.id });
  res.send(store[0]);
});

//POST
router.post("/", async (req, res) => {
  let newStore = new templates({ ...req.body });
  try {
    let store = await newStore.save();
    res.status(200).json(store);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      title: "Ocurrio un error",
      msg: "Ocurrio un error al crear la tienda",
    });
  }
});

//PUT
router.put("/:id", async (req, res) => {
  var response = await templates.update(
    { _id: req.params.id },
    {
      ...req.body,
    }
  );

  res.send(response);
});

//DELETE
router.delete("/:id", async (req, res) => {
  var response = await templates.deleteOne({ _id: req.params.id });
  res.send(response);
});

module.exports = router;
