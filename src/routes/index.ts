import { Router } from 'express';
import apiRastreioRouter from "./apiRastreioRouter";

const routes = Router();

routes.use(apiRastreioRouter);

export default routes;
