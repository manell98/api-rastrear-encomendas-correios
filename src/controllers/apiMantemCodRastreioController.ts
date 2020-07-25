import { ApiMantemCodRastreioService } from "../services/apiMantemCodRastreioService";
import { ICodigoRastreio } from "../models/ICodigoRastreio";

export class ApiMantemCodRastreioController {

    private service: ApiMantemCodRastreioService;

    constructor({ service = new ApiMantemCodRastreioService() }) {
        this.service = service;
    }

    public async buscaCodRastreioPorId(id: number) {

        return this.service.buscaCodRastreioPorId(id);
    }

    public async salvaCodRastreio(body: ICodigoRastreio) {

        return this.service.salvaCodRastreio(body);
    }
}
