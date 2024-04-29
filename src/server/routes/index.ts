import { Router } from "express";
import { StatusCodes} from "http-status-codes";
import { cidadesController } from "../controllers/cidades";

const router = Router();

//rota teste
router.get("/", (req, res) => {
    return res.status(StatusCodes.ACCEPTED).json({msg: "ola mundo"})
});

//rota cadastro de cidades
router.post("/cidades", cidadesController.createBodyValidation, cidadesController.create);

//rota busca de cidades
router.get("/cidades", cidadesController.getAllValidation, cidadesController.getAll);

//rota busca de cidade pelo id 
router.get("/cidades/:id", cidadesController.getByIdValidation, cidadesController.getById);

//rota atualização de cidade pelo id 
router.put("/cidades/:id", 
            cidadesController.updateBodyValidation, 
            cidadesController.updateByIdValidation, 
            cidadesController.updateById);

//rota exclusão de cidade pelo id 
router.delete("/cidades/:id", cidadesController.deleteByIdValidation, cidadesController.deleteById);

export {router}


/*
estrutura das rotas:
router.http("/url", middleware, controler)

basicamente a estrutura das rota esta sendo feito da seguinte forma: 
1- metodo http: nessa parte recebemos o metodo http sendo ele ("get", "post", "delete", "patch", "put")
2- url: nessa parte definimos o caminho da rota 
3- middleware: nessa parte utilizamos os middleware que nesse caso esta fazendo a validação dos dasdos 
4- controler: nessa parte estamos utilizando o controle que nesse caso ira ser executado, realizando o "CRUD"
*/