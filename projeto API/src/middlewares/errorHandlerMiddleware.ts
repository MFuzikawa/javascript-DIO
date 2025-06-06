import { Request, Response, NextFunction } from "express";
import DatabaseError from "../models/error/databaseErrorModel";
import forbiddenError from "../models/error/forbiddenErrorModel";

function errorHandler(error:any, req:Request, res:Response, next:NextFunction) {
    if (error instanceof DatabaseError) {
        res.sendStatus(400);
    }else if (error instanceof forbiddenError) {
        res.sendStatus(404)
    } else {
        res.sendStatus(500);
    }
}
export default errorHandler