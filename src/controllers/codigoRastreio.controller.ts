import { CodigoRastreioService } from "../services/codigoRastreio.service";
import { ICodigoRastreio } from "../models/ICodigoRastreio";

export class CodigoRastreioController {

    private service: CodigoRastreioService;

    constructor({ service = new CodigoRastreioService() }) {
        this.service = service;
    }

    public async rastreiaEncomenda(body: ICodigoRastreio) {

        return this.service.rastreiaEncomenda(body);
    }
}
