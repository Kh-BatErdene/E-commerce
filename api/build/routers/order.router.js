"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const orderRouter = (0, express_1.Router)();
orderRouter.post("/addOrder", order_controller_1.addOrder).get("/getMerchOrders", order_controller_1.getMerchOrders);
exports.default = orderRouter;
