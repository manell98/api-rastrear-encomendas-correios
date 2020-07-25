import { CodigoRastreioService } from "../services/codigoRastreio.service";

export class CodigoRastreioController {

    private service: CodigoRastreioService;

    constructor({ service = new CodigoRastreioService() }) {
        this.service = service;
    }

    public async rastreiaEncomenda(body: any) {

        return this.service.rastreiaEncomenda(body);
    }
}
