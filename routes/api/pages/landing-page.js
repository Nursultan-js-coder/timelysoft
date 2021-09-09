const express = require("express");
const router = express.Router();

const Page = require("../../models/Page");

router.get("/", (req, res) => {
  Page.find()
    .sort({ data: -1 })
    .then((items) => res.json(items));
});
