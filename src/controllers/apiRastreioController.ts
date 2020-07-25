import { ApiRastreioService } from "../services/apiRastreioService";
import { ICodigoRastreio } from "../models/ICodigoRastreio";

export class ApiRastreioController {

    private service: ApiRastreioService;

    constructor({ service = new ApiRastreioService() }) {
        this.service = service;
    }

    public async rastreiaEncomenda(body: ICodigoRastreio) {

        return this.service.rastreiaEncomenda(body);
    }
}
