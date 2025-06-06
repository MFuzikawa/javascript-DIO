import express from "express";
import usersRoute from "./routes/usersRoute";
import errorHandler from "./middlewares/errorHandlerMiddleware";
import autorizationRoute from "./routes/authorizationRoute";
import bearerAuthenticationMiddleware from "./middlewares/bearerAuthenticationMiddleware";

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}))

const port = 5000;

//configuração de rota
server.use(usersRoute);
server.use(bearerAuthenticationMiddleware,autorizationRoute)
//middlewares de tratamento de erro
server.use(errorHandler);


server.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port}!!`);
})