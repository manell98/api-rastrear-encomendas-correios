import { ICodigoRastreio } from "../models/ICodigoRastreio";

const { rastrearEncomendas } = require('correios-brasil')

export class ApiRastreioService {

    public async rastreiaEncomenda(body: ICodigoRastreio) {

        const codRastreio: Array<string|undefined> = [];

        codRastreio.push(body.codRastreio);

        const result = await rastrearEncomendas(codRastreio);

        if(result) { return result; }

        return [];
    }
}
