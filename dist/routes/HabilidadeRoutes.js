"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HabilidadeController_1 = require("../Controllers/HabilidadeController");
const router = (0, express_1.Router)();
const habilidadeController = new HabilidadeController_1.HabilidadeController();
exports.default = router;
