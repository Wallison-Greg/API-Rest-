import { RequestHandler} from "express"//importando a tipagem para a função 
import { StatusCodes } from "http-status-codes";//importando o codigo de status
import * as yup from "yup"
import { validation } from "../../shared/middleware/Validation";//middleware

//tipando os dados da requisição
interface IBodyProps {
    nome: string
}

//regra de validação de dados com a tipagem definida
const createBodyValidator: yup.Schema<IBodyProps> = yup.object().shape({
    nome: yup.string().required().min(4)
})


//pegando a validação dos dados e passando a regra de validação 
export const createBodyValidation = validation('body' ,createBodyValidator);

//tipagem "RequestHandler" faz com que a função possa receber parametros para middleware (req, res, next)
export const create: RequestHandler = async (req, res) => {

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('não implementado')

}

/*
yup: utiliozamos essa biblioteca pra validarmos de forma pratica os dados da aplicação
*/