"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes"); //rotas
require("dotenv/config"); //variaveis ambiente
const server = (0, express_1.default)();
exports.server = server;
//ler json
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.json());
//usando as rotas
server.use(routes_1.router);
