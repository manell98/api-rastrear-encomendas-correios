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

export default apiRastreioRouter;
