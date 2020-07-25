import express, { Router } from 'express';
import {CodigoRastreioController} from "../controllers/codigoRastreio.controller";

const codigoRastreioRouter = Router();

const path = "/codigoRastreio";

codigoRastreioRouter.get(`${path}/`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const codigoRastreioController = new CodigoRastreioController({});
    codigoRastreioController.rastreiaEncomenda(request.query)
        .then(resposta => {
            response.json(resposta);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

codigoRastreioRouter.post(`${path}/`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const codigoRastreioController = new CodigoRastreioController({});
    codigoRastreioController.salvaCodRastreio(request.body)
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
