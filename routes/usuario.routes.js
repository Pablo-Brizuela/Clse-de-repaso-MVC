const express = require("express");
const usuarioController = require("../controllers/usuario.controller");

const router = express.Router();

router.get("/", usuarioController.lista);
router.get("/:id", usuarioController.usarioPorId);

module.exports = router;
