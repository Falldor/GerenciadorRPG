"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MonstroController_1 = require("../Controllers/MonstroController");
const router = (0, express_1.Router)();
const monstroController = new MonstroController_1.MonstroController();
exports.default = router;
