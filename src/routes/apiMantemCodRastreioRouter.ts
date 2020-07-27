import express, {Router} from "express";
import { ApiMantemCodRastreioController } from "../controllers/apiMantemCodRastreioController";
import apiRastreioRouter from "./apiRastreioRouter";

const apiMantemCodRastreioRouter = Router();

const path = "/apiMantemCodRastreio";

apiMantemCodRastreioRouter.get(`${path}/`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const apiMantemCodRastreioController = new ApiMantemCodRastreioController({});
    apiMantemCodRastreioController.buscaTodosCodRastreio()
        .then(resposta => {
            response.set('Access-Control-Allow-Origin', '*');
            response.json(resposta);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

apiMantemCodRastreioRouter.get(`${path}/:id`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const apiMantemCodRastreioController = new ApiMantemCodRastreioController({});
    apiMantemCodRastreioController.buscaCodRastreioPorId(+request.params.id)
        .then(resposta => {
            response.set('Access-Control-Allow-Origin', '*');
            response.json(resposta);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

apiMantemCodRastreioRouter.delete(`${path}/:id`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const apiMantemCodRastreioController = new ApiMantemCodRastreioController({});
    apiMantemCodRastreioController.deletaCodRastreio(+request.params.id)
        .then(resposta => {
            response.set('Access-Control-Allow-Origin', '*');
            response.json(resposta);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

apiRastreioRouter.post(`${path}/`, (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const apiMantemCodRastreioController = new ApiMantemCodRastreioController({});
    apiMantemCodRastreioController.salvaCodRastreio(request.body)
        .then(resposta => {
            response.set('Access-Control-Allow-Origin', '*');
            response.json(resposta);
            next();
        })
        .catch(error => {
            console.log(error);
            next(error);
        })
});

export default apiMantemCodRastreioRouter;
