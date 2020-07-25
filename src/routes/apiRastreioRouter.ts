import express, { Router } from 'express';
import { ApiRastreioController } from "../controllers/apiRastreioController";

const apiRastreioRouter = Router();

const path = "/apiRastreio";

apiRastreioRouter.get(`${path}/`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const apiRastreioController = new ApiRastreioController({});
    apiRastreioController.rastreiaEncomenda(request.query)
        .then(resposta => {
            response.json(resposta);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

apiRastreioRouter.get(`${path}/:id`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const codigoRastreioController = new ApiRastreioController({});
    codigoRastreioController.buscaEncomendaPorId(+request.params.id)
        .then(resposta => {
            response.json(resposta);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

apiRastreioRouter.post(`${path}/`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const codigoRastreioController = new ApiRastreioController({});
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

export default apiRastreioRouter;
