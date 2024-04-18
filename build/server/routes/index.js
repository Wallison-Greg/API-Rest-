"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const http_status_codes_1 = require("http-status-codes");
//rota home
router.get("/", (req, res) => {
    return res.status(http_status_codes_1.StatusCodes.ACCEPTED).json({ msg: "ola mundo" });
});
