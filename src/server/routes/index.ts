import { Router } from "express";
const router = Router();
import { StatusCodes} from "http-status-codes";

//rota home
router.get("/", (req, res) => {
    return res.status(StatusCodes.ACCEPTED).json({msg: "ola mundo"})
})

export {router}