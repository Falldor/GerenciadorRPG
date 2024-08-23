"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JogadorController_1 = require("../Controllers/JogadorController");
const router = (0, express_1.Router)();
const jogadorController = new JogadorController_1.JogadorController();
exports.default = router;
