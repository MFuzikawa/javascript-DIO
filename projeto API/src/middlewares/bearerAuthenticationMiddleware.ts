import { NextFunction, Request, Response } from "express";
import forbiddenError from "../models/error/forbiddenErrorModel";
import JWT from "jsonwebtoken";
import userRepository from "../repositories/userRepository";


async function bearerAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader) {
            throw new forbiddenError("Credenciais não informadas");
        }
        const [authorizationType, token] = authorizationHeader.split(' ');

        if (authorizationType !== 'bearer' || !token) {
            throw new forbiddenError('Tipo de auth invalida');
        }

        const tokenPayload = JWT.verify(token, 'My_secret_key');

        if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
            throw new forbiddenError("Token invalido");
        }

        const uuid = tokenPayload.sub;

        const user = {uuid:tokenPayload.sub, username: tokenPayload.username};

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}
export default bearerAuthenticationMiddleware;