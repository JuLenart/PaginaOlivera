const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderHome, renderReserva } = require("../controllers/index.controller");

router.get("/index", renderIndex);
router.get("/about", renderAbout);
router.get("/home", renderHome);
router.get("/Reserva", renderReserva);
module.exports = router;
