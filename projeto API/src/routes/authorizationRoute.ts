import { NextFunction, Request, Response, Router } from "express";
import forbiddenError from "../models/error/forbiddenErrorModel";
import userRepository from "../repositories/userRepository";
import JWT from 'jsonwebtoken';
import basicAuthenticationMiddleware from "../middlewares/basicAuthenticationMiddleware";
import bearerAuthenticationMiddleware from "../middlewares/bearerAuthenticationMiddleware";

const autorizationRoute = Router();

autorizationRoute.post('/toke/validate', bearerAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    
    res.sendStatus(200);
})

autorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;
        if(!user) {
            throw new forbiddenError("Usuário não informado");
        }
        const jwtPayload = {username:user.username};
        const jwtOptions = {subject:user?.uuid};
        const secretKey = "My_secret_key";
        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions );
        res.status(200).json({token: jwt});
    } catch (error) {
        next(error); 
    }
});


export default autorizationRoute;
