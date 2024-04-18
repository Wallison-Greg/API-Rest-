import express from "express";
import { router } from "./routes"; //rotas
import 'dotenv/config'; //variaveis ambiente


const server = express();

//ler json
server.use( express.urlencoded( {extended:true} ) )
server.use(express.json())

//usando as rotas
server.use(router);

export {server}