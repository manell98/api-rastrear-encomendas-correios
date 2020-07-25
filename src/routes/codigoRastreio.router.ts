import express, { Router } from 'express';
import {CodigoRastreioController} from "../controllers/codigoRastreio.controller";

const codigoRastreioRouter = Router();

const path = "/codigoRastreio";

codigoRastreioRouter.post(`${path}/`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const codigoRastreioController = new CodigoRastreioController({});
    codigoRastreioController.rastreiaEncomenda(request.body)
        .then(resposta => {
            response.json(resposta);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

export default codigoRastreioRouter;
