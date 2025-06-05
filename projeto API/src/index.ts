import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/usersRoute";

const server = express();

server.use(express.json());

const port = 5000;

server.use(usersRoute);


server.get('/status', usersRoute);

server.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port}!!`);
})