"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter.post("/signUp", auth_controller_1.signUp).post("/signIn", auth_controller_1.signIn);
exports.default = authRouter;
