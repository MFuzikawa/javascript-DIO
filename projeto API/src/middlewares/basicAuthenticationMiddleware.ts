import { NextFunction, Request, Response } from "express";
import forbiddenError from "../models/error/forbiddenErrorModel";
import userRepository from "../repositories/userRepository";

async function basicAuthenticationMiddleware(req:Request, res:Response, next:NextFunction){
    try{
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            throw new forbiddenError('Credenciais não informadas');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== "Basic" || !token) {
            throw new forbiddenError("Tipo de autenticação inválido ou token ausente");
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
        
        console.log("Conteúdo do Token Decodificado:", tokenContent);

        const [username, password] = tokenContent.split(':');
        if(!username || !password){
            throw new forbiddenError("Credenciais não preenchidas");
        }

        res.status(200).json({ decoded_credentials: tokenContent, message: "Implementar lógica de autenticação e JWT" });
        const user = await userRepository.findByUsernameAndPassword(username, password);

        if(!user) {
            throw new forbiddenError( 'usuário ou senha inválido');
        }
        req.user = user;
        next();
    }catch(error){
        next(error);
    }
 
}
export default basicAuthenticationMiddleware