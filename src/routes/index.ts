import { Router } from 'express';
import codigoRastreioRouter from "./codigoRastreio.router";

const routes = Router();

routes.use(codigoRastreioRouter);

export default routes;
