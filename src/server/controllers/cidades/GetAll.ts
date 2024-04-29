import { RequestHandler} from "express"//importando a tipagem para a função 
import { StatusCodes } from "http-status-codes";//importando o codigo de status
import * as yup from "yup"
import { validation } from "../../shared/middleware/Validation";//middleware

//tipando os dados da requisição
interface IQueryProps {
    page?: number,
    limite?: number,
    filter?: string
}

//regra de validação de dados com a tipagem definida
const getAllValidator: yup.Schema<IQueryProps> = yup.object().shape({
    page: yup.number().moreThan(0),
    limite: yup.number().moreThan(0),
    filter: yup.string()

})

//pegando a validação dos dados e passando a regra de validação 
export const getAllValidation = validation('query' ,getAllValidator);

//tipagem "RequestHandler" faz com que a função possa receber parametros para middleware (req, res, next)
export const getAll: RequestHandler = async (req, res) => {
    console.log(req.query)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('retorno da requisição')

}