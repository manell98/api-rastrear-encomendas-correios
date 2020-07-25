import { Router } from 'express';
import apiRastreioRouter from "./apiRastreioRouter";
import apiMantemCodRastreioRouter from "./apiMantemCodRastreioRouter";

const routes = Router();

routes.use(apiRastreioRouter, apiMantemCodRastreioRouter);

export default routes;
