const express = require("express");
const router = express.Router();
const Task = require("../model/tash.model")
const controller = require("../controller/task.controller")

router.get("/detail/:id",controller.detail)
router.get("/", controller.index)
module.exports = router