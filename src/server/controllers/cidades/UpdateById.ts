import { RequestHandler} from "express"//importando a tipagem para a função 
import { StatusCodes } from "http-status-codes";//importando o codigo de status
import * as yup from "yup"
import { validation } from "../../shared/middleware/Validation";//middleware

//tipando os dados da requisição
interface IParamsProps {
    id?: number
}

interface IBodyProps {
    nome: string
}

//regra de validação de dados com a tipagem definida
const updateByIdValidator: yup.Schema<IParamsProps> = yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
})
const updateBodyValidator: yup.Schema<IBodyProps> = yup.object().shape({
    nome: yup.string().required().min(4)
})

//pegando a validação dos dados e passando a regra de validação 
export const updateByIdValidation = validation('params' ,updateByIdValidator);
export const updateBodyValidation = validation('body' ,updateBodyValidator);

//tipagem "RequestHandler" faz com que a função possa receber parametros para middleware (req, res, next)
export const updateById: RequestHandler = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('retorno da requisição')

}