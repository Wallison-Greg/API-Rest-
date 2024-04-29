import { RequestHandler } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from "yup"

//definindo a tipagem da validaçãs e quais dados ira receber

type TValidation = (filde: 'body' | 'header' | 'query' | 'params', schema: yup.Schema<any> ) => RequestHandler;

//verificando se os dados batem com a validação 
export const validation: TValidation = (field, schema) => {
    
    return async ( req, res, next) => {
        try {

            //pegando os dados da requisição e passando para a validação
            await schema.validate(req[field], {abortEarly: false}) 
            return next()
    
        } catch (error) {
            const yupError = error as yup.ValidationError; //passando a tipagem do erro
    
            const validationError: Record<string, string> = {} //objeto que ira receber os erros (id, value)
    
            yupError.inner.forEach(error => { //mapeando os errors 
                if(!error.path) return;
    
                validationError[error.path] = error.message
            })
    
            return res.status(StatusCodes.BAD_REQUEST).json({errors: validationError})
        }
    }
}